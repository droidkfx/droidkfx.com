class JobEntry extends HTMLElement {
    constructor(position) {
        super();
        this._position = position;
    }

    // noinspection JSUnusedGlobalSymbols
    connectedCallback() {
        const template = document.createElement("template");
        template.innerHTML = `
            <link rel="stylesheet" href="/css/reset.css">
            <style>
                .job-entry {
                    padding: 0 0 1vh 2vw;
                }
                .nav-selected {
                    background-color: #e0e0e0
                }
            </style>
            <div class="job-entry">
                <h4>${this._position.title}</h4>
                <p>${this._position.location}</p>
                <p>${this._position.time}</p>
            </div>
        `;

        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content);
    }
}

customElements.define("x-job-entry", JobEntry);
