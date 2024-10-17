import { liCreate } from "./liCreate.js";
import { menuData } from "./menuData.js";
import { ulCreate } from "./ulCreate.js";

const displaySubMenu = (parent, index, classArray = undefined) => {
    const ulSubMenu = ulCreate(parent, "idUlSubMenu" + index, classArray); // sub <ul> => const ulCreate = (parent, idName, classArray = [])

    menuData[index].sousMenu.forEach((element, index2) => {
        liCreate(ulSubMenu, element);  // sub <li>
    });
};

export { displaySubMenu };