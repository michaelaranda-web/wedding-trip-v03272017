const path = require('path');
const express = require('express');
const fs = require("fs");
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

module.exports = {
  sendDonationNotificationEmail: function (req, res) {
    let transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'martina.michael.wedding.trip@gmail.com', // Your email id
        pass: 'weddingtrip2017' // Your password
      }
    });

    let text = this.createEmailBody(req);
    let mailOptions = {
      from: 'martina.michael.wedding.trip@gmail.com', // sender address
      to: 'michaelaranda0@gmail.com', // list of receivers
      subject: 'Donation received from ' + req.body.name + '!', // Subject line
      text: text //, // plaintext body
    };

    transporter.sendMail(mailOptions, function(error, info){
      if(error){
        console.log(error);
        res.json({yo: 'error'});
      }else{
        console.log('Message sent: ' + info.response);
        res.json({yo: info.response});
      };
    });
  },

  createEmailBody(req) {
    let text = "Hooray! A donation was just made to the M+M Wedding Trip.\n" +
        "\nDonation from:" + req.body.name +
        "\nEmail: " + req.body.email +
        "\nDonation Item: " + req.body.donationItem +
        "\nDonation Amount: " + req.body.donationAmount +
        "\nComment: " + req.body.comment;

    return text;
  },

  app: function () {
    let self = this;

    const app = express();
    const indexPath = path.join(__dirname, '/../index.html');
    const publicPath = express.static(path.join(__dirname, '../public'));

    app.use('/public', publicPath);
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.get('/', function (_, res) { res.sendFile(indexPath) });
    app.post('/api/submit_donation', function (req, res) {
      self.sendDonationNotificationEmail(req, res);
    });

    return app;
  }
};
