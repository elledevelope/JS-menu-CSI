import { liCreate } from "./liCreate.js";
import { menuData } from "./menuData.js";
import { ulCreate } from "./ulCreate.js";

const displaySubMenu = (index, classArray = undefined) => {
    const ulSubMenu = ulCreate(menu, "idUlSubMenu" + index, classArray); // const ulCreate = (parent, idName, classArray = [])

    menuData[index].sousMenu.forEach((element, index2) => {
        liCreate(ulSubMenu, element);  // sub <li>
    });
};

export { displaySubMenu };