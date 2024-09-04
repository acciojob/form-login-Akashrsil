const name1 = document.getElementById("name");
console.log(name1.value);

const surname1 = document.getElementById("surname");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    alert(`${name1.value} ${surname1.value} `);
})