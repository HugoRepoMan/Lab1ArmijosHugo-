class MiHome extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
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
                <img src="https://wallpapers.com/images/hd/aot-wings-of-freedom-2560-x-1600-wallpaper-gp5k4vxtqcca8mjq.jpg">
            </div>
            <div class="mision">
                <h1>Bienvenido</h1>
                <p>Las alas de la libertad, nos llevaran lejos </p>
            </div>
        `;
    }
}
customElements.define('mi-home', MiHome);