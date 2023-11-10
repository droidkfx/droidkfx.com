import reset from "/css/reset.css" assert {type: "css"}
import style from "/css/content-container.css" assert {type: "css"}

console.debug("Loading content-container.js");

export class ContentContainer extends HTMLElement {
    constructor(resumeData) {
        super();

        this._resumeData = resumeData;
        this._rootDiv = null;
        this._selectedCompany = null;
    }

    // noinspection JSUnusedGlobalSymbols
    connectedCallback() {
        let div = document.createElement("div");
        div.classList.add("content");
        this._rootDiv = div;

        this._rootDiv.appendChild(this.buildContent(this._selectedCompany));

        this.attachShadow({mode: "open"});
        this.shadowRoot.adoptedStyleSheets = [reset, style]
        this.shadowRoot.appendChild(div);
    }

    buildContent(company) {
        let template = document.createElement("template")
        let found = false;

        for (let entry of this._resumeData) {
            if (entry.company === company) {
                found = true;
                let header = document.createElement("h1");
                header.innerText = entry.company;
                template.content.appendChild(header);
                template.content.appendChild(document.createElement("hr"));
                template.content.appendChild(document.createElement("br"));

                for (let position of entry.entries) {
                    let subtitle = document.createElement("h2");
                    subtitle.innerText = position.title;
                    template.content.appendChild(subtitle);

                    let positionFragment = document.createElement("div");
                    positionFragment.classList.add("content-detail")
                    positionFragment.innerHTML = "Loading..."
                    template.content.appendChild(positionFragment);
                    fetch(position.contentUrl || "data/lipsum-entry.html")
                        .then(response => {
                            if (!response.ok) {
                                throw Error(response.statusText + " (" + response.status + ")");
                            } else {
                                return response.text()
                            }
                        })
                        .then(text => positionFragment.innerHTML = text)
                        .catch(reason => {
                            positionFragment.innerHTML = `<p>This is embarrassing...<br> ${reason}.</p>`;
                            console.error(reason)
                        });

                    template.content.appendChild(document.createElement("br"));
                }
                break;
            }
        }

        if (!found) {
            let fallback = document.createElement("h1");
            fallback.innerText = "No content found for " + company;
            template.appendChild(fallback);
        }

        return template.content;
    }

    changeContent(company) {
        if (this._selectedCompany === company) {
            return;
        }

        this._selectedCompany = company;
        if (this._rootDiv) {
            this._rootDiv.replaceChildren(this.buildContent(company));
        }
    }
}

customElements.define("x-content-container", ContentContainer);