const express = require("express");
const bodyParser = require("body-parser");
const mongo = require("mongodb").MongoClient;
const url = "mongodb://localhost";

let db;

mongo.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) {
      console.error("Bling: " + err);
      return;
    } else {
      console.log("found");
    }
    db = client.db("testdb");
    console.log("running");
  }
);

const port = 3000;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const students = [
  { id: 1, name: "Eren Yaeger" },
  { id: 2, name: "Levi Ackermann" },
];

app.get("/surveys", (req, res) => {
  db.collection("testcoll")
    .find()
    .toArray(function (err, result) {
      if (err) throw err;

      res.send(result);
    });
});

app.get("/surveys/:id", (req, res) => {
  const id = req.params.id;
  res.send(students);
});

app.post("/surveys", (req, res) => {
  const content = req.body;
  students.push(content);
  res.send(content);
});

app.listen(port, () => console.log("Server ready"));
