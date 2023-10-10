class resumoCSS extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    shadow.appendChild(this.chapter1());
    shadow.appendChild(this.chapter2());

    shadow.appendChild(this.style());
  }

  chapter1() {
    const componentRoot = document.createElement("section");

    const title = document.createElement("h2");
    componentRoot.setAttribute("id", "chapter1");
    title.setAttribute("class", "chapterTitle");
    componentRoot.appendChild(title);
    title.textContent = "Introdução ao CSS: Estilizando a Web";

    const paragraph1 = document.createElement("p");
    componentRoot.appendChild(paragraph1);
    paragraph1.textContent = `O CSS, ou Cascading Style Sheets (Folhas de Estilo em Cascata), desempenha um papel essencial na construção da web que conhecemos e amamos hoje em dia. É a linguagem que permite dar estilo e formato às páginas da web, tornando-as visualmente atraentes e apresentáveis.    
    `;

    const paragraph2 = document.createElement("p");
    componentRoot.appendChild(paragraph2);
    paragraph2.textContent =
      "Enquanto o HTML (Hypertext Markup Language) define a estrutura e o conteúdo de uma página, o CSS entra em ação para controlar a aparência e o layout dessa estrutura. Em outras palavras, o CSS permite que você determine como os elementos HTML, como textos, imagens e caixas, são exibidos em um navegador da web.";

    const paragraph3 = document.createElement("p");
    componentRoot.appendChild(paragraph3);
    paragraph3.textContent =
      "Nesta jornada pelo mundo do CSS, exploraremos os princípios fundamentais dessa linguagem de estilo, aprenderemos a selecionar elementos na página para aplicar estilos específicos, entenderemos como controlar cores, tipografia, margens, preenchimentos e muito mais. Além disso, exploraremos técnicas avançadas, como a criação de layouts responsivos para que suas páginas se ajustem a diferentes tamanhos de tela e dispositivos.";

    const paragraph4 = document.createElement("p");
    componentRoot.appendChild(paragraph4);
    paragraph4.textContent =
      "O CSS é uma ferramenta poderosa para transformar páginas HTML simples em designs impressionantes, e é uma habilidade fundamental para qualquer desenvolvedor web ou designer. Ao dominar o CSS, você poderá criar experiências web visualmente cativantes que cativam e envolvem os visitantes. Vamos começar a explorar o mundo do CSS e dar vida aos seus projetos na web.";

    return componentRoot;
  }

  chapter2() {
    const componentRoot = document.createElement("section");

    const title = document.createElement("h2");
    componentRoot.setAttribute("id", "chapter2");
    title.setAttribute("class", "chapterTitle");
    componentRoot.appendChild(title);
    title.textContent = "CSS Sintaxe";

    const paragraph1 = document.createElement("p");
    componentRoot.appendChild(paragraph1);
    paragraph1.innerHTML = `<p>O CSS é uma linguagem de estilo que é usada para controlar a aparência e o layout de elementos HTML em uma página da web. A sintaxe do CSS é relativamente simples, e ela segue um padrão geral:
    </p>
    
    <ol type='1'>
      <li><span><b>Seletor:</b></span> O seletor é um padrão que corresponde a elementos HTML que você deseja estilizar. Por exemplo, se você deseja estilizar todos os parágrafos <p> em uma página, o seletor seria p.</li>   
      <li><span><b>Propriedade: </b></span>As propriedades são características específicas que você deseja aplicar aos elementos selecionados. Isso pode incluir coisas como cor, tamanho da fonte, margem, preenchimento, etc.</li>
      <li><span><b>Valor: </b></span>Os valores são atribuídos às propriedades para definir como os elementos selecionados devem se comportar em relação a essa propriedade. Por exemplo, se você quiser definir a cor do texto para vermelho, o valor correspondente seria red.</li>
    </ol>  

    <p>Aqui está um exemplo simples de uma regra CSS completa:</p>
    <pre>
    p {
      color: red;
      font-size: 16px;
      margin-top: 10px;
    }</pre>  
    <p>Neste exemplo:</p>
    <ul>
    <li><span><b>p </b></span>é o seletor, selecionando todos os elementos <p> na página.</li>
    <li><span><b>color, font-size e margin-top</b></span> são propriedades.
    </li>
    <li><span><b>red, 16px e 10px </b></span>são os valores atribuídos a essas propriedades, respectivamente.</li>
    </ul>
    
    <p>Você pode aplicar múltiplas propriedades e valores a um seletor, separando-os por ponto e vírgula. Por exemplo:</p>
    <pre>
    p {
      h1 {
        color: blue;
        font-size: 24px;
        text-align: center;
    }</pre>  
    
    <p>Além disso, você pode agrupar seletores para aplicar as mesmas regras a vários elementos. Por exemplo:</p>

    <pre>
    h1, h2, h3 {
      font-family: Arial, sans-serif;
      font-weight: bold;
    }
    </pre>  

    <p>Esta regra aplicará a mesma fonte e peso para os elementos <code>< h1>, < h2> e < h3></code>.</p>

    <p>Lembre-se de que o CSS é "em cascata", o que significa que a ordem em que as regras CSS são aplicadas pode ter um impacto, e regras mais específicas podem substituir regras mais gerais. Além disso, o CSS permite a inclusão de comentários usando /* comentário */, o que pode ser útil para documentar seu código.</p>

    

     

    
    `;

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

    p{
      font-size: 2rem;
      text-indent: 4rem;
      font-weight:400;
      line-height: 2.8rem;
    }

    pre{
      background-color: black;
      color: white;
      padding: 20px;
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

customElements.define("css-resumo", resumoCSS);
