// Select the <ul> element inside the #nav element
const navUl = document.querySelector("#nav>ul");

// <li> for the main menu (parent-main)
const menuPrincipal = [
    "MainItem1",
    "MainItem2",
    "MainItem3"
];

//  <li> for the sub-menu (child-sub)
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

//Creating sub-<ul> on click on fist main-<li> ("MainItem1")
let switchMenu1 = false; //<--------------- initial state
document.getElementById("item0").addEventListener("click", function () {
    console.log("Hello");
    if (!switchMenu1) { // <--------------- (!switchMenu1 = !false  = true) evaluates to true, so the submenu is created:
        console.log(switchMenu1);
        const ulSubMenu = document.createElement("ul");  // create sub-<ul> 
        ulSubMenu.className = "ulSubMenu";
        document.querySelector("#item0").append(ulSubMenu); // insert sub-<ul> at the end of <li class = "item0"> content

        // Creating sub-<li> 
        sousMenu1.forEach(function (element, index) {
            // console.log(element, index);
            const liSubMenu = document.createElement("li");
            liSubMenu.innerText = element; // insert sousMenu1 = ["1--SubItem", "2--SubItem", "3--SubItem"];
            ulSubMenu.append(liSubMenu);
        });

    }
    else {
        console.dir(document.querySelector("#item0 ul")); // search sub-<ul> in main-<li> id = item0
        document.querySelector("#item0 ul").remove(); // delete sub-<ul> ---------> closing sub-menu
    };
    switchMenu1 = !switchMenu1;
    console.log(switchMenu1);
});

