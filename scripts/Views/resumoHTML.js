class resumoHTML extends HTMLElement {
  constructor(){
    super()

    const shadow = this.attachShadow({ mode: "open" });

    shadow.appendChild(this.chapter1())
  }

  chapter1(){
    const componentRoot = document.createElement('div');
    componentRoot.setAttribute("class", "container");

    const section = document.createElement('section');
    componentRoot.appendChild(section)

    

    return componentRoot
  }
}

customElements.define('html-resumo', resumoHTML)