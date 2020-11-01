const mongoose = require('../../database')

const PatientSchema = new mongoose.Schema({
	user :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
	name: String,
	birth: String,
	phone_number: String,
	age: Number,
	weight: Number,
	address: {
		zipcode: String,
		street: String,
		number: String,
		district: String,
		city: String,
		state: String
	},
	medication: [
		{
			medication_id: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Medication'
			},
			dose: String,
			break_schedule: String, //intervalo intrajornada
			instructions: String,
			treatment: [
				{
					main_date: Date, //data/hora que deveria tomar
					medicate_date: Date, //data/hora em que tomou
					medicated: Boolean // tomou no dia
				}
			],
			schedule_date: Date, //data próxima retirada
			pick_date: Date, //data em que retirou
			last_pick: {
				type: Boolean,
				default: false
			}
			// history: [
			// 	{
			// 		schedule_date: Date, //data próxima retirada
			// 		pick_date: Date, //data em que retirou
			// 		late: Boolean //atrasado
			// 	}
			// ]
		}
	],
	// withdrawal_history: [
	// 	{
	// 		medication: {
	// 			type: mongoose.Schema.Types.ObjectId,
	// 			ref: 'Medication'
	// 		}, // medicamentos que retirou
	// 		schedule_date: Date, //data próxima retirada
	// 		pick_date: Date, //data em que retirou
	// 		late: Boolean //atrasado
	// 	}
	// ],
    createdAt: {
        type: Date,
        default: Date.now
    }
})


const Patient = mongoose.model('Patient', PatientSchema)

export default Patient
