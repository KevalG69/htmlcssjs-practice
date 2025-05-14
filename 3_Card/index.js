console.log("l");

//DOM Elements
const PRODUCT_CARD_CONTAINER = document.getElementsByClassName("product-card-container")[0];
const PREV_BTN = document.getElementsByClassName("prev-btn");
const NEXT_BTN = document.getElementsByClassName("next-btn");
//Product Array
const products = [
  {
    productName: "Watch",
    productDescription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    productPrice: 70.99,
    productImage: "./img/Watch.png",
    productRating: 4,
    buttonColor: "#0f0f0f",
  },
  {
    productName: "Shoes",
    productDescription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    productPrice: 99.99,
    productImage: "./img/Shoe.png",
    productRating: 3,
    buttonColor: "rgb(73 73 73)",
  },
    {
    productName: "EarPhones",
    productDescription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    productPrice: 119.99,
    productImage: "./img/EarPhones.png",
    productRating: 2,
    buttonColor: "rgb(54 58 97)",
  },
      {
    productName: "SmartWatch",
    productDescription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    productPrice: 1000.84,
    productImage: "./img/smartwatch.jpg",
    productRating: 5,
    buttonColor: "rgb(93 93 93)",
  },
  //     {
  //   productName: "EarPhones",
  //   productDescription:
  //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  //   productPrice: 100,
  //   productImage: "./img/EarPhones.png",
  //   productRating: 5,
  //   buttonColor: "rgb(54 58 97)",
  // },
  //     {
  //   productName: "EarPhones",
  //   productDescription:
  //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  //   productPrice: 100,
  //   productImage: "./img/EarPhones.png",
  //   productRating: 5,
  //   buttonColor: "rgb(54 58 97)",
  // },
  //     {
  //   productName: "EarPhones",
  //   productDescription:
  //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  //   productPrice: 100,
  //   productImage: "./img/EarPhones.png",
  //   productRating: 5,
  //   buttonColor: "rgb(54 58 97)",
  // },
  //     {
  //   productName: "EarPhones",
  //   productDescription:
  //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  //   productPrice: 100,
  //   productImage: "./img/EarPhones.png",
  //   productRating: 5,
  //   buttonColor: "rgb(54 58 97)",
  // },
  //     {
  //   productName: "EarPhones",
  //   productDescription:
  //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  //   productPrice: 100,
  //   productImage: "./img/EarPhones.png",
  //   productRating: 5,
  //   buttonColor: "rgb(54 58 97)",
  // },
];




// Function to create a product card in the Card Container
const fetchProducts = () => {

  //make container scrollable or not 
  
  products.forEach((product) => {
    //creating main product card
    const productCard = document.createElement("div"); //main product card
    const productCardInner = document.createElement("div"); //product-card-inner div
    const productImg = document.createElement("div"); //product image
    const productData = document.createElement("div"); //product data
    const productName = document.createElement("h3"); //product name
    const productDes = document.createElement("h5"); //product Des
    const productPrice = document.createElement("h5"); //product Price
    const productRatting = document.createElement("div"); //product Rattings
    const productBtn = document.createElement("button");

    //giving class to elements
    productCard.classList.add("product-card");
    productCardInner.classList.add("product-card-inner");
    productImg.classList.add("product-img");
    productData.classList.add("product-data");
    productName.classList.add("product-name");
    productDes.classList.add("product-des");
    productPrice.classList.add("product-price");
    productRatting.classList.add("ratting");
    productBtn.classList.add("buy-btn");

    //giving data to elements
    productImg.style.backgroundImage = `url(${product.productImage})`;
    productName.innerText = product.productName;
    productDes.innerText = product.productDescription;
    productPrice.innerText = "$"+ product.productPrice.toString();
    //adding rattings
    for (let i = 0; i < 5; i++) {
      // <i class="fa-solid fa-star" style="color: #fa9349;"></i>

      //creating star
      const star = document.createElement("i");
      star.classList.add("fa-solid");
      star.classList.add("fa-star");

      //adding color to start accoding to rattings
      star.style.color = i + 1 <= product.productRating ? "#fa9349" : "#101010";

      //adding star to Ratting div
      productRatting.appendChild(star);
    }

    productBtn.innerText="Buy Now"
    productBtn.style.backgroundColor = product.buttonColor;
    
    //Arranging Elements
    //adding data to product data element
    productData.appendChild(productName);
    productData.appendChild(productDes);
    productData.appendChild(productPrice);
    productData.appendChild(productRatting);

    //adding data to product card inner
    productCardInner.appendChild(productImg);
    productCardInner.appendChild(productData);

    //product card
    productCard.appendChild(productCardInner);
    productCard.appendChild(productBtn);

    console.log(PRODUCT_CARD_CONTAINER  )
    //adding card to product conatiner
    PRODUCT_CARD_CONTAINER.appendChild(productCard);
  });
};

// NEXT_BTN.addEventListener(()=>{

  


// })

// const pagination = ()=>{

//   const totalProducts = 
// }

//On Page Load
window.onload = () => {
  fetchProducts();
};
