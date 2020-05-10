fetch('https://api.punkapi.com/v2/beers/random')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        let photo = document.getElementById('show_beer');
        photo.src = data[0].image_url
        let clickBeer = document.querySelector('.clickBeer');
        clickBeer.addEventListener('click', () => {
            let showBeer = document.getElementById('show_beer');
            if (showBeer.style.display == 'block') {
                showBeer.style.display = 'none'
            } else {
                showBeer.style.display = 'block'
            }
        })
    })
