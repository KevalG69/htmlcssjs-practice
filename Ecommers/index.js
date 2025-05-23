console.log("l");


const QUNTITY = document.getElementsByClassName("quntity");
console.log(QUNTITY)


//looping throw product
Array.from(QUNTITY).forEach(item => {
   
    const dec_btn = item.querySelector(".dec");
    const inc_btn = item.querySelector(".inc");
    const input = item.querySelector("input");

    dec_btn.addEventListener("click",()=>{
        let count = parseInt(input.value);

        if(count==0) return;

        input.value = count-1;

    })

    inc_btn.addEventListener("click",()=>{
        let count = parseInt(input.value);
        input.value = count+1;
    })

});