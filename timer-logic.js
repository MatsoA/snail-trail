function validateNumeric(input) {
    // Allow only numbers by replacing non-numeric characters
    input.value = input.value.replace(/\D/g, '');
}