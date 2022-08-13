class Navigation extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class="topnav">
                <a href="homepage.html"><img src="logo.svg" id="logo" /></a>
                <ul>
                    <li><a href="sobre.html">Sobre</a></li>
                    <li><a href="artigo.html">Artigo</a></li>
                    <li><a href="04-tabelas.html">Tabelas</a></li>
                    <li><a href="06-formularios.html">Formulários</a></li>
                    <li><a href="https://www.linkedin.com/in/alarcon-developer/">LinkedIn</a></li>
                    <li><a href="https://github.com/S0fer">GitHub</a></li>
                </ul>
                <a href="javascript:void(0);" class="icon" onclick="myFunction()"><img src="icon.svg" id="icon" />
                </a>
        </header>
        <ul id="mobile-nav">
        <a href="sobre.html"><li>Sobre</li></a>
        <a href="artigo.html"><li>Artigo</li></a>
        <a href="04-tabelas.html"><li>Tabelas</li></a>
        <a href="06-formularios.html"><li>Formulários</li></a>
        <a href="https://www.linkedin.com/in/alarcon-developer/"><li>LinkedIn</li></a>
        <a href="https://github.com/S0fer"><li>GitHub</li></a>
        </ul>
      `
    }
}

class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <p>
                    Desenvolvido por João Duarte
                </p>
                <p>
                    <a href="homepage.html">Voltar ao Início</a>
                </p>
            </footer>
      `
    }
}





customElements.define('main-header', Navigation);
customElements.define('main-footer', Footer);

function myFunction() {
    var x = document.getElementById("mobile-nav");
    if (x.className === "") {
      x.className += " responsive";
    } else {
      x.className = "";
    }
  }