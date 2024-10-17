import { menuData } from "./modules/menuData.js";
// console.dir(menuData[0].sousMenu[0]);
import { displaySubMenu } from "./modules/displaySubMenu.js";
import { liCreate } from "./modules/liCreate.js";
import { destroyElement } from "./modules/destroyElement.js";

globalThis.menu = document.querySelector("#header-nav>ul"); // <ul> inside #nav 
globalThis.menuData = menuData;

// ----------------------------------------------- logique :
menuData.forEach((element, index) => {
    const menuItem = liCreate(menu, element.title, "menu" + index); // Pass globalThis.menu as parent
    // console.dir(index); // ---> 0, 1, ...

    menuItem.addEventListener("click", () => {
        // console.dir(menuItem); // ---> li#menu0, li#menu1, ...

        if (document.contains(document.querySelector("#idUlSubMenu" + index))) {
            destroyElement("#idUlSubMenu" + index);
        } else {
            menuData.forEach((element2, index2) => {
                if (document.contains(document.querySelector("#idUlSubMenu" + index2))) {
                    destroyElement("#idUlSubMenu" + index2);
                }
                // destroyElement("#idUlSubMenu" + index2);
            });
        }

        displaySubMenu(menuItem, index);
    });

});


