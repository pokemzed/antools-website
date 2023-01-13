const renderTools = () => {
    const category = document.querySelector('.tools-category')

    // Render category card
    const markupCategory = (tool) => {
        category.insertAdjacentHTML('beforeend', tool)
    }

    // Enumeration array
    DATA_TOOLS.map(({img, title, subtitle, text}) => {
        let html = `
            <div class="${title.toLowerCase()}-tool tool">
                <div class="tool-main__wrap">
                    <img src="${img}" alt=${title.toLowerCase()}>
                    <div class="tool-title">
                        <h3>${title}</h3>
                        <span>${subtitle}</span>
                    </div>
                </div>
                <p>${text}</p>
                <div class="tool-controls__wrap">
                    <div class="controls-elements">
                        <img class="like-tool" data-value="false" src="./images/icons/like.svg" alt="like">
                        <img class="fav-tool" data-value="false" src="./images/icons/favorite.svg" alt="favorite">
                    </div>
                    <button id="visitCards">Visit</button>
                </div>
            </div>
        `
        markupCategory(html)
})
}
renderTools()