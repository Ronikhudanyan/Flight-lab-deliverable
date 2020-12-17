const dbConfig = require('./config/db.config')


const db = require("./models");
const Airport = db.airport;
const Flight = db.flight
const Passenger = db.passenger
const Terminal = db.terminal

// db connection
db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

//   AIRPORTS
// const airport = new Airport({
// 	name: "CDG",
// 	country: "France",
// 	opened: "2020-12-15"
// })

// airport.save()
// console.log("Airport saved", airport)


//TERMINAL
const terminal = new Terminal({
	name: "Terminal 1",
  flights: [flight1, flight2],
  capacity: 23432424,
})

// terminal.save()
// console.log("Terminal saved", terminal)

//FLIGHT
// const flight = new Flight({
//   from: "Heathrow",
//   to: "JFK",
//   airline: "British Airways",
//   name: "flight2"
// })

// flight.save()
// console.log("Flight saved", flight)

// //PASSENGER
// const passenger = new Passenger({
//   firstName: String,
//   lastName: String,
//   dob: Date
// })

// passenger.save()
// console.log("Passenger saved", passenger)