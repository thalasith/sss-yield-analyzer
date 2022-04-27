const keys = require("./keys");

// Express App Setup
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

//Postgres Client Setup
const { Pool } = require("pg");
const pgClient = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

pgClient.on("connect", (client) => {
  client
    .query("CREATE TABLE IF NOT EXISTS items (title TEXT, description TEXT)")
    .catch((err) => console.error(err));
});

// Express route handlers
app.get("/", (req, res) => {
  res.send("Hi there");
});

//Dummy data for testing
const DUMMY_DATA = [
  { id: 1, title: "Hi test", description: "TEST" },
  { id: 2, title: "TESTING", description: "TESTING!!!" },
  { id: 3, title: "TEST", description: "FOR REALS" },
];

//Get DUMMY DATA
app.get("/testitems", (req, res) => {
  res.send(DUMMY_DATA);
});
//Get real data
app.get("/items", async (req, res) => {
  const items = await pgClient.query("SELECT * from items");
  res.send(items.rows);
});

//Post data
app.post("/items", async (req, res) => {
  const { title, description } = req.body;
  pgClient.query("INSERT INTO items(title, description) VALUES($1, $2)", [
    title,
    description,
  ]);
  res.send("Sent!");
});

app.listen(5000, (err) => {
  console.log("Listening");
});
