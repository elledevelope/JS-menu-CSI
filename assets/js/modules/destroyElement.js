const destroyElement = (idName) => {
    // console.dir(idName);
    document.querySelector(idName).remove(); //removes id of sub UL
};

export { destroyElement };