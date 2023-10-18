const template = document.createElement("template");

class Footer extends HTMLElement {
    static observedAttributes = ["color", "size"];
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        const style = new CSSStyleSheet();
        const template = document.createElement("template");

        // fetch("./js/footer.css").then((res) =>
        //     res.text().then((css) => {
        //         style.replaceSync(css);
        //         this.shadowRoot.adoptedStyleSheets = [style];
        //     })
        // );

        fetch("./js/footer.html").then((res) =>
            res.text().then((html) => {
                template.innerHTML = html;
                this.shadowRoot.appendChild(template.content.cloneNode(true));
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

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`Attribute ${name} has changed.`);
    }
}

customElements.define("x-footer", Footer);
