var elasticosList = [
    {
        name: "Preto ou Branco",
        sendValue: "Preto ou Branco",
        price: 12,
        img: "./assets/Images/adicionais/elastico/pretoOuBranco.gif",
        favorite: false
    },
    {
        name: "Coloridos: <br> Lilás, Vermelho, Verde",
        sendValue: "Colorido",
        price: 12.5,
        img: "./assets/Images/adicionais/elastico/elastico.jpg",
        favorite: false
    },
    {
        name: "Com Glitter: <br> Rosa, Azul Claro, Dourado",
        sendValue: "Com Glitter",
        price: 14,
        img: "./assets/Images/adicionais/elastico/elasticoComGlitter.gif",
        favorite: true
    }
];

insertImageCheckboxValues("#elastico", elasticosList);