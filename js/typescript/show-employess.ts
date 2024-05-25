import { Employes, HTMLElement } from './types';


const table = document.querySelector("table") as HTMLElement;
const tableBody = document.querySelector("tbody") as HTMLElement;
const select = document.querySelector('select') as HTMLSelectElement;

const urlServer = 'http://localhost/js-to-ts-proyect/proyecto-web-empleados/php/';

select.addEventListener('change', () => {
    const seletedNumber = Number(select.value);
    fetchData(seletedNumber);
});

document.addEventListener('DOMContentLoaded', () => { 
    initialize();
});

// TODO: crear scripts separados(initialize y fetchData), para mayor coherencia en los nombres

function initialize() {
    const urlResposne = urlServer + 'connection.php';
    const jsonResposne = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    };
    
    fetch(urlResposne, jsonResposne).then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok " + response.statusText);
        }
        
        return response.json();
    }).then(() => {
        fetchData(); 
    }).catch(error => {
        console.error('There was a problem whith the fetch operation:', error);
    });
}

function fetchData(filter?:number) {
    const data = { filter: filter };
    const urlResposne = urlServer + 'show-employees.php';
    const jsonResposne = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }
    
    fetch(urlResposne, jsonResposne).then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok " + response.statusText);
        }
    
        return response.json();
    }).then(data => {
        if (!data.results) {
            showEmptydata();
        } else {
            showData(data.results);
        }

    }).catch(error => {
        console.error('There was a problem whith the fetch operation:', error);
    });
}




function showData(employess: Employes) {
    let number = 1;
    resetTable();
    // TODO: ver como crear los elementos html y asignarles valores con iteracciones en lugar de repetir codigo
    for (const employe of employess) {
        const row = document.createElement('tr') as HTMLElement;
        const cellNumber = document.createElement('th') as HTMLElement;
        const cellCode = document.createElement('td') as HTMLElement;
        const cellName = document.createElement('td') as HTMLElement;
        const cellBirtplace = document.createElement('td') as HTMLElement;
        const cellBirthday = document.createElement('td') as HTMLElement;
        const cellPhone = document.createElement('td') as HTMLElement;
        const cellJob = document.createElement('td') as HTMLElement;
        const cellState = document.createElement('td') as HTMLElement;
        const cellActions = document.createElement('td') as HTMLElement;

        const spanState = document.createElement('span');

        
        const anchor = document.createElement('a') as HTMLElement;
        const spanAction = document.createElement('span') as HTMLElement;
        
        cellNumber.setAttribute('scope', 'row');
        
        cellNumber.textContent = `${number}`;
        cellCode.textContent = employe.id;
        cellName.textContent = `${employe.firstname} ${employe.lastname}`;
        cellBirtplace.textContent = employe.birtplace;
        cellBirthday.textContent = employe.birthday;
        cellPhone.textContent = employe.phone;
        cellJob.textContent = employe.job;

        if (Number(employe.state) === 1) {
            spanState.setAttribute('class', 'label label-success');
            spanState.textContent = "Fijo";
        } else if (Number(employe.state) === 2) {
            spanState.setAttribute('class', 'label label-info');
            spanState.textContent = "Contratado";
        } else if (Number(employe.state) === 3) {
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

    loadExternalScript('./js/typescript/delete-employee.js');
       
}

function resetTable() {
    const children = document.querySelectorAll('table tr');
    if (children.length > 0) {
        for (let i = 1; i < children.length; i++) { // NOTE: se salta el primer <tr>(los titulos de las columnas)
            children[i].remove();
        }
    }
}

function showEmptydata() {
    resetTable();
    const row = document.createElement('tr') as HTMLElement;
    const cellEmty = document.createElement('td') as HTMLElement;
    cellEmty.setAttribute('colspan', "8");
    cellEmty.textContent = 'No hay datos.';

    row.appendChild(cellEmty);
    table.appendChild(row);
}

function loadExternalScript(src: string) {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;

    script.addEventListener('error', () => {
        console.error(`Error loading script ${src}`);
    });

    document.head.appendChild(script);
}