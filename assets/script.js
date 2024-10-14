//----------------------------------------------------VARIABLES :
const navUl = document.querySelector("#nav>ul"); // <ul> inside #nav 

const menuPrincipal = [ // <li> for the main menu (parent-main)
    "MainItem1",
    "MainItem2",
    "MainItem3"
];

const sousMenu = [  // <li> for the sub-menu (child-sub)
    ["1--SubItem"],
    ["2--SubItem", "3--SubItem"],
    ["4--SubItem", "5--SubItem", "6--SubItem"]
];

//----------------------------------------------------FONCTIONS :
function openMenu(liIdNumber) {
    //Creating sub-<ul> on click on main-<li> :
    document.querySelector("#item" + liIdNumber).addEventListener("click", function () {
        console.log("Hello");

        // Close any open submenus
        for (let i = 0; i < sousMenu.length; i++) {
            // if (document.querySelector(#item${i} ul) != undefined) {
            //     document.querySelector(#item${i} ul).remove();
            // };
            const openSubMenu = document.querySelector(`#item${i} ul`);
            if (openSubMenu) openSubMenu.remove(); // Only remove if the submenu exists
        }


        // Check if the submenu for this item already exists
        let existingSubMenu = document.querySelector(`#item${liIdNumber} ul`);
        if (!existingSubMenu) {  // If it doesn't exist, create a new one
        // if (document.querySelector(#item${liIdNumber} ul) != undefined)
            console.log("HelloHello");
            const ulSubMenu = document.createElement("ul");  // create sub-<ul>
            ulSubMenu.className = "ulSubMenu";
            document.querySelector(`#item${liIdNumber}`).append(ulSubMenu); // Append sub-<ul> to <li>

            // Create and append sub-<li> elements 
            sousMenu[liIdNumber].forEach(function (element) {
                const liSubMenu = document.createElement("li");
                liSubMenu.innerText = element; // Insert elements from arraySousMenu
                ulSubMenu.append(liSubMenu); // Append each sub-item to the sub-menu
            });
        }
    });
}

//----------------------------------------------------LOGIQUE de FONCTION :
// Loop through the main menu items and add them as <li> elements inside the main <ul>
let i = 0;
while (i < menuPrincipal.length) {
    let n = i;
    navUl.innerHTML += `<li id='item${i}'>${menuPrincipal[i]}</li>`;  // Create <li> with id = item0, item1, etc.
    i++;
};

openMenu(0);
openMenu(1);
openMenu(2);