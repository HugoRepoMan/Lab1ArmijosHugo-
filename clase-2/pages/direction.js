class MiDirection extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <h2>Direccion</h2>
        `;
    }
}
customElements.define('mi-direction', MiDirection);