const { Pagination } = require('../../src/helpers/pagination')

describe('Pagination Test', () => {
    it('should create the instance of pagination class', () => {
       const paginationInstance = new Pagination(5)
       expect(paginationInstance).not.toBeNull()
    })

    it('should set the currentPage', () => {
        const itemsperPage = 2
        const totalCount = 15
        const currentPage = 1
        const paginationInstance = new Pagination(totalCount)
        paginationInstance.paginate(currentPage, itemsperPage)
        expect(paginationInstance.currentPage).toBe(currentPage)
    })

    it('should set the nextPage and previousPage flag based on total and currentPage', () => {
        const itemsperPage = 2
        const totalCount = 15
        const currentPage = 1
        const paginationInstance = new Pagination(totalCount)
        paginationInstance.paginate(currentPage, itemsperPage)
        expect(paginationInstance.hasNextPage).toBeTruthy()
        expect(paginationInstance.hasPreviousPage).toBeFalsy()
    })

    it('should set the nextPage flag to false if the currentPage is the last one', () => {
        const itemsperPage = 2
        const totalCount = 15
        const currentPage = 8
        const paginationInstance = new Pagination(totalCount)
        paginationInstance.paginate(currentPage, itemsperPage)
        expect(paginationInstance.hasNextPage).toBeFalsy()
    })

    it('should accurately calculate the totalPages based on totalCount', () => {
        const itemsperPage = 2
        const totalCount = 15
        const paginationInstance = new Pagination(totalCount)
        paginationInstance.paginate(null, itemsperPage)
        expect(paginationInstance.totalPages).toBeDefined()
        expect(paginationInstance.totalPages).not.toBeNull()
        expect(paginationInstance.totalPages).toBe(8)
    })
  })