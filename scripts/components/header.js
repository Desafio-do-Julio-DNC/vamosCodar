class Header extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    shadow.appendChild(this.build());
    shadow.appendChild(this.style());
  }

  build() {
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "container");

    const insideHeader = document.createElement("header");
    insideHeader.setAttribute("class", "header");
    componentRoot.appendChild(insideHeader);

    const headerLogo = document.createElement("a");
    headerLogo.setAttribute("class", "header-logo");
    headerLogo.textContent = "Plataforma de Estudos";
    headerLogo.setAttribute("href", "/index.html");
    insideHeader.appendChild(headerLogo);

    const navGrid = document.createElement("nav");
    insideHeader.appendChild(navGrid);

    let navigationList = [
      {
        text: "Quem Somos",
        link: "/pages/quem-somos.html",
      },
      {
        text: "Pratique",
        link: "/pages/pratique.html",
      },
      {
        text: "Resumos",
        link: "/pages/resumos.html",
      },
      {
        text: "Cursos",
        link: "/pages/cursos.html",
      },
    ];


    navigationList.map(navContent => {
      let navItem = document.createElement('a');
      navGrid.appendChild(navItem);
      navItem.textContent = navContent.text;
      navItem.setAttribute('href', navContent.link)
    })


    return componentRoot;
  }

  style() {
    const style = document.createElement("style");

    style.textContent = `
    html{
      font-size: 10px
    }
    .container{
      border-bottom: 1px solid #d9d9d9;
    }    
    .header{
      max-width: 76.3888889%;
      margin: 35px auto 13.5px auto;
      
      display: flex;
      justify-content: space-between;
      align-items: center;      
    }

    a{
      color: inherit;
      text-decoration:none;
      font-size: 20px
    }

    .header nav{
      display: flex;
      gap: 20px;
      font-weight: bold
    }

    .header-logo {
      font-weight: bold;      
      margin: 0
    }
    `;

    return style;
  }
}

customElements.define("header-component", Header);
