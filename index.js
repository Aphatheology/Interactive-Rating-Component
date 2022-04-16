const selectedRate = document.getElementById("selected");
const submitBtn = document.querySelector('.submit')
const ratingParent = document.querySelector('.rating')
const mainPage = document.querySelector('main')
const thanksPage = document.querySelector('section')
const thanksPageH3 = document.querySelector('h3')
const error = document.querySelector('.error')

ratingParent.addEventListener("click", (e) => {
    if(e.target.value) {
        selectedRate.innerHTML = e.target.value
    }
    
    
})

submitBtn.addEventListener('click', () => {
    
    if(thanksPageH3.innerText == "You selected  out of 5"  ) {
         error.style.visibility = "visible"

        setTimeout(disError, 1500)
    } else {
        thanksPage.style.display = "flex";
        mainPage.style.display = "none";
    }
    
})

function disError() {
    error.style.visibility = "hidden"
}
