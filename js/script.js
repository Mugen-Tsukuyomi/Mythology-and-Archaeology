document.querySelector("[data-script-mobIcon]").onclick = function (){
    this.classList.toggle("bg-warning")
}


const copyBtns = document.querySelectorAll(".style-copy")

copyBtns.forEach((btn) => {
    btn.addEventListener("click", function(){
        const textArea = this.nextElementSibling
        navigator.clipboard.writeText(textArea.value)
        btn.classList.add("copied")
        setTimeout(function(){
            alert("The text is copied")
            setTimeout(function(){
                btn.classList.remove("copied")
            }, 3000)
        }, 100)
    })
})