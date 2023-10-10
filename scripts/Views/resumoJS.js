class resumoJS extends HTMLElement {
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
    title.textContent = "Introdução ao JavaScript: A Linguagem da Interatividade na Web";    
    const paragraph1 = document.createElement('p');
    componentRoot.appendChild(paragraph1);
    paragraph1.textContent = `JavaScript é uma linguagem de programação poderosa e versátil que desempenha um papel fundamental na web moderna. Enquanto o HTML (Hypertext Markup Language) lida com a estrutura e o conteúdo das páginas da web, e o CSS (Cascading Style Sheets) trata do design e da apresentação, o JavaScript é responsável por adicionar interatividade e funcionalidade dinâmica a essas páginas.   
    `
    const paragraph2 = document.createElement('p');
    componentRoot.appendChild(paragraph2);
    paragraph2.textContent = "Com o JavaScript, os desenvolvedores podem criar páginas da web que respondem a ações do usuário, realizam cálculos em tempo real, atualizam dinamicamente o conteúdo da página e interagem com servidores para buscar e enviar dados sem recarregar a página. Ele é amplamente utilizado em uma variedade de aplicativos web, desde simples elementos interativos até aplicativos web complexos e jogos.";

    const paragraph3 = document.createElement('p');
    componentRoot.appendChild(paragraph3);
    paragraph3.textContent ="Nesta jornada pelo universo do JavaScript, exploraremos os princípios fundamentais da linguagem, incluindo variáveis, estruturas de controle de fluxo, funções e objetos. Aprenderemos como usar o JavaScript para manipular o DOM (Document Object Model), que é a representação em árvore da estrutura de uma página web, permitindo que você altere dinamicamente o conteúdo e o estilo da página. Além disso, abordaremos tópicos avançados, como manipulação de eventos, AJAX para comunicação com servidores e frameworks modernos que simplificam o desenvolvimento web, como o React e o Angular.";  

    const paragraph4 = document.createElement('p');
    componentRoot.appendChild(paragraph4);
    paragraph4.textContent ="O JavaScript é uma habilidade essencial para desenvolvedores web, pois permite criar experiências interativas e dinâmicas que envolvem os usuários. Seja você um iniciante em programação ou um desenvolvedor experiente, o JavaScript oferece infinitas possibilidades e é uma ferramenta poderosa para moldar o futuro da web. Vamos começar a explorar o emocionante mundo do JavaScript e descobrir como ele pode transformar suas ideias em realidade na web.";     

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

customElements.define('js-resumo', resumoJS)