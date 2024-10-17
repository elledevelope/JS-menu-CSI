import { liCreate } from "./liCreate.js";
import { menuData } from "./menuData.js";
import { ulCreate } from "./ulCreate.js";

const displaySubMenu = (index, classArray = undefined) => {
    const subMenuUL = ulCreate(menu, "idSubMenuUL" + index, classArray); // const ulCreate = (parent, idName, classArray = [])
    
    // menuData.forEach(element => {
        
    // });
    liCreate(subMenuUL, menuData[index].sousMenu[0]);
};

export { displaySubMenu };