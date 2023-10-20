class JobEntry extends HTMLElement {
    constructor() {
        super();

    }

    // noinspection JSUnusedGlobalSymbols
    connectedCallback() {
        const template = document.createElement("template");
        template.innerHTML = `
            <link rel="stylesheet" href="/css/reset.css">
            <style>
                .job-entry {
                    padding: 20px;
                }
            </style>
            <div class="job-entry">
                <h4>${this.getAttribute("title")}</h4>
                <p>${this.getAttribute("location")}</p>
                <p>${this.getAttribute("time")}</p>
            </div>
        `;

        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define("x-job-entry", JobEntry);
