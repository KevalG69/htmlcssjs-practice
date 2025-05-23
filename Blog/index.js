// Dom Elements
const NAVBAR = document.getElementsByClassName("navbar")[0];


const BARS = document.getElementById("bars");
const NAVBAR_MOBILE = document.querySelector('.navbar-mobile ul');

// Add Navbar scrolled on scroll
window.addEventListener("scroll", () => {
  //if scrolled
  if (window.scrollY > 0) {
    //add class to navbar
    NAVBAR.classList.add("navbar-scrolled");
  } else if (window.scrollY == 0) {
    NAVBAR.classList.remove("navbar-scrolled");
  }
});


let navbarMobile = false;

BARS.addEventListener("click",()=>{
    
    if(!navbarMobile)
    {
        NAVBAR_MOBILE.style.display = "flex";       
        navbarMobile=true;
    }
    else if(navbarMobile)
    {
        NAVBAR_MOBILE.style.display = "none";   
        navbarMobile=false;    
    }
})

