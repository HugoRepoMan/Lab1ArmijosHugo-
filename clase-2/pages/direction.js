class MiDirection extends HTMLElement {
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
                <img src="https://files.bo3.gg/uploads/image/62043/image/webp-d034acc9b11080f4217c3807f63e1914.webp">
            </div>
            <div class="mision">
                <h1>Direccion</h1>
                <p>Nuestro objetivo es estar en todo el mundo, pero actualmente esa es nuestra ubicacion</p>
            </div>
        `;
    }
}
customElements.define('mi-direction', MiDirection);