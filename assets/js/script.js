import { menuData } from "./modules/menuData.js";
console.dir(menuData);
const mainMenu = document.getElementById('main-menu');

// Function to create an <li> with a title and sub-menu toggle
function createLi(item) {
    const li = document.createElement('li'); // Create <li>
    li.classList.add('menu-item');           // Add class to the item
    li.textContent = item.title;             // Set text to the title

    // Create the sub-menu if it exists
    if (item.sousMenu && item.sousMenu.length > 0) {
        createSubMenu(li, item.sousMenu); // Call sub-menu creation function
    }

    // Add event listener to toggle the sub-menu
    li.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent event bubbling
        closeAllSubMenus();  // Close any open sub-menus
        afficherSubMenu(li); // Show the clicked item's sub-menu
    });

    return li;
}

// Function to create a sub-menu <ul> and append it to the parent <li>
function createSubMenu(parentLi, subMenuItems) {
    const subMenu = document.createElement('ul'); // Create <ul> for sub-menu
    subMenu.classList.add('sub-menu');            // Add class for styling

    // Create <li> for each sub-menu item
    subMenuItems.forEach((subItem) => {
        const subLi = document.createElement('li');
        subLi.textContent = subItem;
        subMenu.appendChild(subLi); // Append each <li> to the sub-menu
    });

    parentLi.appendChild(subMenu); // Append the sub-menu to the parent <li>
}

// Function to display a sub-menu
function afficherSubMenu(menuItem) {
    const subMenu = menuItem.querySelector('.sub-menu'); // Get the sub-menu
    if (subMenu) {
        subMenu.style.display = 'block'; // Show the sub-menu
    }
}

// Function to close all sub-menus
function closeAllSubMenus() {
    const allSubMenus = document.querySelectorAll('.sub-menu');
    allSubMenus.forEach((menu) => {
        menu.style.display = 'none'; // Hide all sub-menus
    });
}

// Populate the main menu with items from menuData
menuData.forEach((item) => {
    const menuItem = createLi(item); // Create each menu item <li>
    mainMenu.appendChild(menuItem);  // Append it to the main menu <ul>
});

// Close sub-menus when clicking outside the menu
document.body.addEventListener('click', closeAllSubMenus);
