console.log("1");

// Dom Elements
const NAVBAR = document.getElementsByClassName("navbar")[0];

// Projects Card
const UI_CARDS = document.getElementsByClassName("uiux")[0];
const WEB_CARDS = document.getElementsByClassName("web")[0];
const APP_CARDS = document.getElementsByClassName("app")[0];
const GRAPHIC_CARDS = document.getElementsByClassName("graphic")[0];

// Buttons
const ALL_BTN = document.getElementById("all-btn");
const UI_BTN = document.getElementById("ui-btn");
const WEB_BTN = document.getElementById("web-btn");
const APP_BTN = document.getElementById("app-btn");
const GRAPHIC_BTN = document.getElementById("graphic-btn");

const THEME_BTN = document.getElementById("theme-toggle");
const THEME_ICON = document.querySelector("#theme-toggle i")

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

//Remove Active Class From buttons
const removeActiveFromBtn = () => {
  ALL_BTN.classList.remove("active");
  UI_BTN.classList.remove("active");
  WEB_BTN.classList.remove("active");
  APP_BTN.classList.remove("active");
  GRAPHIC_BTN.classList.remove("active");
};

let dark = true;


//Theme Toggle
THEME_BTN.addEventListener("click",()=>{
  //toggle("classname") is used to add or remove class
  //if class exist it removes it and if not its add it
  document.body.classList.toggle("dark-theme")

  //if dark 
  if(!dark)//if dark mode is false
  { 
    //Enable Dark mode
    dark=true;
    //Remove Moon icon
    THEME_ICON.classList.remove("fa-moon");
    //add Sun icon
    THEME_ICON.classList.add("fa-sun");

  }
  else//if dark mode is true
  {
    //Disable dark mode
    dark=false
    //remove sun icon
    THEME_ICON.classList.remove("fa-sun");
    //add moon icon
    THEME_ICON.classList.add("fa-moon");
  }
})



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


// Buttons event listener
ALL_BTN.addEventListener("click", () => {
  // removing active class from all buttons
  removeActiveFromBtn();

  //adding active class to clicked button
  ALL_BTN.classList.add("active");

  //making all cards visible by giving display grid
  UI_CARDS.style.display = "grid";
  WEB_CARDS.style.display = "grid";
  APP_CARDS.style.display = "grid";
  GRAPHIC_CARDS.style.display = "grid";

  UI_CARDS.classList.add("appear");
  WEB_CARDS.classList.add("appear");
  APP_CARDS.classList.add("appear");
  GRAPHIC_CARDS.classList.add("appear");

  setTimeout(() => {
    UI_CARDS.classList.remove("appear");
    WEB_CARDS.classList.remove("appear");
    APP_CARDS.classList.remove("appear");
    GRAPHIC_CARDS.classList.remove("appear");
  }, 1000);
});

UI_BTN.addEventListener("click", () => {
  removeActiveFromBtn();
  UI_BTN.classList.add("active");
  UI_CARDS.style.display = "grid";
  WEB_CARDS.style.display = "none";
  APP_CARDS.style.display = "none";
  GRAPHIC_CARDS.style.display = "none";

  UI_CARDS.classList.add("appear");

  setTimeout(() => {
    UI_CARDS.classList.remove("appear");
  }, 1000);
});

WEB_BTN.addEventListener("click", () => {
  removeActiveFromBtn();
  WEB_BTN.classList.add("active");
  UI_CARDS.style.display = "none";
  WEB_CARDS.style.display = "grid";
  APP_CARDS.style.display = "none";
  GRAPHIC_CARDS.style.display = "none";

  WEB_CARDS.classList.add("appear");

  setTimeout(() => {
    WEB_CARDS.classList.remove("appear");
  }, 1000);
});

APP_BTN.addEventListener("click", () => {
  removeActiveFromBtn();
  APP_BTN.classList.add("active");
  UI_CARDS.style.display = "none";
  WEB_CARDS.style.display = "none";
  APP_CARDS.style.display = "grid";
  GRAPHIC_CARDS.style.display = "none";

  APP_CARDS.classList.add("appear");

  setTimeout(() => {
    APP_CARDS.classList.remove("appear");
  }, 1000);
});

GRAPHIC_BTN.addEventListener("click", () => {
  removeActiveFromBtn();
  GRAPHIC_BTN.classList.add("active");
  UI_CARDS.style.display = "none";
  WEB_CARDS.style.display = "none";
  APP_CARDS.style.display = "none";
  GRAPHIC_CARDS.style.display = "grid";

  GRAPHIC_CARDS.classList.add("appear");

  setTimeout(() => {
    GRAPHIC_CARDS.classList.remove("appear");
  }, 1000);
});
