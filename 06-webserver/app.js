const express = require("express");
const app = express();

app.set("view engine", "hbs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render('home');
});
app.get("/hola-mundo", (req, res) => {
  res.send("Hello on hello-world route");
});
app.get("/elements", (req, res) => {
  res.sendFile(__dirname + "/public/elements.html");
});
app.get("/generic", (req, res) => {
  res.sendFile(__dirname + "/public/generic.html");
});
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(8080);
