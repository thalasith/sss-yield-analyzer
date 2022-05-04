// Express App Setup
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
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
    .query(
      `CREATE TABLE IF NOT EXISTS token_prices (
        id SERIAL PRIMARY KEY,
        price_date DATE, 
        uto_price NUMERIC, 
        near_price NUMERIC,
        skellies_fp NUMERIC,
        grimms_fp NUMERIC,
        skullingham_fp NUMERIC)`
    )
    .catch((err) => console.error(err));
});

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Express route handlers
app.get("/", (req, res) => {
  res.send("Hi there");
});

app.get("/data", async (req, res) => {
  const token_prices = await pgClient.query(
    "SELECT * FROM token_prices ORDER BY id DESC LIMIT 1;"
  );

  const token_prices_rows = token_prices.rows[0];

  let compiledData = {
    utoPrice: parseFloat(token_prices_rows.uto_price),
    nearPrice: parseFloat(token_prices_rows.near_price),
    data: [
      {
        title: "Secret Skellies",
        utoReward: 10,
        fp: parseFloat(token_prices_rows.skellies_fp).toFixed(2),
      },
      {
        title: "Skullingham Estates",
        utoReward: 12,
        fp: parseFloat(token_prices_rows.skullingham_fp).toFixed(2),
      },
      {
        title: "Grimms Army",
        utoReward: 6,
        fp: parseFloat(token_prices_rows.grimms_fp).toFixed(2),
      },
    ],
  };

  res.send(compiledData);
});

app.listen(5000, (err) => {
  console.log("Listening");
});
