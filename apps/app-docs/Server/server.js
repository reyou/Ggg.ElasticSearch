const appPort = 9000;
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
app.use(express.static(__dirname));
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(appPort, function () {
    console.log("server:", "http://localhost:" + appPort);
    console.log("__dirname:", __dirname);
});