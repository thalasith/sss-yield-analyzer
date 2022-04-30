// Express App Setup
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Express route handlers
app.get("/", (req, res) => {
  res.send("Hi there");
});

app.get("/testdata", async (req, res) => {
  console.log("request made");
  // const utoPrice = await axios.get(
  //   "https://api.coingecko.com/api/v3/simple/price?ids=utopia-token&vs_currencies=usd"
  // );
  // const nearPrice = await axios.get(
  //   "https://api.coingecko.com/api/v3/simple/price?ids=near&vs_currencies=usd"
  // );
  // const skelliesData = await axios.get(
  //   "https://api-v2-mainnet.paras.id/collection-stats?collection_id=secretskelliessociety.near"
  // );
  // const grimmsData = await axios.get(
  //   "https://api-v2-mainnet.paras.id/collection-stats?collection_id=grimms.secretskelliessociety.near"
  // );
  // const estatesData = await axios.get(
  //   "https://api-v2-mainnet.paras.id/collection-stats?collection_id=estates.secretskelliessociety.near"
  // );

  // const compiledData = {
  //   utoPrice: utoPrice.data["utopia-token"].usd,
  //   nearPrice: nearPrice.data["near"].usd,
  //   data: [
  //     {
  //       title: "Secret Skellies",
  //       utoReward: 10,
  //       fp: (
  //         skelliesData.data.data.results.floor_price / Math.pow(10, 24)
  //       ).toFixed(2),
  //     },
  //     {
  //       title: "Grimms Army",
  //       utoReward: 6,
  //       fp: (
  //         grimmsData.data.data.results.floor_price / Math.pow(10, 24)
  //       ).toFixed(2),
  //     },
  //     {
  //       title: "Skullingham Estates",
  //       utoReward: 12,
  //       fp: (
  //         estatesData.data.data.results.floor_price / Math.pow(10, 24)
  //       ).toFixed(2),
  //     },
  //   ],
  // };

  const compiledData = {
    utoPrice: 0.470834,
    nearPrice: 12.79,
    data: [
      { title: "Secret Skellies", utoReward: 10, fp: "266.69" },
      { title: "Grimms Army", utoReward: 6, fp: "160.00" },
      { title: "Skullingham Estates", utoReward: 12, fp: "527.69" },
    ],
  };
  console.log(compiledData);
  res.send(compiledData);
});

app.listen(5000, (err) => {
  console.log("Listening");
});
