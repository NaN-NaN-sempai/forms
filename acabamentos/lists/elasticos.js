var elasticosList = [
    {
        name: "Preto ou Branco",
        sendValue: "Elástico Preto ou Branco",
        price: 12,
        img: "./assets/Images/adicionais/elastico/pretoOuBranco.gif",
        favorite: false,
        callback: (el) => {
            let sel = "#elasticoPeB";
            el.querySelector("input").addEventListener("input", function () {
                toggleInput(sel, this.checked);
            })
            toggleInput(sel, el.querySelector("input").checked);
        }
    },
    {
        name: "Coloridos: <br> Lilás, Vermelho, Verde",
        sendValue: "Elástico Colorido",
        price: 12.5,
        img: "./assets/Images/adicionais/elastico/elastico.jpg",
        favorite: false,
        callback: (el) => {
            let sel = "#elasticoColorido";
            el.querySelector("input").addEventListener("input", function () {
                toggleInput(sel, this.checked);
            })
            toggleInput(sel, el.querySelector("input").checked);
        }
    },
    {
        name: "Com Glitter: <br> Rosa, Azul Claro, Dourado",
        sendValue: "Elástico com Glitter",
        price: 14,
        img: "./assets/Images/adicionais/elastico/elasticoComGlitter.gif",
        favorite: true,
        callback: (el) => {
            let sel = "#elasticoGlitter";
            el.querySelector("input").addEventListener("input", function () {
                toggleInput(sel, this.checked);
            })
            toggleInput(sel, el.querySelector("input").checked);
        }
    }
];

insertImageCheckboxValues("#elasticos", elasticosList);