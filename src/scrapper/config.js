const config = {
    SASTODEAL: {
        container: '#maincontent > .columns > div.column.main > #amasty-shopby-product-list > .products-grid > ol > li',
        productName: 'div.product-item-details > strong > a',
        price: 'div.product-item-details > div.price-final_price > span.pricenew > span.price-final_price > span.price-wrapper',
        imageUrl: 'div.product-item-info > a > span.product-image-container > span.product-image-wrapper',
        productLink: 'div.product-item-info > a'
    },
    OKDAM: {
        container: '#main > div.content-main > div.page-wrapper.cat-wrap > div > div.category-mainbar1 > div.feature-box1 > div.feature-wrap.clearfix > div.feature-box-home > div.row.category-list.trending-page > div.col-6.col-sm-6.col-md-6.col-lg-2.pro-wrap',
        productName: 'div.product-box > div.product-inner > a > div.product_name',
        price: 'div.product-box > div.product-inner > p.p-price-tag > span.og-price',
        imageUrl: 'div.product-box > a > img',
        productLink: 'a'
    },
    MUNCHA: {
        container: '.row > .col-xs-6.col-md-3',
        productName: '.product-caption > h5.product-caption-title-sm',
        price: '.product-caption > div.product-caption-price > span.product-caption-price-new',
        imageUrl: '.product-img-wrap > img.product-img-primary',
        productLink: 'a'
    }
}

module.exports = config