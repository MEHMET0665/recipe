const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

let corsOptions = {
  origin: "http://127.0.0.1:5500"
};

app.use(cors(corsOptions));
const db = require("./app/models");
db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {console.log("Connected to the database!");
  }).catch(err => {console.log("Cannot connect to the database!", err);
    process.exit();
  });

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to backend application." });
});
require("./app/routes/recipe.routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
require("./app/routes/recipe.routes")(app);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
const db = require("./app/models");
db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {console.log("Connected to the database!");
  }).catch(err => {console.log("Cannot connect to the database!", err);
    process.exit();
  });

