class Pagination {
    constructor(total) {
        this.total = total
        this.hasNextPage = false
        this.hasPreviousPage = false
        this.items = null
        this.totalPages = 0
        this.perPage = 0
        this.currentPage = 0
    }

    paginate(pageNumber = 1, perPage = 5) {
        this.perPage = perPage
        this.totalPages = parseInt(Math.ceil((this.total / this.perPage)))
        this.currentPage = pageNumber
        this.hasNextPage = this.totalPages > this.currentPage
        this.hasPreviousPage = this.currentPage > 1
    }
}

module.exports = {
    Pagination
}