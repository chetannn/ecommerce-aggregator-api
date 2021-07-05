const schedule = require('node-schedule')
const CategoryLinkRepository = require('../repositories/CategoryLinkRepository');
const SastodealScrapper = require('../scrapper');
const MunchaScrapper = require('../scrapper/muncha');
const OkScrapper = require('../scrapper/ok')

const scheduler = {

    start() {

        schedule.scheduleJob('*/1 * * * *', async function () {
            const repo = new CategoryLinkRepository()
            const categoryLink = await repo.getLatestCategoryLink()

            if (categoryLink) {
                if (!categoryLink.hasScrapped) {

                    switch (categoryLink.sourceId) {

                        case 1:
                            const sastodealScrapper = new SastodealScrapper()
                            sastodealScrapper.scrap(categoryLink)
                            break;

                        case 2:
                            const okScrapper = new OkScrapper()
                            okScrapper.scrap(categoryLink)
                            break;

                        case 3:
                            const munchaScrapper = new MunchaScrapper()
                            munchaScrapper.scrap(categoryLink)
                            break;

                    }
                }
            }

        });
    },

}

module.exports = scheduler