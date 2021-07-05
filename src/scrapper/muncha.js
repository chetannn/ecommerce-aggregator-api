const cheerio = require('cheerio')
const request = require('request')
const { MUNCHA } = require('./config')
const { Product, CategoryLink } = require('../database/models')

class MunchaScrapper {

    scrap(categoryLink) {
        const urlToScrape = `${categoryLink.Source.url}${categoryLink.link}`

        request(urlToScrape, async (err, response, body) => {

            if (err) throw new Error(err)

            const $ = cheerio.load(body)
            const container = $(MUNCHA.container)

            $(container).each(async function (idx, elem) {
                try {
                    const productLink = categoryLink.Source.url + $(this).find(MUNCHA.productLink).attr('href')
                    const imageUrl = $(this).find(MUNCHA.imageUrl).attr('src')
                    const productName = $(this).find(MUNCHA.productName).attr('title')
                    const price = $(this).find(MUNCHA.price).text()
                        .replace('Rs.', '')
                        .replace(',', '')

                    const product = {
                        productName,
                        productLink,
                        price,
                        source: 'Muncha',
                        sourceId: 3,
                        imageUrl
                    }

                    console.log('product::', product)

                    await Product.create(product)
                }

                catch (e) {
                    console.log(e)
                }

            })

            await CategoryLink.update({
                hasScrapped: true
            }, {
                where: {
                    id: categoryLink.id
                }
            })
        })
    }
}

module.exports = MunchaScrapper





