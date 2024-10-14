elmira
elmira_ellie
Online

Brian T. — 09/23/2024 2:10 PM
Tricks HTML / Css
Image
Choufies — 09/25/2024 3:28 PM
Coucou tout le monde, les bouts de code qui m'ont fait mal au crâne pour que le burger se change en croix quand on clique dessus
         <nav id="menu-top">
            <div id="logo"><span id="logo-bold">BR</span> Architects</div>
            <input type="checkbox" id="check-burger">
            <ul id="navigation">
                <li class="bouton-menu">Projects</li>
                <li class="bouton-menu">About</li>
                <li class="bouton-menu">Contact</li>
            </ul>
            <label for="check-burger" id="burger">
                <i class="fa-solid fa-bars"></i>
                <i class="fa-regular fa-circle-xmark"></i>
            </label>
        </nav> 
 
#burger {
    color: black;
    font-size: 20px;
}

#check-burger {
    display: none;
}

#check-burger:checked~ul {
    transform: translateX(-3vw);
}

#check-burger:checked~label i[class="fa-solid fa-bars"] {
    display: none;
}


#check-burger:not(:checked)~label i[class="fa-regular fa-circle-xmark"] {
    display: none;
}
 
Brian T. — 09/26/2024 10:19 AM
Commandes Git pour lier un REPOSITORY (Github) à notre VS code :
git init
git add 
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:WebisBrian/FrontEndMentor_Architects_Mockup.git 
git push -u origin main 
Bien sur, il faudra adapter le nom du projet, me concernant ==> WebisBrian/FrontEndMentor_Architects_Mockup.git 
Julien — 09/26/2024 1:58 PM
body {
    font-size: calc(15px + 0.390625vw);
}
Vincent — 10/04/2024 2:18 PM
CSS 
background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                url('image.jpg');
 background: hsl(237, 17%, 21%) url(../images/bg-pattern-circles.svg);
Mehdi — 10/07/2024 11:23 AM
Pour barrer du texte 
 css
text-decoration-line: line-through;
 
TarnacForever — 10/09/2024 3:30 PM
https://raw.githack.com/
CDN for your source code | raw.githack.com
raw.githack.com - CDN for your source code
https://github.com/SalvadorGriaule/PacMan-/blob/main/index.html
GitHub
PacMan-/index.html at main · SalvadorGriaule/PacMan-
PacMan. Contribute to SalvadorGriaule/PacMan- development by creating an account on GitHub.
PacMan-/index.html at main · SalvadorGriaule/PacMan-
https://rawcdn.githack.com/SalvadorGriaule/PacMan-/b911e5105a3c7b63f0c6739dddbe11ea74887f0d/index.html
Erwann CREVEL — Today at 10:02 AM
while (i < 500) {
    const newP = document.createElement('p')
    newP.textContent = "Je ferai des boucles parfaites !"
    if (i % 2 === 0) {
        newP.style.color = "red"
    } else {
        newP.style.color = "white"
    }
    punition.appendChild(newP);
    i++;
}
Methode modulo
Julien — Today at 1:42 PM
const sousMenu = [
    [
        "Sous Item 1",
        "Sous Item 2",
        "Sous Item 3"
    ],
    [
        "Sous Item 1",
        "Sous Item 2",
        "Sous Item 3",
        "Sous Item 4"
    ],
    [
        "Sous Item 1",
        "Sous Item 2",
        "Sous Item 3"
    ],
    [
        "Sous Item 1",
        "Sous Item 2",
        "Sous Item 3"
    ],
    [
        "Sous Item 1"
    ]
]
Julien — Today at 3:02 PM
// VARIABLES
const navHeaderUl = document.querySelector("#header-nav>ul");
const menuPrincipale = [
    "Item1",
    "Item2",
    "Item3",
Expand
script.js
3 KB
﻿
// VARIABLES
const navHeaderUl = document.querySelector("#header-nav>ul");
const menuPrincipale = [
    "Item1",
    "Item2",
    "Item3",
    "Item4",
    "Item5"
];
const sousMenu = [
    [
        "Sous Item 1",
        "Sous Item 2",
        "Sous Item 3"
    ],
    [
        "Sous Item 1",
        "Sous Item 2",
        "Sous Item 3",
        "Sous Item 4"
    ],
    [
        "Sous Item 1",
        "Sous Item 2",
        "Sous Item 3"
    ],
    [
        "Sous Item 1",
        "Sous Item 2",
        "Sous Item 3"
    ],
    [
        "Sous Item 1"
    ]
]
// FONCTIONS
function ouvertureMenu(itemNumber) {
    // ajoutez un evenement click sur un elementHTML avec un id "item0"
    document.querySelector("#item" + itemNumber).addEventListener("click", function () {
        // je supprime avec une boucle tous les sous menu ouverts (not undefined)
        if (document.body.contains(document.querySelector(`#item${itemNumber} ul`))) {
            document.querySelector(`#item${itemNumber} ul`).remove();
        } else {
            for (let i = 0; i < sousMenu.length; i++) {
                if (document.querySelector(`#item${i} ul`) != undefined) {
                    document.querySelector(`#item${i} ul`).remove();
                }
            }
            //creation d'un elementHTML ul pour creer le sous menu
            const ulSubMenu = document.createElement("ul");
            //insertion de cet element dans un parent AVANT son contenu
            //document.querySelector("#item0").prepend(ulSubMenu);
            //insertion de cet element dans un parent APRES son contenu
            document.querySelector("#item" + itemNumber).append(ulSubMenu);
            sousMenu[itemNumber].forEach(function (element, index) {
                const liSubMenu = document.createElement("li");
                liSubMenu.innerText = element;
                ulSubMenu.append(liSubMenu);
            });
        }
    })
}




// LOGIQUE
let i = 0;

while (i < menuPrincipale.length) {
    let n = i;
    /* navHeaderUl.innerHTML += "<li id='item"+i+"'>" + menuPrincipale[i] + "</li>"; */
    navHeaderUl.innerHTML += `<li id="item${i}">${menuPrincipale[i]}</li>`;
    i++;
}

ouvertureMenu(0);
ouvertureMenu(1);
ouvertureMenu(2);
ouvertureMenu(3);
ouvertureMenu(4);
script.js
3 KB