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
        // const schema = {
        //     email: Joi.string().email(),
        //     password: Joi.string().regex(
        //         new RegExp('^[a-zA-Z0-9]{8,32}$')
        //     )
        // }

        // const { error, value } = Joi.validate(req.body, schema)
        // if(error) {
        //     switch(error.details[0].context.key) {
        //         case 'email':
        //             res.status(400).send({
        //                 error: 'You must provide valid email address'
        //             })
        //         break
        //         case 'password':
        //             res.status(400).send({
        //                 error: `The password provided failed to match the following rules:`
        //             })
        //         break
        //         default:
        //             res.status(400).send({
        //                 error: 'Invalid registration information'
        //             })
        //     }
        // }
        // else {
        //     next()
        // }
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
           return res.json({ message: 'me'})
        }
        catch(err) {

        }
    }
}