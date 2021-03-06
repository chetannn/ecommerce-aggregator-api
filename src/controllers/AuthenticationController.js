const { User } = require('../database/models')
const bcrypt = require('bcrypt')

module.exports = {
  async register(req, res, next) {
    try {
      let userFromRequest = req.body
      const user = await User.findOne({
        attributes: {
          exclude: ['password']
        },
        where: {
          email: userFromRequest.email
        }
      })

      if (user)
        return res.status(400).send({
          error: 'This email account is already in use'
        })

      const rounds = 10
      const salt = await bcrypt.genSalt(rounds)
      userFromRequest.password = await bcrypt.hash(
        userFromRequest.password,
        salt
      )
      const userFromDb = await User.create(userFromRequest)

      let userJson = userFromDb.toJSON()
      delete userJson.password
      res.status(201).json({ user: userJson })

    } catch (err) {
      console.log(err)
      res.status(400).send({
        error: err
      })
    }
  },
  async login(req, res, next) {
    try {
      const { email, password } = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })

      if (!user) {
        return res.status(403).send({
          error: 'The login information was incorrect'
        })
      }

      const isPasswordValid = await user.comparePassword(password)
      if (!isPasswordValid) {
        return res.status(403).send({
          error: 'The login information was incorrect'
        })
      }
      res.send({
        user: user.toJSON(),
        token: user.generateAuthToken()
      })
    } catch (err) {
      return res.status(500).send({
        error: 'An error has occured trying to log in' + err
      })
    }
  },

  async me(req, res, next) {
    try {
      const user = await User.findOne({
        attributes: {
          exclude: ['password']
        },
        where: {
          id: req.user.id
        }
      })
      return res.json({ user: user.toJSON() })
    } catch (err) {}
  }
}
