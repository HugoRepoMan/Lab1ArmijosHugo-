const router = () => {
    const app = document.getElementById("app");
    const path = window.location.hash;

    switch (path) {
        case "#/gallery":
            app.innerHTML = `<galeria-imagenes></galeria-imagenes>`;
            break;
        case "#/direction":
            app.innerHTML = `<mi-direction></mi-direction>`;
            break;
        case "#/about":
            app.innerHTML = `<mi-about></mi-about>`;
            break;
        case "#/mision":
            app.innerHTML = `<mi-mision></mi-mision>`;
            break;
        default:
            app.innerHTML = `<mi-home></mi-home>`;
            break;
    }

}

window.addEventListener("hashchange",router);
window.addEventListener("load",router);