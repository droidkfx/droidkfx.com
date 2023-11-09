console.debug("Loading contact-card.js");

export class ContactCard extends HTMLElement {
    constructor() {
        super();
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
                <h1>Kyle Brown</h1>
                <h2>Senior Software Engineer</h2>
                <br/>
                <p>Locale: <span>Texas, USA</span></p>
                <p>Cell: <span>(385)-888-6015</span></p>
                <p>Email: <span>kam157190@gmail.com</span></p>
                <p>
                    <span><a href="https://www.linkedin.com/in/kyle-brown-25148286/">LinkedIn</a></span>
                    | <span><a href="https://github.com/droidkfx">GitHub</a></span>
                </p>
            </div>
        `;

        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content);
    }
}

customElements.define("x-contact-card", ContactCard);
