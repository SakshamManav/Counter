let count = document.querySelector(".count");
let increase = document.querySelector(".increase");
let decrease = document.querySelector(".decrease");

count.innerText = 0;
// count.addEventListener("keydown" , (event)=>{
//     if(event.key === "ArrowUp"){
//         count.innerText++;
//     }
    
//     else if(event.key==="ArrowDown"){
//         count.innerText-- ;
//     }
//     else{
//         count.innerText = 0;
//     }
    
// })
increase.onclick=()=>{
    count.innerText++;
}

decrease.onclick=()=>{
    count.innerText--;
}


