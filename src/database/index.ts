import * as mongoose from 'mongoose'

// mongoose.connect('mongodb://127.0.0.1/tccrest')

const mongoClient = require("mongodb").MongoClient;
mongoClient.connect("mongodb://localhost:27017/tccrest", { useNewUrlParser:true, useUnifiedTopology: true})
  .then(conn => console.log(`Connected`))
  .catch(err => console.log(err)) 

mongoose.Promise = global.Promise

module.exports = mongoose