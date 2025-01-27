 function setTheme() {
//     const root = document.documentElement;
//     // const newTheme = root.className === 'dark' ? 'light' : 'dark';
   
// 
//  root.className = newTheme;
    
//     // document.querySelector('.theme-name').textContent = newTheme;
   }
  
//   document.querySelector('.theme-toggle').addEventListener('click', setTheme)


const currenciesByContinent = {
    "Africa": [
    { "code": "ZAR", "name": "South African Rand" },
    { "code": "NGN", "name": "Nigerian Naira" },
    { "code": "KES", "name": "Kenyan Shilling" },
    { "code": "EGP", "name": "Egyptian Pound" },
    { "code": "DZD", "name": "Algerian Dinar" },
    { "code": "AOA", "name": "Angolan Kwanza" },
    { "code": "XOF", "name": "West African CFA Franc" },
    { "code": "XAF", "name": "Central African CFA Franc" },
    { "code": "BWP", "name": "Botswana Pula" },
    { "code": "BIF", "name": "Burundian Franc" },
    { "code": "CVE", "name": "Cape Verdean Escudo" },
    { "code": "KMF", "name": "Comorian Franc" },
    { "code": "CDF", "name": "Congolese Franc" },
    { "code": "DJF", "name": "Djiboutian Franc" },
    { "code": "ERN", "name": "Eritrean Nakfa" },
    { "code": "ETB", "name": "Ethiopian Birr" },
    { "code": "GMD", "name": "Gambian Dalasi" },
    { "code": "GHS", "name": "Ghanaian Cedi" },
    { "code": "GNF", "name": "Guinean Franc" },
    { "code": "LSL", "name": "Lesotho Loti" },
    { "code": "LRD", "name": "Liberian Dollar" },
    { "code": "LYD", "name": "Libyan Dinar" },
    { "code": "MWK", "name": "Malawian Kwacha" },
    { "code": "MRU", "name": "Mauritanian Ouguiya" },
    { "code": "MUR", "name": "Mauritian Rupee" },
    { "code": "MAD", "name": "Moroccan Dirham" },
    { "code": "MZN", "name": "Mozambican Metical" },
    { "code": "NAD", "name": "Namibian Dollar" },
    { "code": "RWF", "name": "Rwandan Franc" },
    { "code": "SCR", "name": "Seychellois Rupee" },
    { "code": "SLL", "name": "Sierra Leonean Leone" },
    { "code": "SOS", "name": "Somali Shilling" },
    { "code": "SSP", "name": "South Sudanese Pound" },
    { "code": "SDG", "name": "Sudanese Pound" },
    { "code": "SZL", "name": "Swazi Lilangeni" },
    { "code": "TZS", "name": "Tanzanian Shilling" },
    { "code": "TND", "name": "Tunisian Dinar" },
    { "code": "UGX", "name": "Ugandan Shilling" },
    { "code": "ZMW", "name": "Zambian Kwacha" },
    { "code": "ZWL", "name": "Zimbabwean Dollar" }
],
    "Asia": [
    { "code": "JPY", "name": "Japanese Yen" },
    { "code": "CNY", "name": "Chinese Yuan" },
    { "code": "HKD", "name": "Hong Kong Dollar" },
    { "code": "MOP", "name": "Macanese Pataca" },
    { "code": "INR", "name": "Indian Rupee" },
    { "code": "AED", "name": "United Arab Emirates Dirham" },
    { "code": "AFN", "name": "Afghan Afghani" },
    { "code": "AMD", "name": "Armenian Dram" },
    { "code": "AZN", "name": "Azerbaijani Manat" },
    { "code": "BHD", "name": "Bahraini Dinar" },
    { "code": "BDT", "name": "Bangladeshi Taka" },
    { "code": "BND", "name": "Brunei Dollar" },
    { "code": "KHR", "name": "Cambodian Riel" },
    { "code": "IDR", "name": "Indonesian Rupiah" },
    { "code": "IRR", "name": "Iranian Rial" },
    { "code": "IQD", "name": "Iraqi Dinar" },
    { "code": "ILS", "name": "Israeli New Shekel" },
    { "code": "JOD", "name": "Jordanian Dinar" },
    { "code": "KZT", "name": "Kazakhstani Tenge" },
    { "code": "KWD", "name": "Kuwaiti Dinar" },
    { "code": "KGS", "name": "Kyrgyzstani Som" },
    { "code": "LAK", "name": "Lao Kip" },
    { "code": "LBP", "name": "Lebanese Pound" },
    { "code": "MYR", "name": "Malaysian Ringgit" },
    { "code": "MVR", "name": "Maldivian Rufiyaa" },
    { "code": "MNT", "name": "Mongolian Tögrög" },
    { "code": "MMK", "name": "Myanmar Kyat" },
    { "code": "NPR", "name": "Nepalese Rupee" },
    { "code": "OMR", "name": "Omani Rial" },
    { "code": "PKR", "name": "Pakistani Rupee" },
    { "code": "PHP", "name": "Philippine Peso" },
    { "code": "QAR", "name": "Qatari Riyal" },
    { "code": "SAR", "name": "Saudi Riyal" },
    { "code": "SGD", "name": "Singapore Dollar" },
    { "code": "KRW", "name": "South Korean Won" },
    { "code": "LKR", "name": "Sri Lankan Rupee" },
    { "code": "SYP", "name": "Syrian Pound" },
    { "code": "TWD", "name": "New Taiwan Dollar" },
    { "code": "TJS", "name": "Tajikistani Somoni" },
    { "code": "THB", "name": "Thai Baht" },
    { "code": "TRY", "name": "Turkish Lira" },
    { "code": "TMT", "name": "Turkmenistani Manat" },
    { "code": "UZS", "name": "Uzbekistani Som" },
    { "code": "VND", "name": "Vietnamese đồng" },
    { "code": "YER", "name": "Yemeni Rial" }
],
    "Europe": [
    { "code": "EUR", "name": "Euro" },
    { "code": "GBP", "name": "British Pound" },
    { "code": "CHF", "name": "Swiss Franc" },
    { "code": "ALL", "name": "Albanian Lek" },
    { "code": "AMD", "name": "Armenian Dram" },
    { "code": "BYN", "name": "Belarusian Ruble" },
    { "code": "BAM", "name": "Bosnia and Herzegovina Convertible Mark" },
    { "code": "BGN", "name": "Bulgarian Lev" },
    { "code": "HRK", "name": "Croatian Kuna" },
    { "code": "CZK", "name": "Czech Koruna" },
    { "code": "DKK", "name": "Danish Krone" },
    { "code": "GEL", "name": "Georgian Lari" },
    { "code": "HUF", "name": "Hungarian Forint" },
    { "code": "ISK", "name": "Icelandic Króna" },
    { "code": "RSD", "name": "Serbian Dinar" },
    { "code": "MKD", "name": "Macedonian Denar" },
    { "code": "KGS", "name": "Kyrgyzstani Som" },
    { "code": "MDL", "name": "Moldovan Leu" },
    { "code": "NOK", "name": "Norwegian Krone" },
    { "code": "PLN", "name": "Polish Złoty" },
    { "code": "RON", "name": "Romanian Leu" },
    { "code": "RUB", "name": "Russian Ruble" },
    { "code": "SEK", "name": "Swedish Krona" },
    { "code": "UAH", "name": "Ukrainian Hryvnia" }
],
    "North America": [
    { "code": "USD", "name": "US Dollar" },
    { "code": "CAD", "name": "Canadian Dollar" },
    { "code": "MXN", "name": "Mexican Peso" },
    { "code": "BZD", "name": "Belize Dollar" },
    { "code": "CRC", "name": "Costa Rican Colón" },
    { "code": "CUP", "name": "Cuban Peso" },
    { "code": "DOP", "name": "Dominican Peso" },
    { "code": "HTG", "name": "Haitian Gourde" },
    { "code": "GTQ", "name": "Guatemalan Quetzal" },
    { "code": "HNL", "name": "Honduran Lempira" },
    { "code": "JMD", "name": "Jamaican Dollar" },
    { "code": "NIO", "name": "Nicaraguan Córdoba" },
    { "code": "PAB", "name": "Panamanian Balboa" },
    { "code": "TTD", "name": "Trinidad and Tobago Dollar" },
    { "code": "XCD", "name": "Eastern Caribbean Dollar" }
],
    "South America": [
    { "code": "BRL", "name": "Brazilian Real" },
    { "code": "ARS", "name": "Argentine Peso" },
    { "code": "BOB", "name": "Bolivian Boliviano" },
    { "code": "CLP", "name": "Chilean Peso" },
    { "code": "COP", "name": "Colombian Peso" },
    { "code": "GYD", "name": "Guyanese Dollar" },
    { "code": "PYG", "name": "Paraguayan Guarani" },
    { "code": "PEN", "name": "Peruvian Sol" },
    { "code": "SRD", "name": "Surinamese Dollar" },
    { "code": "UYU", "name": "Uruguayan Peso" },
    { "code": "VES", "name": "Venezuelan Bolívar" }
],
    "Oceania": [
    { "code": "AUD", "name": "Australian Dollar" },
    { "code": "NZD", "name": "New Zealand Dollar" },
    { "code": "FJD", "name": "Fijian Dollar" },
    { "code": "PGK", "name": "Papua New Guinean Kina" },
    { "code": "SBD", "name": "Solomon Islands Dollar" },
    { "code": "TOP", "name": "Tongan Paʻanga" },
    { "code": "TVD", "name": "Tuvaluan Dollar" },
    { "code": "VUV", "name": "Vanuatu Vatu" },
    { "code": "KID", "name": "Kiribati Dollar" },
    { "code": "XPF", "name": "CFP Franc" }
]};

