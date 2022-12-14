const { NODE_ENV } = process.env;

export let serverUrl;

if (NODE_ENV === 'development') {
    serverUrl = 'http://localhost:3030' // адрес сервера на локалке
} else {
    serverUrl = 'https://auction-backend.onrender.com'; // адрес сервера после выгрузки
}