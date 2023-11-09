import {JobEntry} from "./job-entry.js";

console.debug("Loading job-list.js");

export class JobList extends HTMLElement {
    constructor(data) {
        super();

        this._data = data;
    }
    
    // noinspection JSUnusedGlobalSymbols
    connectedCallback() {
        const template = document.createElement("template");
        template.innerHTML = `
            <script src="components/job-entry.js" type="application/javascript"></script>
            <link rel="stylesheet" href="/css/reset.css">
            <style>
                .entry-header {
                    padding: 2vh 2vw;
                }
                .job-list > div {
                    padding: 0;
                }      
            </style>
            <div class="job-list" id="list-elem">
                <!-- entries to be rendered here -->
            </div>
        `;
        let list = template.content.querySelector("#list-elem");
        this.getJobListEntries().forEach(entry => {
            list.appendChild(entry);
        });

        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content);
    }

    getJobListEntries() {
        let items = [];
        this._data.forEach(elem => {
            let div = document.createElement("div");
            let header = document.createElement("h1");
            header.setAttribute("class", "entry-header");
            header.innerText = elem.company;
            div.appendChild(header);

            elem.entries.forEach(position => {
                div.appendChild(new JobEntry(position));
            });

            div.appendChild(document.createElement("hr"));
            div.appendChild(document.createElement("hr"));
            items.push(div);
        });
        return items;
    }
}

customElements.define("x-job-list", JobList);