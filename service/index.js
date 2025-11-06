require("dotenv").config({ path: __dirname + "/.env" });

const cookieParser = require('cookie-parser');
const express = require('express');

const { Resend } = require("resend");

const jsonpatch = require('fast-json-patch');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const app = express();
const DB = require('./database.js');

const resend = new Resend(process.env.RESEND_API_KEY);
const authCookieName = 'token';

let users = [];

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

async function findUser(field, value) {
    if (!value) return null;

    return users.find((u) => u[field] === value);
}

async function createUser(userName, password) {
    const passwordHash = await bcrypt.hash(password, 10);

    const user = {
        userName: userName,
        password: passwordHash,
        token: uuid.v4(),
    };

    await DB.addUser(user);
    return user;
}

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    maxAge: 1000 * 60 * 60 * 24 * 365,
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

// Middleware to verify that the user is authorized to call an endpoint
const verifyAuth = async (req, res, next) => {
    const user = await DB.getUser(req.cookies[authCookieName]);
    if (user) {
        req.user = user;
        next();
    } else {
        res.status(401).send({ msg: 'Unauthorized' });
    }
};

// JSON body parsing using built-in middleware
app.use(express.json());

// Use the cookie parser middleware for tracking authentication tokens
app.use(cookieParser());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
    if (await DB.getUserByUserName(req.body.userName)) {
        res.status(409).send({ msg: 'Existing user' });
    } else {
        const user = await createUser(req.body.userName, req.body.password);

        setAuthCookie(res, user.token);
        res.send({ userName: user.userName });
    }
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
    const user = await DB.getUserByUserName(req.body.userName);
    if (user) {
        if (await bcrypt.compare(req.body.password, user.password)) {
            user.token = uuid.v4();
            setAuthCookie(res, user.token);
            DB.updateUser(user);
            res.send({ userName: user.userName });
            return;
        }
    }
    res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth logout a user
apiRouter.delete('/auth/logout', async (req, res) => {
    const user = await findUser('token', req.cookies[authCookieName]);
    if (user) {
        delete user.token;
        DB.updateUser(user);
    }
    res.clearCookie(authCookieName);
    res.status(204).end();
});

// Get user personal information
apiRouter.get("/user/personalInfo", verifyAuth, (req, res) => {
    const user = req.user;

    if (!user.profile) {
        user.profile = { "firstName": null, "lastName": null, "email": null, "phone": null, "notifications": false };
        DB.updateUser(user);
    }

    res.send({ profile: user.profile });
});

// Edit user personal information
apiRouter.patch("/user/personalInfo", verifyAuth, (req, res) => {
    const user = req.user;
    
    jsonpatch.applyPatch(user, req.body);
    DB.updateUser(user);

    res.send({ msg: "User successfully updated", user });
});

apiRouter.post("/user/email", async (req, res) => {
    console.log("📨 Received test email request");
    try {
        const data = await resend.emails.send({
            from: "Freedom Dance Footwear <fdf@startup.csecs260.click>",
            to: req.body.to,
            subject: req.body.subject,
            html: req.body.html
        });

        console.log("✅ Resend response:", data);
        res.send({ success: true, data });
    } catch (err) {
        console.error("❌ Error sending email:", err);
        res.status(500).send({ error: err.message });
    }

});

// Get user addresses
apiRouter.get("/user/shippingInfo", verifyAuth, (req, res) => {
    const user = req.user;

    if (!user.addressList) {
        user.addressList = [];
        DB.updateUser(user);
    }

    res.send({ addressList: user.addressList });
});

// Add address to user
apiRouter.patch("/user/shippingInfo", verifyAuth, (req, res) => {
    const user = req.user;

    if (user.addressList.find(address => JSON.stringify(address) === JSON.stringify(req.body[0].value))) {
        res.status(409).send({ msg: "Address already assigned to user", addressList: user.addressList });
    } else {
        jsonpatch.applyPatch(user, req.body);
        DB.updateUser(user);

        res.send({ addressList: user.addressList });
    }
});

// Get user cards
apiRouter.get("/user/billingInfo", verifyAuth, (req, res) => {
    const user = req.user;

    if (!user.cardList) {
        user.cardList = [];
        DB.updateUser(user);
    }

    res.send({ cardList: user.cardList });
});

// Add cards to user
apiRouter.patch("/user/billingInfo", verifyAuth, (req, res) => {
    const user = req.user;

    if (user.cardList.find(card => JSON.stringify(card) === JSON.stringify(req.body[0].value))) {
        res.status(409).send({ msg: "Card already assigned to user", cardList: user.cardList });
    } else {
        jsonpatch.applyPatch(user, req.body);
        DB.updateUser(user);

        res.send({ cardList: user.cardList });
    }
});

// Get user measurements
apiRouter.get("/user/measurementInfo", verifyAuth, (req, res) => {
    const user = req.user;

    if (!user.measurements) {
        user.measurements = {
            "left": { "1": null, "2": null, "3": null, "4": null, "5": null, "5a": null, "6": null, "6a": null, "7": null, "7a": null, "8": null, "8a": null, "9": null, "10": null },
            "right": { "1": null, "2": null, "3": null, "4": null, "5": null, "5a": null, "6": null, "6a": null, "7": null, "7a": null, "8": null, "8a": null, "9": null, "10": null }
        };
        DB.updateUser(user);
    }

    res.send({ measurements: user.measurements });
});

// Add measurements to user
apiRouter.patch("/user/measurementInfo", verifyAuth, (req, res) => {
    const user = req.user;

    jsonpatch.applyPatch(user, req.body);
    DB.updateUser(user);

    res.send({ msg: "Measurements successfully updated" });
});

// Get user for profile page
apiRouter.get("/user/profile", verifyAuth, (req, res) => {
    res.send({ user: req.user });
});

// Default error handler
app.use(function (err, req, res, next) {
    res.status(500).send({ type: err.name, message: err.message });
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});