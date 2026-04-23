class MiAbout extends HTMLElement {
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
                <img src="https://art.pixilart.com/730e11269018b08.png">
            </div>
            <div class="mision">
                <h1>Quienes Somos</h1>
                <p>Somos un repositorio de imagenes el cual busca llegar, a todas partes</p>
            </div>
        `;
    }
}
customElements.define('mi-about', MiAbout);