Object.keys(currenciesByContinent).forEach(continent => {
    currenciesByContinent[continent].sort((a, b) => a.name.localeCompare(b.name));
}); // sorts the countries in alphabetical order

const continentFromSelect = document.getElementById('continentFrom');
const fromCurrencySelect = document.getElementById('fromCurrency');
const continentToSelect = document.getElementById('continentTo');
const toCurrencySelect = document.getElementById('toCurrency');
const amountInput = document.getElementById('amount');
const convertButton = document.getElementById('convertButton');
const resultDiv = document.getElementById('result');

function populateContinents(selectElement) {
    Object.keys(currenciesByContinent).forEach(continent => {
        const option = document.createElement('option');
        option.value = continent;
        option.textContent = continent;
        selectElement.appendChild(option);
    });
}

function populateCurrencies(continent, selectElement) {
    selectElement.innerHTML = '<option value="" disabled selected>Select Currency</option>';
    if (currenciesByContinent[continent]) {
        currenciesByContinent[continent].forEach(currency => {
            const option = document.createElement('option');
            option.value = currency.code;
            option.textContent = `${currency.name} (${currency.code})`;
            selectElement.appendChild(option);
        });
        selectElement.disabled = false;
    } else {
        selectElement.disabled = true;
    }
}

populateContinents(continentFromSelect);
populateContinents(continentToSelect);

