document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'YOUR_API_KEY';  // Reemplaza 'YOUR_API_KEY' con tu clave de API de ExchangeRate-API
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const rate = data.conversion_rates.EUR;
            document.getElementById('exchange-rate').textContent = rate;
        })
        .catch(error => {
            console.error('Error fetching the exchange rate:', error);
            document.getElementById('exchange-rate').textContent = 'Error';
        });
});


document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'YOUR_API_KEY';
    const url = `https://cors-anywhere.herokuapp.com/https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const rate = data.conversion_rates.EUR;
            document.getElementById('exchange-rate').textContent = rate;
        })
        .catch(error => {
            console.error('Error fetching the exchange rate:', error);
            document.getElementById('exchange-rate').textContent = 'Error';
        });
});
