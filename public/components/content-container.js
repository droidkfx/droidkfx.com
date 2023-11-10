import {content} from "/data/lipsum-entry.html.js";

console.debug("Loading content-container.js");

export class ContentContainer extends HTMLElement {
    constructor() {
        super();
    }

    // noinspection JSUnusedGlobalSymbols
    connectedCallback() {
        const template = document.createElement("template");
        template.innerHTML = `
            <link rel="stylesheet" href="/css/reset.css">
            <style>
                .content {
                    display: flex;
                    flex-direction: column;
                    max-height: 85vh;
                    height: 85vh;
                    padding: 2vh 2vw;
                }

                .content > p {
                    white-space: normal;
                }
                
                .content > p + p {
                    margin-top: 20px;
                }
            </style>
            <div class="content">
                ${content}
            </div>
        `;

        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content);
    }
}

customElements.define("x-content-container", ContentContainer);