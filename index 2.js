// Switching images

function displayNextImage() {
  x = (x === images.length - 1) ? 0 : x + 1;
  document.getElementById("img").src = images[x];
}

function startTimer() {
  setInterval(displayNextImage, 600);
}

var images = [], x = -1;
images[0] = "images/RBT-C.webp";
images[1] = "images/OC-C.webp";
images[2] = "images/TBE-C.webp";
images[3] = "images/DFWO911-C.webp";
images[4] = "images/ISTTMGM-C.webp";
images[5] = "images/SH-C.webp";
images[6] = "images/TEWBP-C.webp";
images[7] = "images/CF-C.webp";
images[8] = "images/HIRH-C.webp";
images[9] = "images/PI-C.webp";
images[10] = "images/IMTWNZH-C.webp";
images[11] = "images/DFI-C.webp";


// Mobile button

$('.showSingle').click(function () {
  if ($(this).hasClass("button-active")) {
    $('.targetDiv').hide();
    $('.showSingle').removeClass('button-active');
    $('#div1').show();
  } else {
    $('.targetDiv').hide();
    $('.showSingle').removeClass('button-active');
    $(this).addClass("button-active")
    $('#div' + $(this).attr('target')).show();
  }
});


// Mobile viewport

  // First we get the viewport height
let vh = window.innerHeight;
  // Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

  // We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});