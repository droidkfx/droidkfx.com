import "./content-container.js";
import "./footer.js";
import d_theme from "/css/default-theme.css" assert {type: "css"}
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

        let contactCard = new ContactCard(contact);
        contactCard.className = "card"
        sideBar.append(contactCard)

        let jobList = new JobList(rData);
        jobList.className = "card"
        sideBar.append(jobList)

        this.attachShadow({mode: "open"});
        this.shadowRoot.adoptedStyleSheets = [d_theme, reset, style]
        this.shadowRoot.appendChild(template.content);
    }
}

customElements.define("x-main", Main);