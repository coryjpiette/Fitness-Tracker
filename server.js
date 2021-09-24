
const express = require("express");
const path = require("path");

const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const logger = require("morgan");
const app = express();



app.use(logger("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());





mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/Cory_Database',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );
  

  
const db = require("./models");

require("./routes/apiRoutes")(app);
  require("./routes/htmlRoutes")(app);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });