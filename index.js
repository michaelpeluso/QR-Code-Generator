/* Intitialize */
const qr = require("qr-image");
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const router = express.Router();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

/* Get */
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

/* Post */
app.post("/", function (req, res) {
    var image = qr.image(req.body.user_link, { type: "png" });
    image.pipe(fs.createWriteStream(__dirname + "/qr-code-generator.png"));
    res.redirect("/");
});

/* LISTEN */
app.listen(3000, function () {
    console.log("Server running on port 3000.");
});
