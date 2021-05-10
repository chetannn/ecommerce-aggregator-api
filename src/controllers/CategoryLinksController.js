const { CategoryLink, Source } = require('../database/models')
const  { Pagination } = require('../helpers/pagination')

module.exports = {
    async getAll(req, res) {
        try {
            const count = await CategoryLink.count()
            if(count === 0) return res.status(404).json({ success: true, data: null, message: 'Category Links not found' })

            const paginationInstance = new Pagination(count)
            paginationInstance.paginate(+req.query.page, +req.query.perPage)
            const offset = (paginationInstance.currentPage - 1) * paginationInstance.perPage
            const limit = paginationInstance.perPage

            const categoryLinks = await CategoryLink.findAll({
                offset,
                limit
            })

            paginationInstance.items = categoryLinks
            
            return res.json({ success: true, message: 'Category Links found', data: paginationInstance })
        }
        catch(e) {
            return res.status(400).json({ success: false, message: e.message })
        }
    },
    async getById(req, res) {
        try {
            const id = +req.params.id
            const categoryLink = await CategoryLink.findOne({
                where: {
                    id
                }
            })

            if(!categoryLink) return res.status(404).json({ success: true, data: null, message: 'Category Link not found' })
            
            return res.status(404).json({ success: true, data: categoryLink, message: 'Category Link found' })
        }
        catch(e) {
            return res.status(400).json({ success: false, message: e.message })
        }
    },
    async createCategoryLink(req, res) {
        try {
           const categoryLink = await CategoryLink.create(req.body)
           res.status(201).json({ success: true, message: 'Category Link Successfully Added', data: categoryLink.toJSON() })
        }
        catch(e) {
            return res.status(400).json({ success: false, message: e.message })
        }
    },
    async deleteCategoryLink(req, res) {
        try {
            const id = +req.params.id
            const categoryLink = await CategoryLink.findOne({
                where: {
                    id
                }
            })
            if(!categoryLink) return res.status(404).json({ success: true, data: null, message: 'Category Link not found' })

            await categoryLink.destroy()
            return res.json({ success: true, message: 'Category Link Deleted Successfully' })
        }
        catch(e) {
            return res.status(400).json({ success: false, message: e.message })
        }
    },
    async updateCategoryLink(req, res) {
        try {
            const id = +req.params.id
            const categoryLink = await CategoryLink.findOne({
                where: {
                    id
                }
            })

            if(!categoryLink) return res.status(404).json({ success: true, data: null, message: 'Category Link not found' })
            const { sourceId, link  } = req.body
            categoryLink.sourceId = sourceId
            categoryLink.link = link
            await categoryLink.save()
            return res.json({ success: true, message: 'Category Link Updated Successfully', data: categoryLink })
        }
        catch(e) {
            return res.status(400).json({ success: false, message: e.message })
        }
    },
    async getCategoryLinksBySourceId(req, res) {
        try {
            const sourceId = +req.params.sourceId
            const categoryLinks = await CategoryLink.findAll({
                include: Source,
                where: {
                    sourceId
                }
            })

            if(!categoryLinks)
                return res.status(400).json({ success: true, data: null, message: 'Category Links not found' })

            return res.json({ success: true, message: 'Category Links found', data: categoryLinks })
        }
        catch(e) {
            return res.status(400).json({ success: false, message: e.message })
        }
    }
    
}