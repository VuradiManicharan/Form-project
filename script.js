const container = document.querySelector(".container");
const clickHereBtn = document.querySelector(".green-bg button");
const submitBtn = document.querySelector(".signup-form button");

clickHereBtn.addEventListener("click", ()=>{
    container.classList.toggle("change");
});
submitBtn.addEventListener("click", ()=>{
    container.classList.toggle("change");
});