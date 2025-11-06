const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const userCollection = db.collection('users');
const productCollection = db.collection('products');
const purchaseHistoryCollection = db.collection('purchaseHistories');

(async function testConnection() {
  try {
    await db.command({ ping: 1 });
  } catch (ex) {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  }
})();

function getUser(token) {
  return userCollection.findOne({ token: token });
}

function getUserByUserName(userName) {
    return userCollection.findOne({ userName: userName });
}

async function addUser(user) {
  await userCollection.insertOne(user);
}

async function updateUser(user) {
  await userCollection.updateOne({ userName: user.userName }, { $set: user });
}

async function getProducts(filter) {
    return productCollection.find(filter).toArray();
}

module.exports = {
  getUser,
  getUserByUserName,
  addUser,
  updateUser,
  getProducts
};