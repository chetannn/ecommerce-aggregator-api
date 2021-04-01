const { Source } = require('../database/models')
const { Pagination } = require('../helpers/pagination')

module.exports = {
    async getAll(req, res) {
        try {
            const count = await Source.count()
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
     async deleteSource(req, res) {
        const sourceId = +req.params.id
        try {
            const source = await Source.findOne({
                where: {
                    id: sourceId
                }
            })

          if(!source) return res.status(400).json({ message: 'Invalid Operation', success: false })
          await source.destroy()
          return res.status(200).json({ message: 'Source Delete Successfully', success: true })
        }
        catch(e) {
            res.status(400).send(e.message)
        }

    },
     async getStatistics(req, res) {
       const result = await Source.getStatistics()
       return res.status(200).json({ status: true, data: result[0] })
    }
}