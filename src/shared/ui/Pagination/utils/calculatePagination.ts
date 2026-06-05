interface PaginationResult {
  totalPages: number
  pages: number[]
  firstPage: number | null
  lastPage: number | null
}

export const calculatePagination = (
  totalPosts: number,
  postsPerPage: number,
  currentPage: number,
): PaginationResult => {
  if (totalPosts <= 0 || postsPerPage <= 0) {
    return {
      totalPages: 0,
      pages: [],
      firstPage: null,
      lastPage: null,
    }
  }

  const totalPages = Math.ceil(totalPosts / postsPerPage)

  // Корректировка текущей страницы
  let page = currentPage
  if (page < 1) page = 1
  if (page > totalPages) page = totalPages

  let pages: number[] = []

  if (totalPages <= 4) {
    // Все страницы
    pages = Array.from({ length: totalPages }, (_, i) => i + 1)
  }
  else {
    // Определяем, какие страницы показывать
    if (page <= 2) {
      // В начале: показываем страницы 1-4
      pages = [1, 2, 3, 4]
    }
    else if (page >= totalPages - 1) {
      // В конце: показываем последние 4 страницы
      pages = [totalPages - 3, totalPages - 2, totalPages - 1, totalPages]
    }
    else {
      // В середине: показываем по 2 страницы слева и справа от текущей
      pages = [page - 2, page - 1, page, page + 1]
    }
  }

  // Определяем первую и последнюю страницы, если они не в массиве
  const firstPage = pages[0] === 1 ? null : 1
  const lastPage = pages[pages.length - 1] === totalPages ? null : totalPages

  return {
    totalPages,
    pages,
    firstPage,
    lastPage,
  }
}
