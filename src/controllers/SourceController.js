const { Source } = require('../database/models')
const { Pagination } = require('../helpers/pagination')

module.exports = {
    async getAll(req, res) {
        try {
            const count = await Source.count()
            console.log(count)
            if(count === 0) return res.status(404).json({ message: 'sources not found', data: null })
            const paginationInstance = new Pagination(count)
            paginationInstance.paginate(+req.query.page, +req.query.perPage)

            const offset = (paginationInstance.currentPage - 1) * paginationInstance.perPage
            const limit = paginationInstance.perPage

            const sources = await Source.findAll({
                offset,
                limit
            })

            paginationInstance.items = sources
            res.json({ message: 'sources found successfully',  data: paginationInstance })
        }
        catch(e) {
            console.log(e)
            res.status(400).send(e.message)
        }
    },
    async createSource(req, res) {
        try {
            const source = await Source.create(req.body)
      
            res
              .status(201)
              .json({ message: 'source created', data: source.toJSON() })
          } catch (e) {
            res.status(400).send(e.message)
          }
    },
     deleteSource(req, res) {

    }
}