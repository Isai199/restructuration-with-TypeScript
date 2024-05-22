"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
document.addEventListener('DOMContentLoaded', function () {
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
    var nav = document.querySelector('#main-nav');
    nav.setAttribute('class', 'navbar navbar-default navbar-fixed-top');
    var newContentNav = "\n    <div class=\"container\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand visible-xs-block visible-sm-block\" href=\"\">Inicio</a>\n        </div>\n        <div id=\"navbar\" class=\"navbar-collapse collapse\">\n            <ul class=\"nav navbar-nav \">\n                <li id=\"itemIndex\" class=\"active\"><a href=\"../../\">Lista de empleados</a></li>\n                <li id=\"itemAdd\"><a href=\"./html/add/\">Agregar datos</a></li>\n            </ul>\n        </div><!--/.nav-collapse -->\n    </div>";
    nav.innerHTML += newContentNav;
}
