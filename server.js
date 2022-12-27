const express = require('express');
const { connect } = require('./Config/db.config');
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config()
const app = express();
const db = connect();

var corsOptions = {
    origin: "*"
};

app.use(cors(corsOptions));
//
app.use(bodyParser.json());
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Production 
db.sequelize.sync()
    .then(() => {
        console.log("Synced db.");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    }); 
//

// For Development
// db.sequelize.sync({ force: true }).then(() => {
//     console.log(`\n Drop and re-sync db. \n`);
// });

require("./Routes/movie.routes")(app);
require("./Routes/mutation.routes")(app);

app.get('/', (req, res) => {
    res.send(`\n <h1>API Works !!!</h1> \n`)
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`\n Server listening on the port  ${port} \n`);
})