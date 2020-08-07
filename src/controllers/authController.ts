import User from '../models/user'

export default class AuthController {
    
    public async createUser(req: any, res: any) {
        try {
            console.log(`AQUI`)
            let user = await User.create(req.body)
            console.log(`USER`, user)

            return res.json(user)
        } catch(e) {
            console.log(e)
            return res.status(400).send({error: 'Registration failed'})
        }
    }
}