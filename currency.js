async function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const from = document.getElementById('fromCurrency').value;
    const to = document.getElementById('toCurrency').value;

    if (isNaN(amount)) {
        document.getElementById('result').innerText = 'Please enter a valid amount';
        return;
    }

    try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
        const data = await response.json();
        const rate = data.rates[to];
        const converted = (amount * rate).toFixed(2);
        document.getElementById('result').innerText = `${amount} ${from} = ${converted} ${to}`;
    } catch (error) {
        document.getElementById('result').innerText = 'Error fetching exchange rates. Please try again.';
    }
}