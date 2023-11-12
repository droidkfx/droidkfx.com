import "./footer.js";
import d_theme from "/css/default-theme.css" assert {type: "css"}
import reset from "/css/reset.css" assert {type: "css"}
import style from "/css/main.css" assert {type: "css"}
import contact from "/data/contact.json" assert {type: "json"};
import rData from "/data/resume-data.json" assert {type: "json"};
import {ContactCard} from "./contact-card.js";
import {JobList} from "./job-list.js";
import {ContentContainer} from "./content-container.js";
import {Footer} from "./footer.js";

console.debug("Loading main.js");

export class Main extends HTMLElement {
    constructor() {
        super();

        this._contentContainer = new ContentContainer(rData);
    }

    // noinspection JSUnusedGlobalSymbols
    connectedCallback() {
        const template = document.createElement("template");

        let main = document.createElement("main");
        template.content.append(main);
        let sideBar = document.createElement("div");
        sideBar.classList.add("side-bar");
        main.append(sideBar);

        let contactCard = new ContactCard(contact);
        contactCard.classList.add("card");
        sideBar.append(contactCard);

        let jobList = new JobList(rData, (company) => this.handleJobSelect(company));
        jobList.classList.add("card");
        sideBar.append(jobList)

        this._contentContainer.classList.add(...["card", "view-container"]);
        main.append(this._contentContainer);

        let footer = new Footer();
        template.content.append(footer);

        this.attachShadow({mode: "open"});
        this.shadowRoot.adoptedStyleSheets = [d_theme, reset, style]
        this.shadowRoot.appendChild(template.content);
    }

    handleJobSelect(company) {
        console.debug("Selected " + company);
        this._contentContainer.changeContent(company);
    }
}

customElements.define("x-main", Main);