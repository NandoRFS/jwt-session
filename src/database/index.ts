const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/restApi", { useNewUrlParser:true, useUnifiedTopology: true })

mongoose.set('useCreateIndex', true)

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))

db.once('open', () => console.log(`\nDatabase connection established`))

mongoose.Promise = global.Promise

module.exports = mongoose
