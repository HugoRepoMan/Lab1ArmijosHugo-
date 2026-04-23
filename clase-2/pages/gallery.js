class GaleriaImagenes extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    // Se usa para llamar al nuevo elemento
    connectedCallback() {
        const elementos = [
            {
                src: "https://i.pinimg.com/736x/18/db/16/18db16418f859fe3da7e11b122d3a953.jpg",
                titulo: "Zero Two",
                descripcion: "Personaje del anime Darling in the Franxx."
            },
            {
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSSPnNLU0aDLsNk1jD6Po10SZrjwA74WqHyQ&s",
                titulo: "Gwen",
                descripcion: "Personaje del videojuego League of Legends"
            },
            {
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwzGyzaGBeUiSgWtXiPQMNIJwWStEF9eqeRw&s",
                titulo: "HackerMan",
                descripcion: "Estereotipo de informatico de los 90"
            },
            {
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm63sbBPhr_M0_Mb5C0cgJmRGWMkFg4YYRig&s",
                titulo: "Gogeta vs Broly",
                descripcion: "Imagen captada en la epica batalla de Gogeta vs Broly"
            },
            {
                src: "https://preview.redd.it/battlefield-1-almost-8-years-old-and-still-looks-better-v0-qv4n470t16mc1.jpeg?width=1080&crop=smart&auto=webp&s=0763fb5abe494583c9bd9605eec223e51ecc6007",
                titulo: "La Gran Guerra",
                descripcion: "Escenario de un campo de batalla en el videojuego Battlefield 1 "
            },
            {
                src: "https://imagenes.primicias.ec/files/image_480_270/uploads/2025/12/16/6941b79646e6c.jpeg",
                titulo: "Avicii",
                descripcion: "For a Better Day"
            }         
        ]
        // Se usa para mostrar el nuevo elemento
        this.shadowRoot.innerHTML = ` 
            <style>
                :host {
                    display: block;
                    padding: 20px;
                }
                .galeria {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                    gap: 25px;
                }    
            </style>
            <div class="galeria">
                ${elementos.map((elemento)=>`
                    <mi-card 
                        src="${elemento.src}"
                        titulo="${elemento.titulo}"
                        descripcion="${elemento.descripcion}"
                    ></mi-card>
                `).join('')}
            </div>
        `;
    }    
}
customElements.define('galeria-imagenes', GaleriaImagenes);
