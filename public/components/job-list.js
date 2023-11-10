import {JobEntry} from "./job-entry.js";
import d_theme from "/css/default-theme.css" assert {type: "css"}
import reset from "/css/reset.css" assert {type: "css"}
import style from "/css/job-list.css" assert {type: "css"}

console.debug("Loading job-list.js");

export class JobList extends HTMLElement {
    constructor(data, companySelectedCallback) {
        super();

        this._data = data;
        this._companySelectedCallback = companySelectedCallback || (() => {
        });
        this._activeEntry = null;
    }
    
    // noinspection JSUnusedGlobalSymbols
    connectedCallback() {
        let list = document.createElement("div")
        list.classList.add("job-list")
        this.getJobListEntries().forEach(entry => {
            list.appendChild(entry);
        });

        this.attachShadow({mode: "open"});
        this.shadowRoot.adoptedStyleSheets = [d_theme, reset, style];
        this.shadowRoot.appendChild(list);
    }

    getJobListEntries() {
        let items = [];
        let first = true;
        this._data.forEach(elem => {
            let div = document.createElement("div");
            div.classList.add("job-list-entry");
            div.onclick = this.entryClicked(div, elem.company);
            if (first) {
                div.classList.add("selected");
                first = false;
                div.onclick();
            } else {
                div.appendChild(document.createElement("hr"));
                div.appendChild(document.createElement("hr"));
            }

            let header = document.createElement("h1");
            header.classList.add("entry-header");
            header.innerText = elem.company;
            div.appendChild(header);

            elem.entries.forEach(position => {
                div.appendChild(new JobEntry(position));
            });

            items.push(div);
        });
        return items;
    }

    entryClicked(elem, company) {
        return () => {
            if (this._activeEntry) {
                this._activeEntry.classList.remove("selected");
            }
            if (this._activeEntry === elem) {
                return;
            }
            this._companySelectedCallback(company);
            elem.classList.add("selected");
            this._activeEntry = elem;
        }
    }
}

customElements.define("x-job-list", JobList);