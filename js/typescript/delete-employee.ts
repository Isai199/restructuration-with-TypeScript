import {} from './types';


const deleteElements = document.querySelectorAll('.delete') as NodeList;

const urlServer = 'http://localhost/js-to-ts-proyect/proyecto-web-empleados/php/';

// TODO: el btn sirve, pero al cliclear el icono trash devueleve null, en cambio el resto regresa el id(el contenedor del span).

deleteElements.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const target = event.target as HTMLAnchorElement;
        const data = target.getAttribute('data');
        deleteData(data, target);
    });
    
});


function deleteData(id, element) {
    const data = { idEmployee: id };
    const urlResposne = urlServer + 'delete.php';
    const jsonResposne = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    };


    fetch(urlResposne, jsonResposne).then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok " + response.statusText);
        }
    
        return response.json();
    }).then(() => {
        deleteRow(element);
    }).catch(error => {
        console.error('There was a problem whith the fetch operation:', error);
    });
}

function deleteRow(element) {
    const aElement = element as HTMLAnchorElement;
    const tdElement = aElement.closest('td');
    const trElement = tdElement?.closest('tr');

    if (trElement) {
        trElement.remove();
    } else {
        console.error('Parent <tr> element not found');
    }
}
    

