function validateCreditCardNumber(cardNumber) {
    let sum = 0;
    for (let i = 0; i < cardNumber.length; i++) {
        let digit = parseInt(cardNumber[i]);

        if (i % 2 === 0) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }

        sum += digit;
    }

    return sum % 10 === 0;
}

function validate() {
    const cardNumber = document.getElementById('cardNumber').value.trim();
    const resultDiv = document.getElementById('result');

    // Check if input is valid
    if (!/^\d+$/.test(cardNumber)) {
        resultDiv.innerHTML = "Please enter a valid numeric card number.";
        resultDiv.style.color = "red";
        return;
    }

    const isValid = validateCreditCardNumber(cardNumber);
    if (isValid) {
        resultDiv.innerHTML = "✅ This card number is valid!";
        resultDiv.style.color = "green";
    } else {
        resultDiv.innerHTML = "❌ This card number is invalid.";
        resultDiv.style.color = "red";
    }
}

