const { Source } = require('../database/models')
const { Pagination } = require('../helpers/pagination')

class SourceRepository {
    getAll() {

    }
    async getById(id) {
        try {
            const source = await Source.findOne({
                where: {
                    id
                }
            })
           if(!source) return null
           return source
        }
        catch(e) {
            throw e
        }
    }
    async create(source) {
        try {
            const sourceFromDB = await Source.create(source)
            if(!sourceFromDB.toJSON()) return null
            
            return sourceFromDB.toJSON()
          } catch (e) {
              //TODO: Log to file using winston
            throw e
          }
    }
    update(id) {

    }
    async delete(id) {
        const source = await this.getById(id)
        return await source.destroy()
    }
}

module.exports = SourceRepository