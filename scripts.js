const convertButton = document.querySelector('.convert-button');
const currencySelect = document.querySelector('.currency-select');

function convertvalues() {
	const inputCurrencyValue = document.querySelector('.input-currency').value;
	const currencyValueToConvert = document.querySelector('.currency-value-to-convert');
	const currencyValueConverted = document.querySelector('.currency-value');
    
    console.log(currencySelect.value);

	const dolarToday = 5.2;
	const euroToday = 6.2;
	const libraToday = 7.3;
	const bitcoinToday = 605994 // Add the exchange rate for libra

	
    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD"
	}).format(inputCurrencyValue / dolarToday); 
	}
    
	if (currencySelect.value == "euro") {
		currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
		style: "currency",
		currency: "EUR"	
	}).format(inputCurrencyValue / euroToday);	
	}

	if (currencySelect.value == "libra") {
		currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
		style: "currency",
		currency: "GBP"	
	}).format(inputCurrencyValue / libraToday);	
	}

	if (currencySelect.value == "bitcoin") {
		const bitcoinValue = inputCurrencyValue / bitcoinToday;
		currencyValueConverted.innerHTML = bitcoinValue.toFixed(8) + " BTC";
	}

	currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
		style: "currency",
		currency: "BRL"
	}).format(inputCurrencyValue);

	
		
}

function changeCurrency() {
	const currencyName = document.getElementById('currency-name');
	const currencyImage = document.querySelector('.currency-img');
    
	if (currencySelect.value == "dolar") {
		currencyName.innerHTML = "Dollar";
		currencyImage.src = "./assets/estados-unidos.png";
	}
    
	if (currencySelect.value == "euro") {
		currencyName.innerHTML = "euro";
		currencyImage.src = "./assets/euro.png";
	}

	if (currencySelect.value == "libra") {
		currencyName.innerHTML = "libra";
		currencyImage.src = "./assets/libra.png";
	}

	if (currencySelect.value == "bitcoin") {
		currencyName.innerHTML = "bitcoin";
		currencyImage.src = "./assets/bitcoin.png";
	}

	convertvalues();}

currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener('click', convertvalues);