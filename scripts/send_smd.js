// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.ACc0220dc76316f0cffd6cdee8791b93a8;
const authToken = process.env.b7601d768ac629273334a98ba7e17403;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+19494492254',
     to: '+16478213456'
   })
  .then(message => console.log(message.sid));