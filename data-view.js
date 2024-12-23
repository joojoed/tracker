 function saveChanges() {
       const updatedEntry = [
           document.getElementById('editName').value,
           document.getElementById('editEmail').value,
           document.getElementById('editMessage').value
       ];

       // Example correct fetch with error handling
       fetch('https://script.google.com/macros/s/AKfycbwQD5GG-30YtpXS-t5QDpam26YE347qRz3uPMyVa4aId5SEGBCqmJIJy2HQ9eQUFaup/exec', {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json',
           },
           body: JSON.stringify({
               originalIndex: currentIndex, // make sure originalIndex is set correctly
               updatedEntry
           }),
       }).then(response => {
           if (!response.ok) {
               throw new Error(`HTTP error! status: ${response.status}`);
           }
           return response.json();
       }).then(data => {
           if (data.status === 'success') {
               alert('Changes saved successfully');
               displayEntry(currentIndex);
           } else {
               alert('Failed to save changes');
           }
       }).catch(error => {
           console.error('Error saving changes:', error);
       });
   }
