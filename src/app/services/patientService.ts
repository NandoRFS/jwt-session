import Patient from '../models/patient'
import User from '../models/user'
import Medication from '../models/medication'

export default class PatientService {
    
    public async create(body: any) {
        try {
            let patient = await Patient.create(body)

            return patient
        } catch(e) {
            console.log(e)
            throw e
        }
    }

    public async update(id: any, body: any) {
        try {
            await Patient.updateOne({_id: id}, {...body})

            let patient = await Patient.findOne({_id: id})

            return patient
        } catch(e) {
            console.log(e)
            throw e
        }
    }

    public async get(id: any) {
        try {
            let patient = await Patient.findOne({_id: id})
            
            let user = await User.findOne({_id: patient.user})
            patient.user = user

            // for(let m of patient.medication) {
            //     let medication = await Medication.findOne({_id: m.medication_id})
            //     patient.medication[patient.medication.indexOf(m)].medication_id = medication
            // }

            return patient
        } catch(e) {
            console.log(e)
            throw e
        }
    }

    public async getAll() {
        try {
            let patient = await Patient.find()

            for(let p of patient) {
                let user = await User.findOne({_id: p.user})
                patient[patient.indexOf(p)].user = user
            }

            return patient
            
        } catch(e) {
            console.log(e)
            throw e
        }
    }

    public async getByUser(id: any) {
        try {
            console.log('\n\nPATIENT ID: ', id, '\n\n')

            let patient = await Patient.findOne({user: id})
            console.log('\n\npatient: ', patient, '\n\n')
            let user = await User.findOne({_id: patient.user})
            patient.user = user
            return patient
        } catch(e) {
            console.log(e)
            throw e
        }
    }

    public async delete(id: any) {
        try {
            await Patient.deleteOne({_id: id})

            return {success: true}
        } catch(e) {
            console.log(e)
            throw e
        }
    }
}
