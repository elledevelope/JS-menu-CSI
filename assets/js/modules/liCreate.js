const liCreate = (parent, txt, idName = undefined, classArray = undefined) => { // liCreate(document, "text", undefined, ["className"]);
    const li = document.createElement("li");
    li.innerText = txt;
    if (classArray != undefined) {
        li.classList.add(classArray);
    };

    // id facultatif :
    if (idName != undefined) {
        li.id = idName;
    };

    parent.append(li);

    return li; // <li>
};



export { liCreate };