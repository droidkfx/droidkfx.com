import "./contact-card.js";
import "./content-container.js";
import "./footer.js";
import "./job-list.js";

console.debug("Loading main.js");

export class Main extends HTMLElement {
    constructor() {
        super();
    }

    // noinspection JSUnusedGlobalSymbols
    connectedCallback() {
        const template = document.createElement("template");

        template.innerHTML = `
            <link rel="stylesheet" href="/css/reset.css">
            <style>
                main {
                    display: flex;
                    flex-direction: row;
                    height: 100%;
                }
                
                .side-bar {
                    display: flex;
                    flex-direction: column;
                    margin-right: 2%;
                    max-height: 85vh;
                    height: 85vh;
                }
                
                x-job-list {
                    flex-grow: 70;
                    padding: 0;
                    overflow-y: scroll;
                }
                
                .view-container {
                    max-height: 85vh;
                    height: 85vh;
                    overflow-y: scroll;
                }
                
                .card {
                    background-color: #fff;
                    border-radius: 10px;
                }
                
                .card + .card {
                    margin-top: 5%;
                }
            </style>
            <main>
                <div class="side-bar">
                    <x-contact-card class="card"></x-contact-card>
                    <x-job-list class="card"></x-job-list>
                </div>
                <x-content-container class="card view-container"></x-content-container>
            </main>
            <x-footer></x-footer>
        `;

        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content);
    }
}

customElements.define("x-main", Main);