function convertCurrency() {
    const exchangeRate = 4100; // Example exchange rate, 1 USD = 4100 KHR
    const amount = document.getElementById('amount').value;
    const conversionType = document.getElementById('conversion-type').value;
    let result;

    if (conversionType === 'toUSD') {
        result = amount / exchangeRate;
        document.getElementById('result').innerText = `Equivalent Amount in USD: $${result.toFixed(2)}`;
    } else if (conversionType === 'toRiel') {
        result = amount * exchangeRate;
        document.getElementById('result').innerText = `Equivalent Amount in Riel: ៛${result.toFixed(2)}`;
    }
}