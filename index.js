const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bookRoutes = require("./routes/bookroutes");

const PORT = 3300;
const DB_STRING = "mongodb://localhost:27017/book-library";

app.use(express.json())
app.use(bookRoutes);

mongoose
  .connect(DB_STRING)
  .then((result) => {
    app.listen(PORT, () => {
      console.log("Servidor ligado........");
    });
  })
  .catch((error) => console.error(error));
