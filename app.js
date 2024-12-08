require("dotenv").config();
const express = require("express");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT;

//Handlebars Partials
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials" /*  function (err) {} */);

//Servir contenido estatico
app.use(express.static("public"));

//Usando handlebars(hbs)
app.get("/", (req, res) => {
  res.render("home", {
    //Enviando argumentos para los html {{title}} {{name}}
    title: "Curso Node",
    name: "Alejandro Aguilar",
  });
});

app.get("/generic", (req, res) => {
  res.render("generics", {
    //Enviando argumentos para los html {{title}} {{name}}
    title: "Curso Node",
    name: "Alejandro Aguilar",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    title: "Curso Node",
    name: "Alejandro Aguilar",
  });
});

//Estos son para servir el contenido estatico de la carpeta public que moviste a template para poder usar handlebars
app.get("/generic", (req, res) => {
  res.sendFile(__dirname + "/public/generic.html");
});

app.get("/elements", (req, res) => {
  res.sendFile(__dirname + "/public/elements.html");
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.get("/cashito", (req, res) => {
  res.send("Pagina de Cashito");
});
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
