const { User } = require('../database/models')

module.exports = {
    test(req,res) {
        res.send('This is test!!!')
    },
    async getAllUsers(req,res) {
        try {
            const users = await User.findAll()

            return res.status(200).json({ users });
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }
}