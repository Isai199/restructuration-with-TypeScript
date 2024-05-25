"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
var deleteElements = document.querySelectorAll('.delete');
var urlServer = 'http://localhost/js-to-ts-proyect/proyecto-web-empleados/php/';
// TODO: el btn sirve, pero al cliclear el icono trash devueleve null, en cambio el resto regresa el id(el contenedor del span).
deleteElements.forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        var target = event.target;
        var data = target.getAttribute('data');
        deleteData(data, target);
    });
});
function deleteData(id, element) {
    var data = { idEmployee: id };
    var urlResposne = urlServer + 'delete.php';
    var jsonResposne = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    };
    fetch(urlResposne, jsonResposne).then(function (response) {
        if (!response.ok) {
            throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
    }).then(function () {
        deleteRow(element);
    }).catch(function (error) {
        console.error('There was a problem whith the fetch operation:', error);
    });
}
function deleteRow(element) {
    var aElement = element;
    var tdElement = aElement.closest('td');
    var trElement = tdElement === null || tdElement === void 0 ? void 0 : tdElement.closest('tr');
    if (trElement) {
        trElement.remove();
    }
    else {
        console.error('Parent <tr> element not found');
    }
}
