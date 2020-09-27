const mongoose = require('../../database')

const MedicationSchema = new mongoose.Schema({
	name: String,
	company: String,
	amount: String,
	patient_leaflet: String, //url?
	professional_leaflet: String, //url?
    createdAt: {
        type: Date,
        default: Date.now
    }
})


const Medication = mongoose.model('Medication', MedicationSchema)

export default Medication
