let currentSlide = 0;

function setSlide(num){
currentSlide = currentSlide+num;
displaySlide(currentSlide);
}
displaySlide(currentSlide);
function displaySlide(x){
let slide = document.getElementsByClassName('slider');

for(let k of slide){
    k.style.display = "none";
}
if(x==slide.length){
    currentSlide=0;

    x=0;
}
if(x<0){
    currentSlide=slide.length-1;

    x=slide.length-1;
}console.log(currentSlide);
slide[x].style.display ="block";
}