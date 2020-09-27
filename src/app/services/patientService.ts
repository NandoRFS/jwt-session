import Patient from '../models/patient'

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

            return patient
        } catch(e) {
            console.log(e)
            throw e
        }
    }

    public async getAll() {
        try {
            let patient = await Patient.find()

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
