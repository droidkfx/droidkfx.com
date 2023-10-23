class JobList extends HTMLElement {
    constructor() {
        super();

        this._data = [
            {
                company: 'Stash',
                entries: [
                    {title: 'Software Engineering Manager', location: 'Remote', time: 'Oct 2022 - Present'},
                    {title: 'Senior Software Engineer', location: 'Remote', time: 'Apr 2021 - Oct 2022'},
                ],
            },
            {
                company: 'Sofi',
                entries: [
                    {title: 'Software Engineer', location: 'Salt Lake City, Utah', time: 'Oct 2019 - Mar 2021'},
                ],
            },
            {
                company: 'InsideSales.com',
                entries: [
                    {title: 'Software Engineer', location: 'Salt Lake City, Utah', time: 'Sep 2018 - Sep 2019'},
                ],
            },
            {
                company: 'Motorola Solutions',
                entries: [
                    {title: 'Junior Software Engineer', location: 'Salt Lake City, Utah', time: 'May 2017 - Sep 2018'},
                ],
            },
            {
                company: 'FedEx Ground',
                entries: [
                    {title: 'Operations Administrator', location: 'Logan, Utah', time: 'May 2015 - May 2017'},
                    {title: 'Package Handler', location: 'Salt Lake City, Utah', time: 'Aug 2013 - May 2015'},
                ],
            }
        ];
    }

    // noinspection JSUnusedGlobalSymbols
    connectedCallback() {
        const template = document.createElement("template");
        template.innerHTML = `
            <link rel="stylesheet" href="/css/reset.css">
            <link rel="stylesheet" href="/css/card.css">
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