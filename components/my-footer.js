let pathName = new URL(import.meta.url).pathname;
let name = pathName.split('/').pop().replace(".js", "");

export default class myFooter extends HTMLElement {

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
        ░░░░░░░░░░░░░░░░░░░░░░░░░
        ░░░░░░▄█░░░░░░░░░░░░██░░
        ░░░░░▄██░░░░░░░░░░░███░░░
        ░░░░░███░░░░░░░░░░████░░░
        ░░░░████░░▄▄▄▄░░░█████░░░
        ░░░███████████████████░░░
        ░░░███████████████████░░░
        ░▄█████████████████████░░
        ░██████████████████████░░
        ░██████████████████████░░
        ░█░▀████████▀░▄████████░░
        ▄██▄▄█████▄▄▄██████████▄░
        ██▀███████▀▀█▀▀░░███████░
        ░█░░░▀▀▀░░░░▀▀░░░███████░
        ░█░░░████▄░░░░░░░████████
        ░█░░░░░░░░░░░░░░░████████
        ░██░░░░░░░░░░░░░░████████
        ░▀█░░░░░░░░░░░░▄█████████
        `)
    }
    connectedCallback(){
        Promise.resolve(myFooter.components()).then(html => {
            this.shadowRoot.innerHTML = html;
            this.MyFooter = this.shadowRoot.querySelector(".hed");
            this.MyFooter.addEventListener("click", this.handleEvent.bind(this))
        })
    }
}

customElements.define(name, myFooter);