import { RequestData } from './types'

const form = document.querySelector('form') as HTMLFormElement;
const urlServer = 'http://localhost/js-to-ts-proyect/proyecto-web-empleados/php/';


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const urlResposne = urlServer + 'add-employee.php';
    const formData = new FormData(form);
    const data = {};
    let jsonResposne: { [key: string] : string | {} } = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    };

    formData.forEach((value, key) => {
        data[key] = value;
    });

    jsonResposne.body = data;

    console.log('Json:', jsonResposne);

    fetch(urlResposne, jsonResposne).then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok " + response.statusText);
        }
        
        return response.json();
    }).then((data) => {
        console.log(data);
    }).catch( error => {
        console.error('There was a problem whith the fetch operation:', error);
    });
});