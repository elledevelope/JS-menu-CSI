const menuData = [
    {
        title: "Item1", // li principal
        sousMenu: [ // sub UL
            "Item1", // sub LI
            "Item2",
            "Item3",
            "Item4"
        ],
        icon: [
            "fa-solid",
            "fa-bars"
        ]
    },
    {
        title: "Item2",
        sousMenu: [
            "Item1",
            "Item2",
            "Item3"
        ]
    }, {
        title: "Item3",
        sousMenu: [
            "Item1",
            "Item2",
            "Item3"
        ]
    }, {
        title: "Item4",
        sousMenu: [
            "Item1",
            "Item2",
            "Item3",
            "Item4",
            "Item5"
        ]
    }, {
        title: "Item5",
        sousMenu: [
            "Item1",
            "Item2"
        ]
    },
]

export { menuData };