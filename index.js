console.log("1");


const NAVBAR = document.getElementsByClassName("navbar")[0];
console.log(NAVBAR);



// Add Navbar scrolled on scroll

window.addEventListener("scroll",()=>{

    //if scrolled
    if(window.scrollY>0)
    {
        //add class to navbar
        NAVBAR.classList.add("navbar-scrolled");
    }   
    else if(window.scrollY==0)
    {
        NAVBAR.classList.remove("navbar-scrolled");
    }
})