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
const myDiv = document.createElement("div");
myDiv.style.height = "200px";
myDiv.style.width = "250px";
myDiv.style.backgroundColor = "grey";
body.appendChild(myDiv);

const btn = document.createElement("button");
btn.innerHTML = "Try me";
body.appendChild(btn);
btn.addEventListener("click", () =>{
    myDiv.style.backgroundColor = "violet";
})

const select = document.createElement("select");
const colors = ["grey", "red", "green", "blue", "violet"];

colors.forEach(color => {
    const option = document.createElement("option");
    option.value = color;
    option.text = color.charAt(0).toUpperCase() + color.slice(1);
    select.appendChild(option);
});

document.body.appendChild(select);

btn.addEventListener("click", () => {
    const selectedColor = select.value;
    myDiv.style.backgroundColor = selectedColor;
});
