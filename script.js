// ---------------menu----------------------------
var nav = document.getElementById("menu");
// --------------------menu open btn ---------------
var menuBtn = document.getElementById("open");

var tour = document.getElementById("tour");
var tourBox = document.getElementById("tour-con");
//--------------------functions---------------------
function Open() {
    nav.style.right = "0";
    document.body.scrollTo = "0, 0";
    document.body.style.overflow = "hidden";
}

function Close() {
    nav.style.right = "-60vw";
    document.body.style.overflow = "auto";
}

function openTour() {

    tour.style.top = "0";
    menuBtn.style.visibility = "hidden";
    document.body.style.overflow = "hidden";
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });


    // tourBox.style.bottom = "0"
}

function CloseTour() {
    tour.style.top = "-100%";
    menuBtn.style.visibility = "visible";
    document.body.style.overflow = "auto";
    // tourBox.style.bottom = "-50%"
}