"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
var table = document.querySelector("table");
var tableBody = document.querySelector("tbody");
var select = document.querySelector('select');
var urlServer = 'http://localhost/js-to-ts-proyect/proyecto-web-empleados/php/';
select.addEventListener('change', function () {
    var seletedNumber = Number(select.value);
    fetchData(seletedNumber);
});
document.addEventListener('DOMContentLoaded', function () {
    initialize();
});
function initialize() {
    var urlResposne = urlServer + 'connection.php';
    var jsonResposne = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    };
    fetch(urlResposne, jsonResposne).then(function (response) {
        if (!response.ok) {
            throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
    }).then(function () {
        fetchData();
    }).catch(function (error) {
        console.error('There was a problem whith the fetch operation:', error);
    });
}
function fetchData(filter) {
    var data = { filter: filter };
    var urlResposne = urlServer + 'show-employees.php';
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
    }).then(function (data) {
        showData(data.results); // TODO: regresa un error de la base de datos, y no ejecuta esta funcion
    }).catch(function (error) {
        console.error('There was a problem whith the fetch operation:', error);
    });
}
function showData(employess) {
    var number = 1;
    var children = document.querySelectorAll('table tr');
    if (children.length > 0) {
        for (var i = 1; i < children.length; i++) { // NOTE: se salta el primer <tr>(los titulos de las columnas)
            children[i].remove();
        }
    }
    if (!(employess.length > 0)) {
        var row = document.createElement('tr');
        var cellEmty = document.createElement('td');
        cellEmty.setAttribute('colspan', "8");
        cellEmty.textContent = 'No hay datos.';
        row.appendChild(cellEmty);
        table.appendChild(row);
    }
    else {
        // TODO: ver como crear los elementos html y asignarles valores con iteracciones en lugar de repetir codigo
        for (var _i = 0, employess_1 = employess; _i < employess_1.length; _i++) {
            var employe = employess_1[_i];
            var row = document.createElement('tr');
            var cellNumber = document.createElement('th');
            var cellCode = document.createElement('td');
            var cellName = document.createElement('td');
            var cellBirtplace = document.createElement('td');
            var cellBirthday = document.createElement('td');
            var cellPhone = document.createElement('td');
            var cellJob = document.createElement('td');
            var cellState = document.createElement('td');
            var cellActions = document.createElement('td');
            var spanState = document.createElement('span');
            var anchor = document.createElement('a');
            var spanAction = document.createElement('span');
            cellNumber.setAttribute('scope', 'row');
            cellNumber.textContent = "".concat(number);
            cellCode.textContent = employe.id;
            cellName.textContent = "".concat(employe.firstname, " ").concat(employe.lastname);
            cellBirtplace.textContent = employe.birtplace;
            cellBirthday.textContent = employe.birthday;
            cellPhone.textContent = employe.phone;
            cellJob.textContent = employe.job;
            if (Number(employe.state) === 1) {
                spanState.setAttribute('class', 'label label-success');
                spanState.textContent = "Fijo";
            }
            else if (Number(employe.state) === 2) {
                spanState.setAttribute('class', 'label label-info');
                spanState.textContent = "Contratado";
            }
            else if (Number(employe.state) === 3) {
                spanState.setAttribute('class', 'label label-warning');
                spanState.textContent = "Outsourcing";
            }
            cellState.appendChild(spanState);
            anchor.setAttribute('class', 'btn btn-danger btn-sm  delete');
            anchor.setAttribute('data', employe.id);
            spanAction.setAttribute('class', 'glyphicon glyphicon-trash');
            spanAction.setAttribute('aria-hidden', 'true');
            anchor.appendChild(spanAction);
            cellActions.appendChild(anchor);
            row.appendChild(cellNumber);
            row.appendChild(cellCode);
            row.appendChild(cellName);
            row.appendChild(cellBirtplace);
            row.appendChild(cellBirthday);
            row.appendChild(cellPhone);
            row.appendChild(cellJob);
            row.appendChild(cellState);
            row.appendChild(cellActions);
            tableBody.appendChild(row);
            table.appendChild(tableBody);
            number++;
        }
    }
}
