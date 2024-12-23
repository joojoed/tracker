document.getElementById('data-entry-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Example method to send data to Google Sheets
    // You need to replace with the specific API call and credentials
    fetch('YOUR_GOOGLE_APPS_SCRIPT_URL', {
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
