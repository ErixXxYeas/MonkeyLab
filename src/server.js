require("dotenv").config();

const { application } = require("express");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
//const bodyParser = require("body-parser");

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());

const testRouter = require("./routes/tests");
app.use("/test", testRouter);

app.listen(3000, () => console.log("Server started"));

/*
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
*/
