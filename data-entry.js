   document.getElementById('data-entry-form').addEventListener('submit', function(event) {
       event.preventDefault();

       const name = document.getElementById('name').value;
       const email = document.getElementById('email').value;
       const message = document.getElementById('message').value;

       fetch('https://script.google.com/macros/s/AKfycbyVfHRXIxAACSu-cp7RcElG4E-_vRo4JAlKqO0VfMEANK-k5f-MIkEd0xEvCp2xJ9gq/exec', {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json',
           },
           body: JSON.stringify({ name, email, message }),
       }).then(response => response.json())
         .then(data => {
             if (data.status === 'success') {
                 alert('Data submitted successfully');
             } else {
                 alert('Failed to submit data');
             }
         }).catch(error => console.error('Error:', error));
   });
