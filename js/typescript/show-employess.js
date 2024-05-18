"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
var table = document.querySelector("table");
var data = { text: 'Hola' };
fetch('http://localhost/js-to-ts-proyect/proyecto-web-empleados/php/show-employees.php', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
}).then(function (response) {
    if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json();
}).then(function (data) {
    showData(data.results);
}).catch(function (error) {
    console.error('There was a problem whith the fetch operation:', error);
});
var number = 0;
function showData(employess) {
    if (!(employess.length > 1)) {
        var row = document.createElement('tr');
        var cellEmty = document.createElement('td');
        cellEmty.setAttribute('colspan', "8");
        cellEmty.textContent = 'No hay datos.';
        row.appendChild(cellEmty);
        table.appendChild(cellEmty);
    }
    else {
        for (var _i = 0, employess_1 = employess; _i < employess_1.length; _i++) {
            var employe = employess_1[_i];
            var row = document.createElement('tr');
            var cellNumber = document.createElement('td');
            var cellCode = document.createElement('td');
            var cellName = document.createElement('td');
            var cellBirtplace = document.createElement('td');
            var cellBirthday = document.createElement('td');
            var cellPhone = document.createElement('td');
            var cellJob = document.createElement('td');
            var cellState = document.createElement('td');
            var cellActions = document.createElement('td'); // TODO: Agregar boton
            var anchor = document.createElement('a');
            var span = document.createElement('span');
            cellNumber.textContent = "".concat(number);
            cellCode.textContent = employe.id;
            cellName.textContent = "".concat(employe.firstname, " ").concat(employe.lastname);
            cellBirtplace.textContent = employe.birtplace;
            cellBirthday.textContent = employe.birthday;
            cellPhone.textContent = employe.phone;
            cellJob.textContent = employe.job;
            if (Number(employe.state) === 1) {
                cellState.setAttribute('class', 'label label-success');
                cellState.textContent = "Fijo";
            }
            else if (Number(employe.state) === 2) {
                cellState.setAttribute('class', 'label label-info');
                cellState.textContent = "Contratado";
            }
            else if (Number(employe.state) === 3) {
                cellState.setAttribute('class', 'label label-warning');
                cellState.textContent = "Outsourcing";
            }
            anchor.setAttribute('class', 'btn btn-danger btn-sm  delete');
            anchor.setAttribute('data', employe.id);
            span.setAttribute('class', 'glyphicon glyphicon-trash');
            span.setAttribute('aria-hidden', 'true');
            anchor.appendChild(span);
            row.appendChild(cellNumber);
            row.appendChild(cellCode);
            row.appendChild(cellName);
            row.appendChild(cellBirtplace);
            row.appendChild(cellBirthday);
            row.appendChild(cellPhone);
            row.appendChild(cellJob);
            row.appendChild(cellState);
            row.appendChild(cellActions);
            row.appendChild(anchor);
            table.appendChild(row);
            number++;
        }
    }
}
