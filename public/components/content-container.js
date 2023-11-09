console.debug("Loading content-container.js");

export class ContentContainer extends HTMLElement {
    constructor() {
        super();
    }

    // noinspection JSUnusedGlobalSymbols
    connectedCallback() {
        const template = document.createElement("template");
        template.innerHTML = `
            <link rel="stylesheet" href="/css/reset.css">
            <style>
                .content {
                    display: flex;
                    flex-direction: column;
                    max-height: 85vh;
                    height: 85vh;
                    padding: 2vh 2vw;
                }

                .content > p {
                    white-space: normal;
                }
                
                .content > p + p {
                    margin-top: 20px;
                }
            </style>
            <div class="content">
                <h1>Stash | Software Engineering Manager</h1>
                <!--    <img alt="" src="https://picsum.photos/200/300" />-->
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu est nec nulla tristique aliquam.
                    Donec
                    cursus elit id ullamcorper feugiat. Nunc tincidunt massa in maximus blandit. Nullam finibus nulla
                    feugiat,
                    bibendum est nec, accumsan tortor. Fusce lacus mi, placerat a pretium et, efficitur vel purus. Sed
                    feugiat
                    diam lacus, placerat eleifend ante pulvinar quis. Integer imperdiet dolor enim, nec varius urna
                    elementum
                    at. Nam tincidunt sollicitudin nisl eu congue. Integer scelerisque iaculis magna, sit amet mollis velit
                    hendrerit sed. Nulla cursus aliquet eros, aliquam scelerisque felis lacinia et. Maecenas urna sem,
                    porttitor
                    vitae pellentesque eu, auctor eu ipsum. Nam vitae tortor non tortor luctus suscipit. In aliquet
                    consequat
                    tellus, dictum vestibulum massa mollis vel.
                </p>
                <p>
                    Sed libero leo, porta sit amet sem vitae, rutrum vulputate diam. Nulla efficitur, leo non pretium
                    feugiat,
                    mauris nulla pellentesque nunc, id suscipit quam massa a est. Pellentesque efficitur mi lorem. In a
                    congue
                    justo. Etiam a felis ligula. Nam odio ante, pellentesque vitae elementum ac, congue non lorem. Aliquam
                    ligula enim, cursus ac finibus vel, ornare hendrerit urna. Nam non ligula sit amet leo tempus gravida.
                    Duis
                    dui felis, volutpat vitae finibus ac, lobortis et diam. Vestibulum quis rhoncus quam.
                </p>
                <p>
                    Quisque ultrices urna id nulla mollis ornare. Curabitur ac felis eu massa egestas pharetra ut rhoncus
                    nisi.
                    Sed in maximus tortor. Praesent orci dui, auctor sed eleifend in, congue non magna. Maecenas turpis
                    lacus,
                    lacinia eget venenatis ut, pharetra sed elit. Vestibulum venenatis lacus nec tellus feugiat congue.
                    Curabitur tempus vel dolor at efficitur. Duis vulputate lectus ex, a pulvinar felis hendrerit id.
                    Quisque et
                    vestibulum eros, et tincidunt elit. In non elit a nibh aliquet lobortis. Quisque semper ut nisl eu
                    finibus.
                    Cras tempus mauris eu dolor volutpat, at fringilla enim fringilla. Maecenas nec purus bibendum, accumsan
                    velit sit amet, convallis dui.
                </p>
                <p>
                    Praesent aliquam venenatis faucibus. Morbi suscipit nisi in magna laoreet, vulputate lacinia lorem
                    vulputate. Donec vitae massa placerat, blandit nibh at, vulputate purus. Nulla malesuada finibus semper.
                    In
                    hac habitasse platea dictumst. Proin et aliquam magna. Curabitur sed ornare eros, in tempor tellus.
                </p>
                <p>
                    Ut efficitur tellus id ullamcorper euismod. Suspendisse posuere lobortis urna, vel sollicitudin tellus
                    convallis non. Sed rhoncus lacus quis sem commodo sollicitudin. Nullam sollicitudin interdum tellus in
                    maximus. Proin nunc mauris, cursus iaculis urna ac, ornare rhoncus ex. Maecenas pharetra suscipit eros
                    et
                    fringilla. Vestibulum tempor nisl odio, quis congue est malesuada ut. Donec interdum nibh turpis. Ut a
                    dui
                    vulputate erat maximus porttitor. Vestibulum ullamcorper nulla in leo rhoncus porttitor. Mauris sed
                    consectetur leo, ac interdum velit. Cras gravida in odio eu hendrerit. Proin sodales dictum quam ac
                    hendrerit. Etiam magna libero, rhoncus non ornare vitae, vulputate ac sem. Nulla nec urna at tortor
                    finibus
                    dictum. Mauris tristique est nec ex sollicitudin, pharetra aliquam orci laoreet.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu est nec nulla tristique aliquam.
                    Donec
                    cursus elit id ullamcorper feugiat. Nunc tincidunt massa in maximus blandit. Nullam finibus nulla
                    feugiat,
                    bibendum est nec, accumsan tortor. Fusce lacus mi, placerat a pretium et, efficitur vel purus. Sed
                    feugiat
                    diam lacus, placerat eleifend ante pulvinar quis. Integer imperdiet dolor enim, nec varius urna
                    elementum
                    at. Nam tincidunt sollicitudin nisl eu congue. Integer scelerisque iaculis magna, sit amet mollis velit
                    hendrerit sed. Nulla cursus aliquet eros, aliquam scelerisque felis lacinia et. Maecenas urna sem,
                    porttitor
                    vitae pellentesque eu, auctor eu ipsum. Nam vitae tortor non tortor luctus suscipit. In aliquet
                    consequat
                    tellus, dictum vestibulum massa mollis vel.
                </p>
                <p>
                    Sed libero leo, porta sit amet sem vitae, rutrum vulputate diam. Nulla efficitur, leo non pretium
                    feugiat,
                    mauris nulla pellentesque nunc, id suscipit quam massa a est. Pellentesque efficitur mi lorem. In a
                    congue
                    justo. Etiam a felis ligula. Nam odio ante, pellentesque vitae elementum ac, congue non lorem. Aliquam
                    ligula enim, cursus ac finibus vel, ornare hendrerit urna. Nam non ligula sit amet leo tempus gravida.
                    Duis
                    dui felis, volutpat vitae finibus ac, lobortis et diam. Vestibulum quis rhoncus quam.
                </p>
                <p>
                    Quisque ultrices urna id nulla mollis ornare. Curabitur ac felis eu massa egestas pharetra ut rhoncus
                    nisi.
                    Sed in maximus tortor. Praesent orci dui, auctor sed eleifend in, congue non magna. Maecenas turpis
                    lacus,
                    lacinia eget venenatis ut, pharetra sed elit. Vestibulum venenatis lacus nec tellus feugiat congue.
                    Curabitur tempus vel dolor at efficitur. Duis vulputate lectus ex, a pulvinar felis hendrerit id.
                    Quisque et
                    vestibulum eros, et tincidunt elit. In non elit a nibh aliquet lobortis. Quisque semper ut nisl eu
                    finibus.
                    Cras tempus mauris eu dolor volutpat, at fringilla enim fringilla. Maecenas nec purus bibendum, accumsan
                    velit sit amet, convallis dui.
                </p>
                <p>
                    Praesent aliquam venenatis faucibus. Morbi suscipit nisi in magna laoreet, vulputate lacinia lorem
                    vulputate. Donec vitae massa placerat, blandit nibh at, vulputate purus. Nulla malesuada finibus semper.
                    In
                    hac habitasse platea dictumst. Proin et aliquam magna. Curabitur sed ornare eros, in tempor tellus.
                </p>
                <p>
                    Ut efficitur tellus id ullamcorper euismod. Suspendisse posuere lobortis urna, vel sollicitudin tellus
                    convallis non. Sed rhoncus lacus quis sem commodo sollicitudin. Nullam sollicitudin interdum tellus in
                    maximus. Proin nunc mauris, cursus iaculis urna ac, ornare rhoncus ex. Maecenas pharetra suscipit eros
                    et
                    fringilla. Vestibulum tempor nisl odio, quis congue est malesuada ut. Donec interdum nibh turpis. Ut a
                    dui
                    vulputate erat maximus porttitor. Vestibulum ullamcorper nulla in leo rhoncus porttitor. Mauris sed
                    consectetur leo, ac interdum velit. Cras gravida in odio eu hendrerit. Proin sodales dictum quam ac
                    hendrerit. Etiam magna libero, rhoncus non ornare vitae, vulputate ac sem. Nulla nec urna at tortor
                    finibus
                    dictum. Mauris tristique est nec ex sollicitudin, pharetra aliquam orci laoreet.
                </p>
            </div>
        `;

        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content);
    }
}

customElements.define("x-content-container", ContentContainer);