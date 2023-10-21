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
            <div class="job-list">
                ${this._data.map(entry => `
                <div>
                    <h1 class="entry-header">${entry.company}</h1>
                    ${entry.entries.map(position => `
                    <x-job-entry title="${position.title}" location="${position.location}" time="${position.time}"></x-job-entry>
                    `).join('')}
                </div>
                <hr/>
                <hr/>
                `).join('')}
            </div>
        `;
        console.log(this._data)

        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define("x-job-list", JobList);