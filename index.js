const server = require("./src/app.js");
// const { conn } = require("./src/db.js");
const { mongoConenction } = require("./src/mongo.js");
const port = process.env.PORT || 3000;

// conn.sync({ force: false }).then(() => {
//   server.listen(port, () => {
//     console.log(`Server running on port ${port}`);
//   });
// });

mongoConenction().then(() => {
  server.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});

