//1
const body = document.body;
const h1Header = document.createElement("h1"); 
h1Header.innerText = "Mouse Out";
body.appendChild(h1Header);

h1Header.addEventListener("mouseover", () => {
    h1Header.innerText = "Mouse In"
})

h1Header.addEventListener("mouseleave", () =>{
    h1Header.innerText = "Mouse Out"
})

h1Header.addEventListener("click", () => {
    h1Header.style.color = "red";
    h1Header.style.backgroundColor = "blue";
    h1Header.style.textDecoration = "underline";
})
//2
