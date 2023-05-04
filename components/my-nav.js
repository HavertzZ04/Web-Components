let pathName = new URL(import.meta.url).pathname;
let name = pathName.split('/').pop().replace(".js", "");

export default class myNav extends HTMLElement {

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
        ____██████████████
        ___██▓▓▓▓▓▓▓▓▓ M ▓███
        _██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██
        _██████░░░░██░░█████
        █░░░████░░██░░░░░░░██
        █░░░████░░░░██░░░░░██
        _████░░░░░░█████████
        _██░░░░░░░░░░░░░██
        ___██░░░░░░░░░██
        _____██░░░░░░██
        ___██▓▓████▓▓▓█
        ██▓▓▓▓▓▓████▓▓█
        ▓▓▓▓▓▓███░░███░
        _██░░░░░░███████
        ___██░░░░███████
        _____██████████
        ____██▓▓▓▓▓▓▓▓▓██
        ____█████████████
        `)
    }

    connectedCallback(){
        Promise.resolve(myNav.components()).then(html => {
            this.shadowRoot.innerHTML = html;
            this.MyNav = this.shadowRoot.querySelector(".hed");
            this.MyNav.addEventListener("click", this.handleEvent.bind(this))
        })
    }
}

customElements.define(name, myNav);