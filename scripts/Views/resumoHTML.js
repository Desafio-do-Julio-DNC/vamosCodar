class resumoHTML extends HTMLElement {
  constructor(){
    super()

    const shadow = this.attachShadow({ mode: "open" });

    shadow.appendChild(this.chapter1());



    shadow.appendChild(this.style());
  }

  chapter1(){
    const componentRoot = document.createElement('section');

    
    const title = document.createElement('h2');    
    componentRoot.setAttribute('id', 'chapter1')
    title.setAttribute('class', 'chapterTitle');
    componentRoot.appendChild(title);
    title.textContent = "Introdução ao HTML: A Linguagem da Web";    
    const paragraph1 = document.createElement('p');
    componentRoot.appendChild(paragraph1);
    paragraph1.textContent = `HTML, que significa "Hypertext Markup Language" (Linguagem de Marcação de Hipertexto), é a pedra angular da World Wide Web (WWW) e uma das linguagens de marcação mais importantes e amplamente utilizadas na internet. Ela desempenha um papel fundamental na criação e estruturação das páginas da web que vemos e interagimos diariamente.    
    `
    const paragraph2 = document.createElement('p');
    componentRoot.appendChild(paragraph2);
    paragraph2.textContent = " O HTML permite que os criadores de conteúdo da web definam a estrutura de uma página, organizando seu conteúdo em elementos como texto, imagens, links e mídia, enquanto também oferece a capacidade de incorporar interatividade por meio de formulários e scripts. É a linguagem que torna possível a navegação entre páginas, a exibição de imagens e a formatação de texto em um navegador da web.";
    const paragraph3 = document.createElement('p');
    componentRoot.appendChild(paragraph3);
    paragraph3.textContent ="Nesta jornada pelo mundo do HTML, exploraremos os princípios fundamentais dessa linguagem, aprenderemos a criar estruturas de página, adicionar conteúdo multimídia e, o mais importante, entenderemos como o HTML se integra com outras tecnologias da web, como CSS (Cascading Style Sheets) e JavaScript, para criar experiências web ricas e interativas. Seja você um iniciante que está apenas começando a explorar o desenvolvimento web ou um profissional experiente em busca de aprimorar suas habilidades, o HTML é um ponto de partida essencial para construir sua presença na web. Vamos mergulhar nesse mundo fascinante do HTML e começar a criar suas próprias páginas da web incríveis.";     

    return componentRoot
  }

  style() {
    const style = document.createElement("style");

    style.textContent =`
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

    p{
      font-size: 2rem;
      text-indent: 4rem;
      font-weight:400;
      line-height: 2.8rem;
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
    `

    return style
  }

}

customElements.define('html-resumo', resumoHTML)