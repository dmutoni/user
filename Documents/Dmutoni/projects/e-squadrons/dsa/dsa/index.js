const express = require('express');
const locationsController = require('./controllers/locations.controller');
const victimsController = require('./controllers/victims.controller');
const usersController = require('./controllers/users.controller');
const levelsController = require('./controllers/levels.controller');
const highRiskZones = require('./controllers/high-risk-zone.controller');
const donations = require('./controllers/donations.contoller');
const dbConnection = require('./config/db.config');
// const cors = require("cors");
// const { Validator } = require('node-input-validator');

let app = express();

// app.use(cors(corsOptions));
// app.use(Validator);
const bodyparser = require('body-parser');
// const { validator } = require('payload-validator');
app.use(bodyparser.json());

app.use(bodyparser.urlencoded({ extended: true }));


app.use("/api/users", usersController);
app.use("/api/victims", victimsController);
app.use("/api/levels", levelsController);
app.use("/api/locations", locationsController);
app.use('/api/h_zones', highRiskZones)
app.use('/api/donations', donations)

// app.get("/",(req,res) => {
//     res.json({message: "Welcome to dms application. "});
// })
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express server running on port ${PORT} .`));