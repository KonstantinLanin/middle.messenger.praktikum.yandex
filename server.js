const express = require("express");
require("dotenv").config();
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/dist"));

app.get("/", (req, res) => {
    res.status(200).sendFile(`${__dirname}/dist/index.html`);
});

app.get("/login.html", (req, res) => {
    res.sendFile(`${__dirname}/dist/index.html`);
});

app.get("/registration.html", (req, res) => {
    res.status(200).sendFile(`${__dirname}/dist/index.html`);
});

app.get("/chat.html", (req, res) => {
    res.status(200).sendFile(`${__dirname}/dist/index.html`);
});

app.get("/account.html", (req, res) => {
    res.status(200).sendFile(`${__dirname}/dist/index.html`);
});

app.get("/account_change_password.html", (req, res) => {
    res.status(200).sendFile(`${__dirname}/dist/index.html`);
});

app.get("/account_edit.html", (req, res) => {
    res.status(200).sendFile(`${__dirname}/dist/index.html`);
});

app.get("/error500.html", (req, res) => {
    res.status(500).sendFile(`${__dirname}/dist/index.html`);
});

app.get("/error.html", (req, res) => {
    res.status(404).sendFile(`${__dirname}/dist/index.html`);
});

app.listen(port, () => {
    console.log(`The app is listening on a port: ${port}`);
});
