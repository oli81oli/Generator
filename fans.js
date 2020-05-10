let fans = document.querySelector(".fans");
fans.addEventListener("click", function () {
    let form = document.getElementById("form");
    let perfect = document.getElementById("perfect");
    if (form.style.display == 'block') {
        form.style.display = 'none';
        perfect.style.display = 'none'
    } else {
        form.style.display = 'block';
    
    }
});

let signIn = document.querySelector(".btn_primary");
signIn.addEventListener("click", function () {
    let email = document.getElementById("inputEmail4");
    let okEmail = email.value;
    let ifEmail = new RegExp("[a-zA-Z0-9_.-]+@+[a-zA-Z0-9_.-]+.+[a-zA-Z]{2,4}");
    let vEmail = document.getElementById("msg-email");
    let address = document.getElementById("inputAddress");
    let okAddress = address.value;
    let ifAddress = new RegExp("[a-zA-Z0-9/,ºª]");
    let vAddress = document.getElementById("msg-address");
    let city = document.getElementById("inputCity");
    let vCity = document.getElementById("msg-city");
    let state = document.getElementById("inputState");
    let vState = document.getElementById("msg-state");
    let zip = document.getElementById("inputZip");
    let okZip = zip.value;
    let ifZip = new RegExp("[0-9]");
    let vZip = document.getElementById("msg-zip");

    let validEmail = function () {
        if (ifEmail.test(okEmail)) {
            vEmail.style.display = "none";
            return true;
        } else {
            vEmail.style.display = "block";
            return false;
        }
    };

    let validAddress = function () {
        if (ifAddress.test(okAddress)) {
            vAddress.style.display = "none";
            return true;
        } else {
            vAddress.style.display = "block";
            return false;
        }
    };

    let validCity = function () {
        if (city.value.length > 0) {
            vCity.style.display = "none";
            return true;
        } else {
            vCity.style.display = "block";
            return false;
        }
    };

    let validState = function () {
        if (state.value.length > 0) {
            vState.style.display = "none";
            return true;
        } else {
            vState.style.display = "block";
            return false;
        }
    };

    let validZip = function () {
        if (ifZip.test(okZip)) {
            vZip.style.display = "none";
            return true;
        } else {
            vZip.style.display = "block";
            return false;
        }
    };
    let perfect = document.getElementById("perfect");
    if (ifEmail.test(okEmail) && ifAddress.test(okAddress) && city.value.length > 0 && state.value.length > 0 && ifZip.test(okZip) ) {
        // alert('You have been registred successfully');
        perfect.style.display = "block";
        validEmail();
        validAddress();
        validCity();
        validState();
        validZip();
    } else {
        perfect.style.display = "none";
        validEmail();
        validAddress();
        validCity();
        validState();
        validZip();
    }
});































// window.onload = function () {
//   show_form("form");
// show_tour('tour');
// };

// function show_alert() {
//     let email = document.getElementById('inputEmail4');
//     let okEmail = email.value;
//     let ifEmail = new RegExp("[a-zA-Z0-9_.-]+@+[a-zA-Z0-9_.-]+.+[a-zA-Z]{2,4}");
//     let vEmail = document.getElementById('msg-email');
//     let address = document.getElementById("inputAddress");
//     let okAddress = address.value;
//     let ifAddress = new RegExp("[a-zA-Z0-9/,ºª]");
//     let vAddress = document.getElementById('msg-address');
//     let city = document.getElementById('inputCity');
//     let vCity = document.getElementById('msg-city');
//     let state = document.getElementById("inputState");
//     let vState = document.getElementById('msg-state');
//     let zip = document.getElementById("inputZip");
//     let okZip = zip.value;
//     let ifZip = new RegExp("[0-9]");
//     let vZip = document.getElementById('msg-zip');

//     let validEmail = function() {
//         if (ifEmail.test(okEmail)) {
//             vEmail.style.display = 'none';
//             return true
//         } else {
//             vEmail.style.display = 'block';
//             return false;
//         }
//     };

//     let validAddress = function() {
//         if (ifAddress.test(okAddress)) {
//             vAddress.style.display = 'none';
//             return true;
//         } else {
//             vAddress.style.display = 'block';
//             return false;
//         }
//     };

//     let validCity = function() {
//         if (city.value.length > 0) {
//             vCity.style.display = 'none';
//             return true;
//         } else {
//             vCity.style.display = 'block';
//             return false;
//         }
//     };

//     let validState = function() {
//         if (state.value.length > 0) {
//             vState.style.display = 'none';
//             return true
//         } else {
//             vState.style.display = 'block';
//             return false;
//         }
//     };

//     let validZip = function() {
//         if (ifZip.test(okZip)) {
//             vZip.style.display = 'none';
//             return true;
//         } else {
//             vZip.style.display = 'block';
//             return false;
//         }
//     };
//     let perfect = document.getElementById('perfect')
//     if (ifEmail.test(okEmail) && ifAddress.test(okAddress) && city.value.length > 0 && state.value.length > 0 && ifZip.test(okZip)) {
//         // alert('You have been registred successfully');
//         perfect.style.display = 'block';
//         validEmail();
//         validAddress();
//         validCity();
//         validState();
//         validZip();
//     } else {
//         perfect.style.display = 'none';
//         validEmail();
//         validAddress();
//         validCity();
//         validState();
//         validZip();
//     }

// }
// show_alert('alert');