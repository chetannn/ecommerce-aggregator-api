const { User } = require('../database/models')
const bcrypt = require('bcrypt')

module.exports = {
    async register(req, res, next) {
        try {
            let userFromRequest = req.body
            const salt = await bcrypt.genSalt(10)
            userFromRequest.password = await bcrypt.hash(userFromRequest.password, salt)
            const user = await User.create(userFromRequest)
            res.status(201).send(user.toJSON())
        }
        catch(err) {
            res.status(400).send({
                error: 'This email account is already in use'
            })
        }
    },
    async login(req,res, next) {
        try {
            const { email, password } = req.body
            const user = await User.findOne({
                where: {
                    email: email
                }
            })

            if(!user) {
                return res.status(403).send({
                    error: 'The login information was incorrect'
                })
            }

            const isPasswordValid = await user.comparePassword(password)
            if(!isPasswordValid) {
                return res.status(403).send({
                    error: 'The login information was incorrect'
                })
            }
            res.send({
                user: user.toJSON(),
                token: user.generateAuthToken()
            })
        }
        catch(err) {
            return res.status(500).send({
                error: 'An error has occured trying to log in' + err
            })
        }
    },

    async me(req, res, next) {
        try {
            const user = await User.findOne({
                where: {
                    id: req.user.id
                }
            })
           return res.json({ user: user.toJSON() })
        }
        catch(err) {
           
        }
    }
}