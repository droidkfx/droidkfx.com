console.debug("Loading contact-card.js");

export class ContactCard extends HTMLElement {
    constructor(data) {
        super();

        this._data = data
    }

    // noinspection JSUnusedGlobalSymbols
    connectedCallback() {
        const template = document.createElement("template");
        template.innerHTML = `
            <link rel="stylesheet" href="/css/reset.css">
            <style>
                .contact-content {
                    white-space: nowrap;
                    padding: 2vh 2vw;
                }
            </style>
            <div class="contact-content" id="content">
                <h1>${this._data.title}</h1>
                <h2>${this._data.subtitle}</h2>
                <br/>
                <!-- detail rows here -->
            </div>
        `;

        let div = template.content.querySelector("#content")
        for (const [key, value] of Object.entries(this._data.details)) {
            let p = document.createElement("p")
            p.innerHTML = `${key}: <span>${value}</span>`
            div.appendChild(p)
        }

        let links = document.createElement("p")
        div.appendChild(links)
        let first = true;
        for (const [key, value] of Object.entries(this._data.links)) {
            let span = document.createElement("span")
            if (first) {
                first = false;
            } else {
                span.innerHTML = " | "
            }
            span.innerHTML += `<a href="${value}">${key}</a>`
            links.appendChild(span)
        }


        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content);
    }
}

customElements.define("x-contact-card", ContactCard);
