const mongoose = require('../../database')

const TipSchema = new mongoose.Schema({
	title: String,
    description: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})


const Tip = mongoose.model('Tip', TipSchema)

export default Tip
