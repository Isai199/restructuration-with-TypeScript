"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
var form = document.querySelector('form');
var urlServer = 'http://localhost/js-to-ts-proyect/proyecto-web-empleados/php/';
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var urlResposne = urlServer + 'add-employee.php';
    var formData = new FormData(form);
    var data = {};
    var jsonResposne = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    };
    formData.forEach(function (value, key) {
        data[key] = value;
    });
    jsonResposne.body = data;
    console.log('Json:', jsonResposne);
    fetch(urlResposne, jsonResposne).then(function (response) {
        if (!response.ok) {
            throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
    }).then(function (data) {
        console.log(data);
    }).catch(function (error) {
        console.error('There was a problem whith the fetch operation:', error);
    });
});
