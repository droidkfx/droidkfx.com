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
            <div class="contact-content">
                <h1>${this._data.name}</h1>
                <h2>${this._data.title}</h2>
                <br/>
                <p>Locale: <span>${this._data.locale}</span></p>
                <p>Cell: <span>${this._data.cell}</span></p>
                <p>Email: <span>${this._data.email}</span></p>
                <p>
                    <span><a href="${this._data.linkedIn}">LinkedIn</a></span>
                    | <span><a href="${this._data.gitHub}">GitHub</a></span>
                </p>
            </div>
        `;

        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content);
    }
}

customElements.define("x-contact-card", ContactCard);
