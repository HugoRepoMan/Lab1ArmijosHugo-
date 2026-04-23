class MiHome extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <h2>Bievenido a Home</h2>
        `;
    }
}
customElements.define('mi-home', MiHome);