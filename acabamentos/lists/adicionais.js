var adicionaisList = [
    {
        name: "Luva Protetora <br> (protege a capa)",
        sendValue: "Luva protetora",
        price: 12,
        img: "./assets/Images/adicionais/luvaProtetora.jpg",
        favorite: false
    },
    {
        name: "Pingente",
        sendValue: "Pingente",
        price: 3,
        img: "./assets/Images/adicionais/pingente.jpg",
        favorite: false
    },
    {
        name: "Pingente Luxo",
        sendValue: "Pingente Luxo",
        price: 9,
        img: "./assets/Images/adicionais/pingenteLuxo.jpeg",
        favorite: false
    },
    {
        name: "Abas Divisórias Adesivas",
        sendValue: "Abas Divisórias",
        price: 8,
        img: "./assets/Images/adicionais/abasDivisorias.jpg",
        favorite: true
    },/* 
    {
        name: "Marcador de página",
        sendValue: "Marcador de página",
        price: "R$ 5,00",
        img: "./assets/Images/adicionais/marcador.gif",
        favorite: true
    } */
];

insertImageCheckboxValues("#adicionais", adicionaisList);