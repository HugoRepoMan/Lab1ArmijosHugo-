class MiMision extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const elementos = [
            {
                src: "",
                titulo: "Mision",
                contenido: " "
            }
        ]
        this.shadowRoot.innerHTML = `
            <style>
                .fondo img {
                    display: block;
                    width: 100%;
                    object-fit: cover;
                }
                .mision {
                    padding: 20px;
                }
            </style>
            <div class="fondo">
                <img src="https://art.pixilart.com/730e11269018b08.png">
            </div>
            <div class="mision">
                <h1>Mision</h1>
                <p>Nuestra mision es llevar la libertad al mundo mediante nuestra imagenes</p>
            </div>
        `;
    }
}
customElements.define('mi-mision', MiMision);