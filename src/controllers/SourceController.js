const { Source } = require('../database/models')
const { Pagination } = require('../helpers/pagination')
const SourceRepository = require('../repositories/SourceRepository')

module.exports = {
    async getAll(req, res) {
        try {
            const count = await Source.count()
            if(count === 0) return res.status(404).json({ message: 'sources not found', data: null })
            const paginationInstance = new Pagination(count)
            paginationInstance.paginate(+req.query.page || 1, +req.query.perPage || 5)

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
            const repo = new SourceRepository()
            const source = await repo.create(req.body)
            res
              .status(201)
              .json({ message: 'Source Created Successfully', data: source })
          } catch (e) {
            res.status(400).send(e.message)
          }
    },
     async deleteSource(req, res) {
        const sourceId = +req.params.id
        try {
            const repo = new SourceRepository()
            const source = await repo.getById(sourceId)
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
    },
    async getSourceById(req, res) {
        const sourceId = +req.params.id
        try {
            const repo = new SourceRepository()
            const source = await repo.getById(sourceId)
            if(!source) return res.status(400).json({ message: 'Source not found', success: false })
            
          return res.status(200).json({ message: 'Source found Successfully', success: true, data: source })
        }
        catch(e) {
            res.status(400).send(e.message)
        }
    },
    async updateSource(req, res) {
        const sourceId = +req.params.id
        
        try {

            await Source.update(req.body, {
                where: {
                    id: sourceId
                }
            })

            return res.json({ message: 'Source Updated successfully', success: true })
        }

        catch(e) {
            res.status(400).send(e.message)
        }
    }
}