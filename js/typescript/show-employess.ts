export { }

const table = document.querySelector("table") as HTMLTableElement;

const data = { text: 'Hola' }

type Employes = [{
    id: string,
    firstname: string,
    lastname: string,
    birtplace: string,
    birthday: string,
    phone: string,
    job: string,
    state: string,
}];

type HTMLElement = HTMLTableRowElement | HTMLTableCellElement | HTMLAnchorElement | HTMLSpanElement;


fetch('http://localhost/js-to-ts-proyect/proyecto-web-empleados/php/show-employees.php', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),

       
}).then(response => {
    if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
    }

    return response.json();
}).then(data => {
    showData(data.results);
}).catch(error => {
    console.error('There was a problem whith the fetch operation:', error);
});

let number = 0;

function showData(employess: Employes) {

    if (!(employess.length > 1)) {
        const row = document.createElement('tr') as HTMLElement;
        const cellEmty = document.createElement('td') as HTMLElement;
        cellEmty.setAttribute('colspan', "8");
        cellEmty.textContent = 'No hay datos.';

        row.appendChild(cellEmty);
        table.appendChild(cellEmty);


    } else {
        // TODO: ver como crear los elementos html y asignarles valores con iteracciones en lugar de repetir codigo
        for (const employe of employess) {
            const row = document.createElement('tr') as HTMLElement;
            const cellNumber = document.createElement('td') as HTMLElement;
            const cellCode = document.createElement('td') as HTMLElement;
            const cellName = document.createElement('td') as HTMLElement;
            const cellBirtplace = document.createElement('td') as HTMLElement;
            const cellBirthday = document.createElement('td') as HTMLElement;
            const cellPhone = document.createElement('td') as HTMLElement;
            const cellJob = document.createElement('td') as HTMLElement;
            const cellState = document.createElement('td') as HTMLElement;
    
            const cellActions = document.createElement('td') as HTMLElement;// TODO: Agregar boton
            
            const anchor = document.createElement('a') as HTMLElement;
            const span = document.createElement('span') as HTMLElement;
    
            
            cellNumber.textContent = `${number}`;
            cellCode.textContent = employe.id;
            cellName.textContent = `${employe.firstname} ${employe.lastname}`;
            cellBirtplace.textContent = employe.birtplace;
            cellBirthday.textContent = employe.birthday;
            cellPhone.textContent = employe.phone;
            cellJob.textContent = employe.job;
    
            if (Number(employe.state) === 1) {
                cellState .setAttribute('class', 'label label-success');
                cellState.textContent = "Fijo";
            } else if (Number(employe.state) === 2) {
                cellState .setAttribute('class', 'label label-info');
                cellState.textContent = "Contratado";
            } else if (Number(employe.state) === 3) {
                cellState .setAttribute('class', 'label label-warning');
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