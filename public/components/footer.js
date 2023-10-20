const publishYear = 2023;
const year = new Date().getFullYear();

class Footer extends HTMLElement {
    static observedAttributes = ["color", "size"];

    constructor() {
        super();
        this.attachShadow({mode: "open"});
        const template = document.createElement("template");
        fetch("/components/footer.html").then((res) =>
            res.text().then((html) => {
                template.innerHTML = html;
                let content = template.content.cloneNode(true);
                if (year > publishYear) {
                    content.getRootNode().querySelector("#year").innerHTML = `${publishYear} - ${year}`;
                }
                this.shadowRoot.appendChild(content);
            })
        );
    }

    connectedCallback() {
        console.log("Custom element added to page.");
    }

    disconnectedCallback() {
        console.log("Custom element removed from page.");
    }

    adoptedCallback() {
        console.log("Custom element moved to new page.");
    }

    // attributeChangedCallback(name, oldValue, newValue) {
    attributeChangedCallback(name) {
        console.log(`Attribute ${name} has changed.`);
    }
}

customElements.define("x-footer", Footer);
