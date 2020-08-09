const mongoose = require('../../database')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    cpf: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        select: false
    },
    passwordResetToken: {
        type: String,
        select: false
    },
    passwordResetExpires: {
        type: Date,
        select: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

UserSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash

    next()
})

const User = mongoose.model('User', UserSchema)

export default User
