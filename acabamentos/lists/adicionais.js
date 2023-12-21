var adicionaisList = [
    {
        name: "Luva Protetora <br> (protege a capa)",
        sendValue: "Luva protetora",
        price: 12,
        img: "./assets/Images/adicionais/luvaProtetora.jpg",
        favorite: false
    },
    {
        name: "Pingente:<br>Verde, Roxo, Amarelo, Rosa, Cinza, Azul",
        sendValue: "Pingente",
        price: 3,
        img: "./assets/Images/adicionais/pingente.png",
        favorite: false,
        callback: (el) => {
            el.querySelector("input").addEventListener("input", function () {
                toggleInput("#pingente", this.checked);
            })
            toggleInput("#pingente", el.querySelector("input").checked);
        }
    },
    {
        name: "Pingente Luxo:<br>Pink, Bege, Preto, Branco, Amarelo, ...",
        sendValue: "Pingente Luxo",
        price: 9,
        img: "./assets/Images/adicionais/pingenteLuxo.png",
        favorite: false,
        callback: (el) => {
            el.querySelector("input").addEventListener("input", function () {
                toggleInput("#pingenteLuxo", this.checked);
            })
            toggleInput("#pingenteLuxo", el.querySelector("input").checked);
        }
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