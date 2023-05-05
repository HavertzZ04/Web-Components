let pathName = new URL(import.meta.url).pathname;
let name = pathName.split('/').pop().replace(".js", "");

export default class myHeader extends HTMLElement {

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
        _____███____████
        ___████__████_███
        __███____████__███
        __███_███___██__██
        ___███_████████_████
        ███_██_███████__████
        _███_____████__████
        __██████_____█████
        ___███████__█████
        ______████ _██
        ______________██
        _______________█
        _____███_█_█__█
        ____█████__█_█
        ___██████___█_____█████
        ____████____█___███_█████
        _____██____█__██____██████
        ______█___█_██_______████
        _________███__________██
        _________██____________█
        _________█
        `)
    }
    connectedCallback(){
        Promise.resolve(myHeader.components()).then(html => {
            this.shadowRoot.innerHTML = html;
            this.MyHead = this.shadowRoot.querySelector(".hed");
            this.MyHead.addEventListener("click", this.handleEvent.bind(this))
        })
    }
}

customElements.define(name, myHeader);