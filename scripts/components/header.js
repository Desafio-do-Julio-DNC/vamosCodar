class Header extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const home = this.getAttribute("home");
    const activePage = this.getAttribute("activePage");

    if (home) {
      shadow.appendChild(this.headerHome(activePage));
    } else {
      shadow.appendChild(this.generalHeader(activePage));
    }

    shadow.appendChild(this.style());
  }

  headerHome(activePage) {
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "container");

    const insideHeader = document.createElement("header");
    insideHeader.setAttribute("class", "header max-w");
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
        text: "quem somos",
        link: "/pages/quem-somos.html",
      },
      {
        text: "pratique",
        link: "/#pratique",
      },
      {
        text: "resumos",
        link: "/#resumo",
      },
      {
        text: "cursos",
        link: "/#cursos",
      },
    ];

    navigationList.map((navContent) => {
      let navItem = document.createElement("a");
      navGrid.appendChild(navItem);
      navItem.textContent = navContent.text;
      navItem.setAttribute("href", navContent.link);      
    });

    return componentRoot;
  }

  generalHeader(activePage) {
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "container");

    const insideHeader = document.createElement("header");
    insideHeader.setAttribute("class", "header max-w");
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
        text: "home",
        link: "/",
      },
      {
        text: "pratique",
        link: "/#pratique",
      },
      {
        text: "resumos",
        link: "/pages/resumos.html",
      },
      {
        text: "cursos",
        link: "/#cursos",
      },
    ];

    navigationList.map((navContent) => {
      let navItem = document.createElement("a");
      navGrid.appendChild(navItem);
      navItem.textContent = navContent.text;
      navItem.setAttribute("href", navContent.link);
      

      if (activePage == navContent.text) {
        console.log(activePage)
        navItem.setAttribute("class", "activePage");
      }
    });

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
    .max-w{
      max-width: 76.3888889%;
    } 
    .header{      
      margin: 35px auto 13.5px auto;
      
      display: flex;
      justify-content: space-between;
      align-items: center;      
    }

    a{
      color: inherit;
      text-decoration:none;
      font-size: 20px;
      text-transform: capitalize;
    }

    .header nav a {
      text-align: center
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

    .activePage{
      text-decoration: underline 5px purple
      
    }

    @media screen and (max-width: 768px){
      .max-w{
        max-width: 83%;
      } 
      .header{  
        flex-direction:column;
        row-gap: 2rem;
      }
      nav a {
      font-size: 1.6rem
      }
    }

    @media screen and (max-width: 468px){
      .max-w{
        max-width: 91%;
      } 
      .header{  
        flex-direction:column;
        row-gap: 2rem;
      }
      .header nav{
        gap: 8px;
      }
      
      nav a {
      font-size: 1.2rem
      }
    }
    `;

    return style;
  }
}

customElements.define("header-component", Header);
