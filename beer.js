function makeRequest(url) {

    const beers = JSON.parse(response);
    const image_url = beers[0].image_url;
    // console.log(image_url)
    let photo = document.getElementById('show_beer');
    photo.src = image_url;

}