class resumoCSS extends HTMLElement {
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
    componentRoot.appendChild(title);
    title.textContent = "Introdução ao CSS: Estilizando a Web";   

    const paragraph1 = document.createElement('p');
    componentRoot.appendChild(paragraph1);
    paragraph1.textContent = `O CSS, ou Cascading Style Sheets (Folhas de Estilo em Cascata), desempenha um papel essencial na construção da web que conhecemos e amamos hoje em dia. É a linguagem que permite dar estilo e formato às páginas da web, tornando-as visualmente atraentes e apresentáveis.    
    `

    const paragraph2 = document.createElement('p');
    componentRoot.appendChild(paragraph2);
    paragraph2.textContent = "Enquanto o HTML (Hypertext Markup Language) define a estrutura e o conteúdo de uma página, o CSS entra em ação para controlar a aparência e o layout dessa estrutura. Em outras palavras, o CSS permite que você determine como os elementos HTML, como textos, imagens e caixas, são exibidos em um navegador da web.";

    const paragraph3 = document.createElement('p');
    componentRoot.appendChild(paragraph3);
    paragraph3.textContent ="Nesta jornada pelo mundo do CSS, exploraremos os princípios fundamentais dessa linguagem de estilo, aprenderemos a selecionar elementos na página para aplicar estilos específicos, entenderemos como controlar cores, tipografia, margens, preenchimentos e muito mais. Além disso, exploraremos técnicas avançadas, como a criação de layouts responsivos para que suas páginas se ajustem a diferentes tamanhos de tela e dispositivos.";  

    const paragraph4 = document.createElement('p');
    componentRoot.appendChild(paragraph4);
    paragraph4.textContent ="O CSS é uma ferramenta poderosa para transformar páginas HTML simples em designs impressionantes, e é uma habilidade fundamental para qualquer desenvolvedor web ou designer. Ao dominar o CSS, você poderá criar experiências web visualmente cativantes que cativam e envolvem os visitantes. Vamos começar a explorar o mundo do CSS e dar vida aos seus projetos na web.";     

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

customElements.define('css-resumo', resumoCSS)