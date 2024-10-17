const liCreate = (parent, txt) => {
    const li = document.createElement("li");
    li.innerText = txt;
    parent.append(li);
};

export { liCreate };