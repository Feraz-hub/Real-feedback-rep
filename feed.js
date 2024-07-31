document.addEventListener('DOMContentLoaded', function() {
    const numbers = document.querySelectorAll('.color');

    numbers.forEach(number => {
        number.addEventListener('click', function() {
            const value = parseInt(this.getAttribute('data-value'));

            // Remove 'selected' class from all numbers
            numbers.forEach(num => num.classList.remove('selected'));

            // Add 'selected' class to the clicked number and all numbers before it
            numbers.forEach(num => {
                if (parseInt(num.getAttribute('data-value')) <= value) {
                    num.classList.add('selected');
                }
            });
        });
    });
});