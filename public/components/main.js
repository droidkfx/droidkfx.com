import "./content-container.js";
import "./footer.js";
import reset from "/css/reset.css" assert {type: "css"}
import style from "/css/main.css" assert {type: "css"}
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
        this.shadowRoot.adoptedStyleSheets = [reset, style]
        this.shadowRoot.appendChild(template.content);
    }
}

customElements.define("x-main", Main);