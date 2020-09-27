const mongoose = require('../../database')

const PharmacistProfileSchema = new mongoose.Schema({
	birth: Date,
	ctps: String,
    position: String,
    user :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

// PharmacistProfileSchema.pre('save', async function(next) {
//     const hash = await bcrypt.hash(this.password, 10)
//     this.password = hash

//     next()
// })

const Pharmacist = mongoose.model('PharmacistProfile', PharmacistProfileSchema)

export default Pharmacist
