const liCreate = (parent, txt, idName = undefined, classArray = []) => { // liCreate(document, "text", undefined, ["className"]);
    const li = document.createElement("li");
    li.innerText = txt;
    li.classList.add(classArray);

    // id facultatif :
    if (idName != undefined) {
        li.id = idName;
    };

    parent.append(li);
};



export { liCreate };