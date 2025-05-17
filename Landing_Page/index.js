console.log('l');

const NAVBAR = document.getElementById('navbar');
console.log(NAVBAR)

//adding event listener to chang navbar background on scroll
window.addEventListener("scroll",()=>{

    //if navbar scrolled
    if(window.scrollY>0)
    {
        NAVBAR.classList.add("navbar-scrolled");
    }
    else
    {
        NAVBAR.classList.remove("navbar-scrolled")
    }

})