Mailjet Parse API Starter Kit
==

This starter kit helps you get started with the Parse API quickly.

Getting a webhook URL
--
*This part enables you to have a webhook URL while running the server locally. If you want to use your own remote server, feel free to do so and ignore this part.*

To use Mailjet's Parse API, you'll need a webhook URL. An easy way to get one is to use [ngrok](https://ngrok.com/) as it enables you to create secure tunnels to localhost. Download and install it.

Once it's done,
  1. `git clone` this repo
  2. `npm install` it to download dependencies
  3. run it with `node server.js`
  4. in a different terminal, create a tunnel with the command `ngrok http 3000` (you can change the port, but don't forget to also change it in **server.js** as it is configured to 3000 by default)

Creating a parse route
--
Simply follow the instructions [here](http://dev.mailjet.com/guides/?shell#basic-setup) to create a `parseroute`. You'll get a response with the email address ready to be used with your webhook.

I recommend specifying a `/parse` route (**server.js** is listening to your webhook on the `/parse` route). Eg: [https://username:password@www.example.com/parse](). You can still change the route but don't forget to change it in **server.js** too.

Listening to your webhook
--
All you have to do now is write the magic in *server.js*. By default, *server.js* console.logs the content of the payload. Feel free to do whatever you want with this content!  

Once it's done, just `node server.js` and `ngrok http 3000` to get your server and your tunnel up and running! Each time the email address associated with your webhook receives an email, your code magic will execute!
