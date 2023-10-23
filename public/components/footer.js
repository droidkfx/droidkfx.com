class Footer extends HTMLElement {
    static publishYear = 2023;

    constructor() {
        super();
    }

    // noinspection JSUnusedGlobalSymbols
    connectedCallback() {
        let fullYear = new Date().getFullYear();
        let yearString = `${fullYear}`;
        if (fullYear > Footer.publishYear) {
            yearString = `${(Footer.publishYear)} - ${fullYear}`;
        }

        const template = document.createElement("template");
        template.innerHTML = `
            <link href="/css/reset.css" rel="stylesheet">
            <style>
                footer {
                    justify-content: center;
                    display: flex;
                }   
            </style>
            <footer>
                <p>© <span id="year">${yearString}</span> Kyle Brown, Content available under <a href="/../LICENSE"> MIT License</a></p>
            </footer>
        `;

        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content);
    }
}

customElements.define("x-footer", Footer);
