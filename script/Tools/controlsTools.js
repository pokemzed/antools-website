const likes = [...document.querySelectorAll('.like-tool')]
const favorites = [...document.querySelectorAll('.fav-tool')]

// coding for likes
likes.map(el => {
    el.addEventListener('click', (icon) => {
        let like = icon.target
        if(like.dataset.value === 'false'){
            like.setAttribute('src', './images/icons/likeon.svg')
            like.dataset.value = 'true'
        } else{
            like.setAttribute('src', './images/icons/like.svg')
            like.dataset.value = 'false'
        }
    })
})

// coding for favorites
favorites.map(el => {
    el.addEventListener('click', (icon) => {
        let favorite = icon.target
        if(favorite.dataset.value === 'false'){
            favorite.setAttribute('src', './images/icons/favoriteon.svg')
            favorite.dataset.value = 'true'
        } else{
            favorite.setAttribute('src', './images/icons/favorite.svg')
            favorite.dataset.value = 'false'
        }
    })
})