class Footer extends HTMLElement {
    static publishYear = 2023;
    static year = new Date().getFullYear();

    constructor() {
        super();
    }

    // noinspection JSUnusedGlobalSymbols
    connectedCallback() {
        let year = `${Footer.year}`;
        if (Footer.year > Footer.publishYear) {
           year = `${(Footer.publishYear)} - ${(Footer.year)}`;
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
                <p>© <span id="year">${year}</span> Kyle Brown, Content available under <a href="/../LICENSE"> MIT License</a></p>
            </footer>
        `;

        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define("x-footer", Footer);
