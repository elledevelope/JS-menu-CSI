// Select the <ul> element inside the #nav element
const navUl = document.querySelector("#nav>ul");

// List of items for the main menu (parent)
const menuPrincipal = [
    "MainItem1",
    "MainItem2",
    "MainItem3"
];

// List of items for the sub-menu (child)
const sousMenu1 = [
    "1--SubItem",
    "2--SubItem",
    "3--SubItem"
];

// Loop through the main menu items and add them as <li> elements inside the main <ul>
let i = 0;
while (i < menuPrincipal.length) {
    navUl.innerHTML += `<li id='item${i}'>${menuPrincipal[i]}</li>`;  // creating <li> with id = item0, item1, etc.
    i++;
}

//Creating first sub-UL on click on fist LI-parent
document.getElementById("item0").addEventListener("click", function () {
    console.log("Hello");
    const ulSubMenu = document.createElement("ul");  // Create a new <ul> element for the sub-menu
    ulSubMenu.className = "ulSubMenu";
    document.querySelector("#item0").append(ulSubMenu); // append() to insert the new <ul> at the end of the item0 element's content

    // Creating sub-LI 
    sousMenu1.forEach(function (element, index) {
        const liSubMenu = document.createElement("li");
        ulSubMenu.append(liSubMenu);
        liSubMenu.innerHTML = sousMenu1[index];
    });
});


