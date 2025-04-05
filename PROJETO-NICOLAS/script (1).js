const form = document.querySelector(".form")
const btn_form = document.querySelector(".btn-form")
const overlay = document.querySelector(".overlay")
btn_form.addEventListener("click", function(event){
    event.stopPropagation();
    form.classList.remove("esconder")
    overlay.classList.remove("esconder")

    setTimeout(() => {
        form.classList.add("show")
    },10)
})

document.addEventListener("click", function(event){
    if(!form.contains(event.target) && !btn_form.contains(event.target)){
        form.classList.remove("show");
        setTimeout(() => {
            form.classList.add("esconder")
            overlay.classList.add("esconder");
        },50)
    }
})