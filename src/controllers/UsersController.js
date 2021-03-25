const { User } = require('../database/models')

module.exports = {
  async getAllUsers(req, res) {
    try {
      const users = await User.findAll({
        attributes: { exclude: ['password'] }
      })
      
      if (users == null)
        res.status(404).json({ message: 'users not found', data: users })

      return res.status(200).json({ users })
    } catch (error) {
      return res.status(500).send(error.message)
    }
  },
  async updateProfile(req, res) {
    //TODO: If in case anyone passes the middleware
    if(!req.user) return res.status(401).json({ message: 'Unauthorized access' })
    let flag = false

    try {
        const result = await User.update(req.body, {
          where: { id: req.user.id }
        })

        if(result && result[0]) {
            flag = true
        }

        res.json({ message: 'User update successfully', success: flag })
    }
    catch(e) {
      res.status(400).json({ message: e.message })
    }
  }
}
