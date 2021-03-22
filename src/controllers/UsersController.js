const { User } = require('../database/models')

module.exports = {
  async getAllUsers(req, res) {
    try {
      const users = await User.findAll({
        attributes: { exclude: ['password'] }
      })
      return res.status(200).json({ users })
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }
}