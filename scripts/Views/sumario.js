class sumario extends HTMLElement {
  constructor() {
    super();

    let listOfTitle = this.getAttribute("listOfTitles").split(",");

    const shadow = this.attachShadow({ mode: "open" });

    shadow.appendChild(this.renderSumario(listOfTitle));

    shadow.appendChild(this.style());
  }

  renderSumario(listOfTitle) {
    const componentRoot = document.createElement("section");

    
    const title = document.createElement("h2");
    componentRoot.setAttribute("id", "renderSumario");
    componentRoot.setAttribute("class", "sumario");
    componentRoot.appendChild(title);
    title.textContent = "Sumario";

    const list = document.createElement("ul");
    componentRoot.appendChild(list);

    //faz o map na lista de títulos encontradas na página e renderiza na tela
    listOfTitle.map((titulo, index) => {
      console.log(titulo);
      console.log(index);
      let listItem = document.createElement("li");
      listItem.setAttribute("key", index);
      list.appendChild(listItem);


      //Cria a anchora que irá puxar a função GoTo
      let listAnchor = document.createElement("a");
      listItem.appendChild(listAnchor);
      listAnchor.textContent = titulo;
      listAnchor.setAttribute("onclick", `goTo("chapter${index + 1}")`);
    });

    return componentRoot;
  }

  style() {
    const style = document.createElement("style");

    style.textContent = `
    html{
      font-size:10px;
    }

    section{
      max-width: 76.3888889%;
      margin: 0 auto;
    }
    h2{
      font-size: 3.2rem;
    }

    p, li a{
      font-size: 2rem;
      text-indent: 4rem;
      font-weight:400;
      line-height: 2.8rem;
        }

    li a:hover {      
      font-weight: 600   
    }

    @media screen and (max-width: 768px){
      section{
        max-width: 83%;
      }
      h2{
        font-size: 2.8rem;
      }
  
      p{
        font-size: 1.6rem;
        text-indent: 3rem;
      }
    }

    @media screen and (max-width: 468px){
      section{
        max-width: 91%;
      }
      h2{
        font-size: 2.4rem;
      }
  
      p{
        font-size: 1.2rem;
        text-indent: 2rem;
        line-height: 2.2rem;
      }
    }   
    `;

    return style;
  }
}

customElements.define("sumario-component", sumario);
