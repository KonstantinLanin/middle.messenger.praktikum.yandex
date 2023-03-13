const path = require("path");
const server = require("express");
const app = server();

const port = process.env.PORT || 3000;

app.use(server.static(path.join(__dirname, "/dist")));

app.get("/", (req, res) => {
    res.status(200).sendFile(`${__dirname}/dist/index.html`);
});

app.get("/sign-up", (req, res) => {
    res.status(200).sendFile(`${__dirname}/dist/index.html`);
});

app.get("/messenger", (req, res) => {
    res.status(200).sendFile(`${__dirname}/dist/index.html`);
});

app.get("/settings", (req, res) => {
    res.status(200).sendFile(`${__dirname}/dist/index.html`);
});

app.get("/settings-change-password", (req, res) => {
    res.status(200).sendFile(`${__dirname}/dist/index.html`);
});

app.get("/settings-edit", (req, res) => {
    res.status(200).sendFile(`${__dirname}/dist/index.html`);
});

app.get("/error", (req, res) => {
    res.status(404).sendFile(`${__dirname}/dist/index.html`);
});

app.listen(port, () => {
    console.log(`The app is listening on a port: ${port}`);
});