continentFromSelect.addEventListener('change', () => {
    populateCurrencies(continentFromSelect.value, fromCurrencySelect);
});

fromCurrencySelect.addEventListener('change', async () => {
    convertCurrency();  // Trigger the conversion when the amount is typed
});

toCurrencySelect.addEventListener('change', async () => {
    convertCurrency();  // Trigger the conversion when the amount is typed
});



continentToSelect.addEventListener('change', () => {
    populateCurrencies(continentToSelect.value, toCurrencySelect);
});

let currentAmount = 1000;  // Store the initial value (or any default value)
let currHold = [];

amountInput.addEventListener('input', async () => {
    convertCurrency();  // Trigger the conversion when the amount is typed
});

// Function that performs the conversion
async function convertCurrency() {
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;
    currentAmount = parseFloat(amountInput.value);
    console.log (`fromCurrency: ${fromCurrency}. toCurrency: ${toCurrency}. currentAmount: ${currentAmount}`)
    
    // If no valid amount or currencies, show an error
    if (!fromCurrency || !toCurrency || isNaN(currentAmount) || currentAmount <= 0) {
        resultDiv.textContent = 'Please enter a valid amount and select currencies.';
        return;
    }

    try {
        // Fetch the exchange rate data
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
        const data = await response.json();

        const rate = data.rates[toCurrency];

        if (rate) {
            // Perform the conversion
            const convertedAmount = (currentAmount * rate).toFixed(2);
            resultDiv.textContent = `${currentAmount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
        } else {
            resultDiv.textContent = 'Unable to fetch the exchange rate. Try again later.';
        }
    } catch (error) {
        resultDiv.textContent = 'Error fetching exchange rates. Please check your connection.';
    }
}

// Initialize conversion with the default amount
convertCurrency();


/*
async function convertCurrency() {
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;
    const amount = parseFloat(amountInput.value);

    // If no valid amount or currencies, show an error
    if (!fromCurrency || !toCurrency || isNaN(amount) || amount <= 0) {
        resultDiv.textContent = 'Please enter a valid amount and select currencies.';
        return;
    }

    try {
        // Fetch the exchange rate data
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
        const data = await response.json();

        const rate = data.rates[toCurrency];

        if (rate) {
            // Perform the conversion
            const convertedAmount = (amount * rate).toFixed(2);
            resultDiv.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
        } else {
            resultDiv.textContent = 'Unable to fetch the exchange rate. Try again later.';
        }
    } catch (error) {
        resultDiv.textContent = 'Error fetching exchange rates. Please check your connection.';
    }
}

*/

/*
amountInput.addEventListener('input', async () => {
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;
    const amount = parseFloat(amountInput.value);

    if (!fromCurrency || !toCurrency || isNaN(amount) || amount <= 0) {
        resultDiv.textContent = 'Please enter a valid amount and select currencies.';
        return;
    }

    try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
        const data = await response.json();

        const rate = data.rates[toCurrency];

        if (rate) {
            const convertedAmount = (amount * rate).toFixed(2);
            resultDiv.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
        } else {
            resultDiv.textContent = 'Unable to fetch the exchange rate. Try again later.';
        }
    } catch (error) {
        resultDiv.textContent = 'Error fetching exchange rates. Please check your connection.';
    }
});
*/