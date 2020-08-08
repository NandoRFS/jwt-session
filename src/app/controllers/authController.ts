import User from '../models/user'

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authConfig = require('../../config/auth')

export default class AuthController {

    public generateToken(params = {}) {
        return jwt.sign(params, authConfig.secret, {
            expiresIn: 36000
        })
    }
    
    public async createUser(req: any, res: any) {
        try {
            let user = await User.create(req.body)

            user.password = undefined

            return res.json({
                user, 
                token: this.generateToken({ id: user.id }) 
            })
        } catch(e) {
            console.log(e)
            return res.status(400).send({error: e})
        }
    }

    public async authenticate(req: any, res: any) {
        try {
            const { cpf, password } = req.body

            const user = await User.findOne({ cpf }).select(`+password`)

            if(!user)
                throw 'User not found!'

            if(!await bcrypt.compare(password, user.password))
                throw 'Invalid password!'

            user.password = undefined

            return res.json({
                user, 
                token: this.generateToken({ id: user.id }) 
            })
        } catch(e) {
            console.log(e)
            return res.status(400).send({error: e})
        }
    }
}