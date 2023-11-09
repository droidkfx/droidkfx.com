import "./content-container.js";
import "./footer.js";

import contact from "/data/contact.json" assert {type: "json"};
import rData from "/data/resume-data.json" assert {type: "json"};
import {ContactCard} from "./contact-card.js";
import {JobList} from "./job-list.js";

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
                <div class="side-bar" id="side-bar">
                    <!-- fill in data elements -->
                </div>
                <x-content-container class="card view-container"></x-content-container>
            </main>
            <x-footer></x-footer>
        `;

        let sideBar = template.content.querySelector("#side-bar")
        sideBar.append(new ContactCard(contact))
        sideBar.append(new JobList(rData))

        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content);
    }
}

customElements.define("x-main", Main);