const cron = require("node-cron");
const axios = require("axios");
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

cron.schedule("*/15 * * * *", async () => {
  console.log("running a task every 15 minutes");
  const utoPrice = await axios.get(
    "https://api.coingecko.com/api/v3/simple/price?ids=utopia-token&vs_currencies=usd"
  );
  const nearPrice = await axios.get(
    "https://api.coingecko.com/api/v3/simple/price?ids=near&vs_currencies=usd"
  );
  const skelliesData = await axios.get(
    "https://api-v2-mainnet.paras.id/collection-stats?collection_id=secretskelliessociety.near"
  );
  const grimmsData = await axios.get(
    "https://api-v2-mainnet.paras.id/collection-stats?collection_id=grimms.secretskelliessociety.near"
  );
  const estatesData = await axios.get(
    "https://api-v2-mainnet.paras.id/collection-stats?collection_id=estates.secretskelliessociety.near"
  );

  // token_price data
  let price_date = new Date().toISOString();
  let uto_price = utoPrice.data["utopia-token"].usd;
  let near_price = nearPrice.data["near"].usd;

  // collection_price data
  let skellies_fp = (
    skelliesData.data.data.results.floor_price / Math.pow(10, 24)
  ).toFixed(2);
  let grimms_fp = (
    grimmsData.data.data.results.floor_price / Math.pow(10, 24)
  ).toFixed(2);
  let skullingham_fp = (
    estatesData.data.data.results.floor_price / Math.pow(10, 24)
  ).toFixed(2);

  pgClient.query(
    "INSERT INTO token_prices(price_date, uto_price, near_price, skellies_fp, grimms_fp, skullingham_fp) VALUES ($1, $2, $3, $4, $5, $6)",
    [price_date, uto_price, near_price, skellies_fp, grimms_fp, skullingham_fp]
  );
});
