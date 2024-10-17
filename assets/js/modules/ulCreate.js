const ulCreate = (parent, idName, classArray = []) => {
    const ul = document.createElement("ul");
    ul.id = idName;
    ul.classList.add(classArray);
    parent.append(ul);
};

export { ulCreate };