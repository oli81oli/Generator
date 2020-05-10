// console.log(clickTour)
let tours = document.querySelector(".tours");
let clickTour = function () {
  let tour_style = document.getElementById("tour_style");
  if (tour_style.style.display == 'block') {
    tour_style.style.display = 'none';

  } else {
    tour_style.style.display = 'block';

  }
};
tours.addEventListener("click", () => {
  setTimeout(clickTour, 3000)
});





// setTimeout(clickTour, 3000)

// function show_tour(id) {
//     let theTour = document.getElementById(id);

//     if (theTour.style.display == 'none') {
//         theTour.style.display = 'block';
//     } else {
//         theTour.style.display = 'none';
//     }
// }
// window.onload = function() {
// show_tour('tour');
// show_form('form');

// }
