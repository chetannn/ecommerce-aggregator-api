// const Joi = require('joi')
const { User } = require('../database/models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const env = process.env.NODE_ENV || 'development'
const config = require(__dirname + '../../config/config.json')[env]


function jwtSignUser(user) {
    const ONE_WEEK = 60 * 60 * 24 *  7 
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK,

    })
}

module.exports = {
    async register(req, res, next) {
        try {
            const user = await User.create(req.body)
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

            // const isPasswordValid = await user.comparePassword(password)
            const isPasswordValid = await bcrypt.compare(password, user.password)

            if(isPasswordValid) {
                return res.status(403).send({
                    error: 'The login information was incorrect'
                })
            }
            const userJson = user.toJSON()
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })
        }
        catch(err) {
            return res.status(500).send({
                error: 'An error has occured trying to log in' + err
            })
        }
    }
}