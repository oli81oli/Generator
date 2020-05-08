let tours = document.querySelector(".tours");
let magic = function () {
  let tour_style = document.getElementById("tour_style");
  if (tour_style.style.display == "none") {
    tour_style.style.display = "block";
  } else {
    tour_style.style.display = "none";
  }
};
tours.addEventListener("click", magic);

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
