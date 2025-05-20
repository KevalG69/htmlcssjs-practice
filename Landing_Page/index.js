console.log("l");

const NAVBAR = document.getElementById("navbar");
const GO_TOP = document.getElementById("go-top-a");
const BARS = document.getElementById("bars");

// buttons
const PLAN_MONTHLY = document.getElementById("Monthly-btn");
const PLAN_YEARLY = document.getElementById("Yearly-btn");

const PREV_BTN = document.getElementById("prev-btn");
const NEXT_BTN = document.getElementById("next-btn");


//
const MONTHLY_PRICING_CARDS = document.getElementById("monthly");
const YEARLY_PRICING_CARDS = document.getElementById("yearly");




console.log(MONTHLY_PRICING_CARDS);

//adding event listener to chang navbar background on scroll
window.addEventListener("scroll", () => {
  //if navbar scrolled
  if (window.scrollY > 0) {
    NAVBAR.classList.add("navbar-scrolled");
    GO_TOP.style.opacity = "1";
  } else {
    NAVBAR.classList.remove("navbar-scrolled");
    GO_TOP.style.opacity = "0";
  }
});

BARS.addEventListener("click", () => {});

//Plan Selection buttons

PLAN_MONTHLY.addEventListener("click", () => {
  console.log("click");
  //if Plan is not Selected
  if (!PLAN_MONTHLY.classList.contains("bg-tl-br")) {
    //if plan is not selected thane first remove highlight from other botton
    PLAN_YEARLY.classList.remove("bg-tl-br");
    PLAN_YEARLY.classList.add("btn-border");

    //adding highlight class to buttons
    PLAN_MONTHLY.classList.remove("btn-border");
    PLAN_MONTHLY.classList.add("bg-tl-br");
  } else {
    return;
  }

  YEARLY_PRICING_CARDS.classList.add("disappear");
  setTimeout(() => {
    YEARLY_PRICING_CARDS.classList.remove("disapper");
    MONTHLY_PRICING_CARDS.classList.add("appear");
  }, 250);

  //making monthly plan visible
  MONTHLY_PRICING_CARDS.style.display = "grid";
  YEARLY_PRICING_CARDS.style.display = "none";
});

PLAN_YEARLY.addEventListener("click", () => {
  if (!PLAN_YEARLY.classList.contains("bg-tl-br")) {
    //if plan is not selected thane first remove highlight from other botton

    PLAN_MONTHLY.classList.remove("bg-tl-br");
    PLAN_MONTHLY.classList.add("btn-border");

    //adding highlight class to buttons
    PLAN_YEARLY.classList.remove("btn-border");
    PLAN_YEARLY.classList.add("bg-tl-br");
  } else {
    return;
  }

  MONTHLY_PRICING_CARDS.classList.add("disappear");
  setTimeout(() => {
    MONTHLY_PRICING_CARDS.classList.remove("disapper");
    YEARLY_PRICING_CARDS.classList.add("appear");
  }, 250);

  //Making Yearly plan container visible
  MONTHLY_PRICING_CARDS.style.display = "none";
  YEARLY_PRICING_CARDS.style.display = "grid";
});


//Card Slider
const REVIEW_CARD_SLIDER = document.getElementsByClassName("slider")[0];
console.log("slider",REVIEW_CARD_SLIDER)
let cards = REVIEW_CARD_SLIDER.children;
let transitioned = false;
let index = 1;
let total = cards.length;


PREV_BTN.addEventListener("click",()=>{

  console.log("prev")
  //check if card is transitioning
  if(transitioned) return;

  //setting transition setup
  transitioned = true;

  index--;

  updateSlider();
})

NEXT_BTN.addEventListener("click",()=>{
  console.log("next")

 //check if card is transitioning
  if(transitioned) return;

  //setting transition setup
  transitioned = true;

  index++;

  updateSlider();
})

//update slider
const updateSlider = ()=>{
  REVIEW_CARD_SLIDER.style.transition = "transform 0.4s ease-in-out";
  REVIEW_CARD_SLIDER.style.transform = `translateX(-${index*17}%)`;
  console.log(index)
  highlightCard();
}


//Function to highlight card
const highlightCard = ()=>{

  //first remove active class from all items
  Array.from(cards).forEach(card => card.classList.remove("bg-tl-br"));

  //adding active class to current active card

  if(cards[index+1])//checking if card is exist
  {
    cards[index+1].classList.add('bg-tl-br');
  }
}


//checking if slider transitioned
REVIEW_CARD_SLIDER.addEventListener("transitionend",()=>{
   //if card is last card
  if(index===total-1)
  {
    REVIEW_CARD_SLIDER.style.transition = "none";
    index = 1;
    REVIEW_CARD_SLIDER.style.transform = `translateX(-${index*17}%)`
  }
  else if(index==0)//if card is first 
  { 
    REVIEW_CARD_SLIDER.style.transition = "none";
    index= total-2; //giving index of last card
    REVIEW_CARD_SLIDER.style.transform = `translateX(-${index*17}%)`
  }

  highlightCard();
  transitioned=false;

})



REVIEW_CARD_SLIDER.style.transform = `translateX(-${index*17}%)`;
highlightCard();