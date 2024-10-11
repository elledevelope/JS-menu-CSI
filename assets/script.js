const navUl = document.querySelector("#nav>ul")
const menuPrincipal = [
    "item1",
    "item2",
    "item3",
    "item4",
    "item5"
];

const sousMenu1 = [
    "sub-item1",
    "sub-item2",
    "sub-item3"
];

let i = 0;
while (i < menuPrincipal.length) {
    navUl.innerHTML += `<li id = 'item${i}'>${menuPrincipal[i]}</li>`;
    i++;
};

const item0 = document.getElementById("item0");
item0.addEventListener("click", function () {
    console.log("Hello");
});