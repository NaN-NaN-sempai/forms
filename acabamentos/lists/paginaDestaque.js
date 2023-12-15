var bolsoList = [
    {
        name: "Bolso canguru",
        sendValue: "Bolso",
        price: 0,
        img: "./assets/Images/adicionais/bolso/bolso.jpg",
        favorite: false
    },
    {
        name: "Folha Plástica de Fotos",
        sendValue: "Fotos",
        price: 7,
        img: "./assets/Images/adicionais/bolso/fotos.jpg",
        favorite: false
    },
    {
        name: "Os Dois (Temos que usar um arame diferente)",
        sendValue: "Fotos + Bolso",
        price: 14,
        img: "./assets/Images/adicionais/bolso/bolsoEFoto.jpg",
        favorite: false
    }
];

insertImageCheckboxValues("#bolso", bolsoList);