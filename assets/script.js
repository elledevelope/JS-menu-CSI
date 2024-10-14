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
let switchMenu1 = false; //<--------------- initial state

function openMenu(liIdNumber) {
    // console.log(liIdNumber);

    //Creating sub-<ul> on click on main-<li> :
    document.getElementById(`item${liIdNumber}`).addEventListener("click", function () {
        // console.log("Hello");

        // closing sub-menus :
        for (let i = 0; i < sousMenu.length; i++) {
            if (document.querySelector(`#item${liIdNumber} ul`) != undefined) {
                document.querySelector(`#item${liIdNumber} ul`).remove();
            }
        };

        if (!switchMenu1) { // Evaluates to true if switchMenu1 is false
            console.log(switchMenu1);
            const ulSubMenu = document.createElement("ul");  // create sub-<ul>
            ulSubMenu.className = "ulSubMenu"; // Set the class name for styling
            document.querySelector(`#item${liIdNumber}`).append(ulSubMenu); // Insert sub-<ul> at the end of <li>

            // Creating sub-<li>
            sousMenu[liIdNumber].forEach(function (element) {
                const liSubMenu = document.createElement("li");
                liSubMenu.innerText = element; // Insert elements from arraySousMenu
                ulSubMenu.append(liSubMenu); // Append each sub-item to the sub-menu
            });
        } else {
            // Log the current sub-<ul> for debugging
            console.dir(document.querySelector(`#item${liIdNumber} ul`)); // Search for the existing sub-<ul>
            document.querySelector(`#item${liIdNumber} ul`).remove(); // Delete sub-<ul> -> closing sub-menu
        }

        // Toggle switchMenu1 for the next click
        switchMenu1 = !switchMenu1;
        console.log(switchMenu1);
    });
};

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