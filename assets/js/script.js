import { menuData } from "./modules/menuData.js";
console.dir(menuData[0].sousMenu[0]);

import {displaySubMenu} from "./modules/displaySubMenu.js";
console.dir(displaySubMenu);

globalThis.menu = document.querySelector("#header-nav>ul"); // <ul> inside #nav 
globalThis.menuData = menuData;

displaySubMenu(0);
