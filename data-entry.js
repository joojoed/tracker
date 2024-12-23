document.getElementById('data-entry-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Example method to send data to Google Sheets
    // You need to replace with the specific API call and credentials
    fetch('https://script.google.com/macros/s/AKfycbyobuL4TqzTUKlk9YT65LFTJTqhqJ88vJdb7ulQtOUb2sBGb6EAC9pJ0haC_mAJCPZi/exec', {
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
