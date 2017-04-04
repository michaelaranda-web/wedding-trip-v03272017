const path = require('path');
const express = require('express');
const fs = require("fs");
const bodyParser = require('body-parser');

module.exports = {
  writeToFile: function (pathToWrite, requestBody) {
    let donationEntry = "Name: " + requestBody.name + "\n" +
        "Email: " + requestBody.email + "\n" +
        "Comment: " + requestBody.comment + "\n\n";

    fs.appendFile(pathToWrite + "/donation_submissions.txt", donationEntry, function(err) {
      if(err) {
        return console.log(err);
      }

      console.log("The file was saved!");
    });
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
      self.writeToFile(path.join(__dirname, '/../donations'), req.body);
      res.sendStatus(200);
    });

    return app;
  }
};
