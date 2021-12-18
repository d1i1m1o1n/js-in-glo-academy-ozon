const search = () => {
    const search = document.querySelector('.search')
    const searchInput = search.querySelector('.search-wrapper_input')
    const searchBtn = search.querySelector('.search-btn button')

    const searchBtnHandler = () => {
        console.log(searchInput.value)
    }

    searchBtn.addEventListener('click', searchBtnHandler)
}

export default search;