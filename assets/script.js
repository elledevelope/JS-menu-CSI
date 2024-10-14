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
        // ajoutez un événement click sur un elementHTML avec un id "item0"
        document.querySelector("#item" + liIdNumber).addEventListener("click", function () {
            // je supprime avec une boucle tous les sous menu ouverts (not undefined)
            if (document.body.contains(document.querySelector(`#item${liIdNumber} ul`))) {
                document.querySelector(`#item${liIdNumber} ul`).remove();
            } else {
                for (let i = 0; i < sousMenu.length; i++) {
                    if (document.querySelector(`#item${i} ul`) != undefined) {
                        document.querySelector(`#item${i} ul`).remove();
                    }
                }
                //creation d'un elementHTML ul pour créer le sous menu
                const ulSubMenu = document.createElement("ul");
                //insertion de cet element dans un parent AVANT son contenu
                //document.querySelector("#item0").prepend(ulSubMenu);
                //insertion de cet element dans un parent APRES son contenu
                document.querySelector("#item" + liIdNumber).append(ulSubMenu);
                sousMenu[liIdNumber].forEach(function (element, index) {
                    const liSubMenu = document.createElement("li");
                    ulSubMenu.className = "ulSubMenu";
                    liSubMenu.innerText = element;
                    ulSubMenu.append(liSubMenu);
                });
            }
        })
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