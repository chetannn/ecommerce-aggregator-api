const { User } = require('../database/models')
const uploadFile = require('../middleware/upload')

module.exports = {
  async getAllUsers(req, res) {
    try {
      const users = await User.findAll({
        attributes: { exclude: ['password'] }
      })
      
      if (users == null)
        return res.status(404).json({ message: 'users not found', data: users })

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
  },
  async uploadAvatar(req, res) {
      try {
           await uploadFile(req, res)
          const path = `/uploads/${req.file.filename}`
          await User.update({ profilePath: path }, { where: { id: req.user.id  } })
          res.json({ message: 'done', fileName: req.file.filename })
      }
      catch(e) {
        res.status(400).json({ message: e.message })
      }
      
  },
  async deleteUser(req, res) {
    const userId = +req.params.id
    try {
      const user = await User.findOne({
        where: {
          id: userId
        }
      })

      if(!user) return res.status(400).json({ message: 'Invalid Operation', success: false })

      await user.destroy()
      return res.status(200).json({ message: 'User Delete Successfully', success: true })
    }
    catch(e) {
      res.status(400).json({ message: e.message })
    }
  }
}
