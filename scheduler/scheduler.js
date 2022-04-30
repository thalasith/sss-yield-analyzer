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

// pgClient.on("connect", (client) => {
//   client
//     .query(
//       "CREATE TABLE IF NOT EXISTS data (time DATE, utoPrice INT, nearPrice INT, data STRING)"
//     )
//     .catch((err) => console.error(err));
// });

// cron.schedule("*/5 * * * *", async () => {
//   console.log("running a task every five minutes");
//   const utoPrice = await axios.get(
//     "https://api.coingecko.com/api/v3/simple/price?ids=utopia-token&vs_currencies=usd"
//   );
//   const nearPrice = await axios.get(
//     "https://api.coingecko.com/api/v3/simple/price?ids=near&vs_currencies=usd"
//   );
//   const skelliesData = await axios.get(
//     "https://api-v2-mainnet.paras.id/collection-stats?collection_id=secretskelliessociety.near"
//   );
//   const grimmsData = await axios.get(
//     "https://api-v2-mainnet.paras.id/collection-stats?collection_id=grimms.secretskelliessociety.near"
//   );
//   const estatesData = await axios.get(
//     "https://api-v2-mainnet.paras.id/collection-stats?collection_id=estates.secretskelliessociety.near"
//   );

//   const compiledData = {
//     time: new Date().toISOString(),
//     utoPrice: utoPrice.data["utopia-token"].usd,
//     nearPrice: nearPrice.data["near"].usd,
//     data: [
//       {
//         title: "Secret Skellies",
//         utoReward: 10,
//         fp: (
//           skelliesData.data.data.results.floor_price / Math.pow(10, 24)
//         ).toFixed(2),
//       },
//       {
//         title: "Grimms Army",
//         utoReward: 6,
//         fp: (
//           grimmsData.data.data.results.floor_price / Math.pow(10, 24)
//         ).toFixed(2),
//       },
//       {
//         title: "Skullingham Estates",
//         utoReward: 12,
//         fp: (
//           estatesData.data.data.results.floor_price / Math.pow(10, 24)
//         ).toFixed(2),
//       },
//     ],
//   };
//   console.log(compiledData);
// });
