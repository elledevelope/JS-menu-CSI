// Select the <ul> element inside the #nav element
const navUl = document.querySelector("#nav>ul");

// List of items for the main menu (parent)
const menuPrincipal = [
    "item1",
    "item2",
    "item3",
    "item4",
    "item5"
];

// List of items for the sub-menu (child)
const sousMenu1 = [
    "sub-item1",
    "sub-item2",
    "sub-item3"
];

// Loop through the main menu items and add them as <li> elements inside the main <ul>
let i = 0; 
while (i < menuPrincipal.length) {
    navUl.innerHTML += `<li id='item${i}'>${menuPrincipal[i]}</li>`; // Dynamically add <li> with item and ID
    i++; 
}

// Add an event listener to the first menu item (item0)
document.getElementById("item0").addEventListener("click", function () {
    console.log("Hello"); 
    const ulSubMenu = document.createElement("ul");  // Create a new <ul> element for the sub-menu
    document.querySelector("#item0").prepend(ulSubMenu); // Insert the new <ul> as the first child (before other content) of item0
});
