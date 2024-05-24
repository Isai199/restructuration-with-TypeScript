import {} from './types';


const deleteElements = document.querySelectorAll('.delete') as NodeList;

const urlServer = 'http://localhost/js-to-ts-proyect/proyecto-web-empleados/php/';

// TODO: el btn sirve, pero al cliclear el icono trash devueleve null, en cambio el resto regresa el id(el contenedor del span).

deleteElements.forEach((elementBtn) => {
    elementBtn.addEventListener('click', (event) => {
        const target = event.target as HTMLAnchorElement;
        const data = target.getAttribute('data');
        deleteData(data);
    });
    
});


function deleteData(id) {
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

        console.log("respuesta: ", response);
    
        return response.json();
    }).then(data => {
        // TODO: buscar eliminar el nodo del anchor actual, y refrescar la tabla.
        console.log(data.message);
    }).catch(error => {
        console.error('There was a problem whith the fetch operation:', error);
    });
}
    

