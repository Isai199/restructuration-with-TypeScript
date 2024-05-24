"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
var deleteElements = document.querySelectorAll('.delete');
var urlServer = 'http://localhost/js-to-ts-proyect/proyecto-web-empleados/php/';
// TODO: el btn sirve, pero al cliclear el icono trash devueleve null, en cambio el resto regresa el id(el contenedor del span).
deleteElements.forEach(function (elementBtn) {
    elementBtn.addEventListener('click', function (event) {
        var target = event.target;
        var data = target.getAttribute('data');
        deleteData(data);
    });
});
function deleteData(id) {
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
        console.log("respuesta: ", response);
        return response.json();
    }).then(function (data) {
        console.log(data.message);
    }).catch(function (error) {
        console.error('There was a problem whith the fetch operation:', error);
    });
}
