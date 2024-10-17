const ulCreate = (parent, idName, classArray = undefined) => {
    const ul = document.createElement("ul");
    ul.id = idName;
    if (classArray != undefined) {
        ul.classList.add(classArray);
    };

    parent.append(ul);

    return ul; // <ul>
};

export { ulCreate };