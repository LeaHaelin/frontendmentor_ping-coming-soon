const emailEl = document.getElementById("email");
const buttonEl = document.getElementById("submit");
const patternEl = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const errorEl = document.querySelector(".error_message");
const formEl = document.querySelector(".email-form");


emailEl.addEventListener("input", (e) => {
   if (emailEl.value.length >= 5){
    if(emailEl.value.match(patternEl)){
        emailEl.style.border = "1px solid #4E7DF3"
        errorEl.classList.remove("open")
    }else{
        errorEl.classList.add("open")
        errorEl.innerHTML = "Please provide a valid email address."
        errorEl.style.color = "hsl(354, 100%, 66%)"
        emailEl.style.border = "1px solid hsl(354, 100%, 66%)"
    }
}
})

formEl.addEventListener("submit", (e) => {
    if (emailEl.value.match(patternEl)){
    }
    else{    
        e.preventDefault()
    }
})