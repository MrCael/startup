# CS 260 Notes

[My startup - Freedom Dance Footwear](https://csecs260.click)

## Table of Contents
- [Helpful links](#helpful-links)
- [AWS](#aws)
  - [EC2 Steps](#ec2-steps)
  - [Route 53 Steps](#route-53-steps)
  - [Elastic IP Steps](#elastic-ip-steps)
- [Caddy](#caddy)
  - [Caddy Steps](#caddy-steps)
- [HTML](#html)
- [CSS](#css)
- [React Part 1: Routing](#react-part-1-routing)
- [React Part 2: Reactivity](#react-part-2-reactivity)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## AWS

My IP address is: 98.86.126.242

The first step in setting up AWS is creating an EC2 Node

### EC2 Steps:
- Log into AWS and go to the Console Home
- Select the EC2 service and click `Launch instance`
- name your instance \(A good name for the instance follows the convention \[owner\]-\[purpose\]-\[version\]\)
- Select AMI
- Select instance type
- Create a key pair
  - Name and create new key pair in AWS
  - Create a secure folder to it in \(a good convention is to create a .ssh folder in the base directory by running the commands `cd ~`, `mkdir .ssh`\)
  - Move the key pair file to this folder
  - Secure the folder by running this command `chmod 600 ~/.ssh/[key_pair_file_name]`
- Under Network Settings
  - make sure `Auto-assign Public IP` is enabled
  - Allow SSH, HTTPS, and HTTP traffic from anyone
- Select storage ammount \(can be upgraded later\)
- Click `Launch instance`

Next you'll need to create a domain with Route 53

### Route 53 Steps:
- On the Route 53 dashboard, type your desired domain name into the `Register Domain` search bar
- Select a domain name from the options and purchase it
- Go back to the Route 53 dashboard and click `Hosted Zones` in the menu on the left of the screen
- After waiting a bit, you should see your domain name. Click on it.
- Do the following twice
  - Click `Create Record`
  - Copy and paste the IP Address that correlates with your EC2 Node into the `Value` text box
  - Make sure the `Record Type` is set to A
  - /(Second time only/) Enter an asterisk \(`*`\) in the `Record name` text box. This configures for all subdomains under your main domain.

An optional final step is to associate an Elastic IP Address with your EC2 Node. That way you can power down the server when you don't need it to save money and keep the same IP Address when you power it back up again.

### Elastic IP Steps:
- On the EC2 dashboard select `Elastic IPs` from the menu on the left
- Press the `Allocate Elastic IP address` button
- Press the `Allocate` button
- There will be a new allocated IP address displayed. Click on it and click `Actions`
- Select `Associate Elastic IP address`
- Click `Instance` and select your server instance
- Click `Associate`
- Copy the Elastic IP Address and navigate back to your domain in Route 53
- Edit both the type A records you created earlier and paste the new Elastic IP Address into the `Value` box

Now you have a functioning server with a domain name that you can shut off and turn on at your leisure.

## Caddy

### Caddy Steps:
- Open the console
- Use `ssh` to shell into your production environment server with the command `ssh -i [key pair file] ubuntu@[yourdomainnamehere]`.
- Edit Caddyfile (Caddy's configuration file) with the command `vi Caddyfile`
- Edit each header of the file to contain your domain name
- Save the file and exit with `:wq`
- Restart Caddy so your changes take affect with the command `sudo service caddy restart`

## HTML

I have no problems with `HTML`. I've worked with it for 8 years, and some of those I've worked with it in a professional capacity. Some of my structure choices reflect the structural conventions of the html I worked with professionally, namely formatting the body content of a page primarily in tables.

## CSS

CSS can be super finicky, even with Bootstrap. But searching through the Bootstrap files did teach me some things about CSS that I didn't know before, like the `!important` keyword.

Media tags are also super nice, but I found they were also just as finicky. I had do a lot of finagling to get the scren to adjust the way I wanted it to.

## React Part 1: Routing

Vite was super easy to work with, I had some problems with my CSS, but they didn't take too long to get figured out. Using React felt really easy and fun, I looked forward to going back to my code each time I stopped working on it.

I also used AI to help me figure out how to make the most recently visited nav bar link stay highlighted when navigating to a page not on the nav bar. Doing that also helped me gain a better understanding of React in general, like how state variables work.

## React Part 2: Reactivity

This was a lot of fun to see it all come together. I had to keep remembering to use React state instead of just manipulating the DOM directly.

Handling the toggling of the checkboxes was particularly interesting.

```jsx
<div className="input-group sound-button-container">
  {calmSoundTypes.map((sound, index) => (
    <div key={index} className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        value={sound}
        id={sound}
        onChange={() => togglePlay(sound)}
        checked={selectedSounds.includes(sound)}
      ></input>
      <label className="form-check-label" htmlFor={sound}>
        {sound}
      </label>
    </div>
  ))}
</div>
```
