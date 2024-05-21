import { HTMLElement } from "./types";


document.addEventListener('DOMContentLoaded', () => {
    createNav();
});

// TODO: buscar la manera de al seleccionar un tab, este se le agregue la clase active

// const liIndex = document.querySelector('#itemIndex') as HTMLElement;
// const liAdd = document.querySelector('#itemAdd') as HTMLElement;
// liIndex.querySelector('a')?.addEventListener('click', handleClick);
// liAdd.querySelector('a')?.addEventListener('click', handleClick);
// function handleClick(e) {
//     e.preventDefault();
    
//     liIndex.classList.remove('active');
//     liAdd.classList.remove('active');
    
//     console.log('nombre de la clase: '+liIndex.className);
    
  
//     e.currentTarget.parentElement.classList.add("active");
    
// }



function createNav() {
    const nav = document.querySelector('#main-nav') as HTMLElement;

    nav.setAttribute('class', 'navbar navbar-default navbar-fixed-top')

    const newContentNav = `
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand visible-xs-block visible-sm-block" href="">Inicio</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav ">
                <li id="itemIndex" class="active"><a href="index.html">Lista de empleados</a></li>
                <li id="itemAdd"><a href="add.php">Agregar datos</a></li>
            </ul>
        </div><!--/.nav-collapse -->
    </div>`;
                
    nav.innerHTML += newContentNav;


}