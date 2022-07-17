// npm init -y
// npm install express
require("dotenv").config();

const { request } = require("express");
const express = require("express");
const workoutRouter = require("./routes/workout");

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
// routes

app.use("/workout", workoutRouter);
// app.get("/hello", (req, res) => {
//   res.json({
//     data: [
//       {
//         name: "Adib Setiawan",
//         kelas: "XII",
//       },
//     ],
//   });
// });
// listen for request
app.listen(process.env.TEST, () => {
  console.log("listening on port", process.env.TEST);
});
