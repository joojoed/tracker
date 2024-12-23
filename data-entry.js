document.getElementById('data-entry-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Example method to send data to Google Sheets
    // You need to replace with the specific API call and credentials
    fetch('https://script.google.com/macros/s/AKfycby2Wvn2BBCaqHFYCtWH91j6nGyl9E5hAYTPSyfAnEE5JtTitRAkMURDf6Z8x5CuTRbR/exec', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
    }).then(response => {
        if (response.ok) {
            alert('Data submitted successfully');
        } else {
            alert('Failed to submit data');
        }
    });
});
