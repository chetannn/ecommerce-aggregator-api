const { CategoryLink, Source } = require('../database/models')


class CategoryLinkRepository {

    async getLatestCategoryLink() {
        const lastestCategoryLink = await CategoryLink.findOne({
            order: [
                ['createdAt', 'DESC']
            ],
            include: Source
        })

        return lastestCategoryLink

    }
}

module.exports = CategoryLinkRepository