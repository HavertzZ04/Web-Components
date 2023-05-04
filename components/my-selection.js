let pathName = new URL(import.meta.url).pathname;
let name = pathName.split('/').pop().replace(".js", "");

export default class mySelection extends HTMLElement {

    static async components() {
        return await (await fetch(pathName.replace(".js", ".html"))).text();
    }
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    handleEvent(e){
        (e.type === "click") ? this.enviar(e)
        :undefined
    }

    enviar(e){
        console.log(e);
        e.preventDefault()
        alert(`
        ░░░░░░░▄██▄░░░░░░▄▄░░
        ░░░░░░░▐███▀░░░░░▄███▌
        ░░▄▀░░▄█▀▀░░░░░░░░▀██░
        ░█░░░██░░░░░░░░░░░░░░░
        █▌░░▐██░░▄██▌░░▄▄▄░░░▄
        ██░░▐██▄░▀█▀░░░▀██░░▐▌
        ██▄░▐███▄▄░░▄▄▄░▀▀░▄██
        ▐███▄██████▄░▀░▄█████▌
        ▐████████████▀▀██████░
        ░▐████▀██████░░█████░░
        ░░░▀▀▀░░█████▌░████▀░░
        ░░░░░░░░░▀▀███░▀▀▀░░░░
        `)
    }

    connectedCallback(){
        Promise.resolve(mySelection.components()).then(html => {
            this.shadowRoot.innerHTML = html;
            this.MySelection = this.shadowRoot.querySelector(".hed");
            this.MySelection.addEventListener("click", this.handleEvent.bind(this))
        })
    }
}

customElements.define(name, mySelection);