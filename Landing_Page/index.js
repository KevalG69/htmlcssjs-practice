console.log('l');

const NAVBAR = document.getElementById('navbar');
const GO_TOP = document.getElementById('go-top-a');
const BARS = document.getElementById('bars');


console.log(NAVBAR)

//adding event listener to chang navbar background on scroll
window.addEventListener("scroll",()=>{

    //if navbar scrolled
    if(window.scrollY>0)
    {
        NAVBAR.classList.add("navbar-scrolled");
        GO_TOP.style.opacity="1";
    }
    else
    {
        NAVBAR.classList.remove("navbar-scrolled")
        GO_TOP.style.opacity="0";
    }

})


BARS.addEventListener('click',()=>{

})