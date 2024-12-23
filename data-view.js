let currentIndex = 0;
let dataList = [];
let filteredList = [];

document.addEventListener('DOMContentLoaded', () => {
    fetch('https://script.google.com/macros/s/AKfycbw9Iv1HQPZCXdOf2NuyOSD2WwLPYDPs5HTjXMa2Lj3iUfDOa2b5cSQz3l6WL-p8sK5p/exec')
        .then(response => response.json())
        .then(data => {
            dataList = data.slice(1);
            filteredList = [...dataList];
            displayEntry(currentIndex);
        })
        .catch(error => console.error('Error fetching data:', error));

    document.getElementById('nextButton').addEventListener('click', () => {
        if (currentIndex < filteredList.length - 1) {
            currentIndex++;
            displayEntry(currentIndex);
        }
    });

    document.getElementById('backButton').addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            displayEntry(currentIndex);
        }
    });

    document.getElementById('searchButton').addEventListener('click', () => {
        const searchName = document.getElementById('searchName').value.toLowerCase();
        filteredList = dataList.filter(entry => entry[0].toLowerCase().includes(searchName));
        currentIndex = 0;
        displayEntry(currentIndex);
    });

    document.getElementById('editButton').addEventListener('click', () => {
        enterEditMode();
    });

    document.getElementById('cancelButton').addEventListener('click', () => {
        exitEditMode();
    });

    document.getElementById('saveButton').addEventListener('click', () => {
        saveChanges();
    });
});

function displayEntry(index) {
    if (filteredList.length > 0) {
        const entry = filteredList[index];
        document.getElementById('name').textContent = `Name: ${entry[0]}`;
        document.getElementById('email').textContent = `Email: ${entry[1]}`;
        document.getElementById('message').textContent = `Message: ${entry[2]}`;
        exitEditMode(); // Ensure the display mode is active upon navigation
    } else {
        document.getElementById('name').textContent = 'No data available';
        document.getElementById('email').textContent = '';
        document.getElementById('message').textContent = '';
    }
}

function enterEditMode() {
    const entry = filteredList[currentIndex];
    document.getElementById('editName').value = entry[0];
    document.getElementById('editEmail').value = entry[1];
    document.getElementById('editMessage').value = entry[2];

    document.getElementById('displayArea').classList.add('hidden');
    document.getElementById('editArea').classList.remove('hidden');
}

function exitEditMode() {
    document.getElementById('displayArea').classList.remove('hidden');
    document.getElementById('editArea').classList.add('hidden');
}

function saveChanges() {
    const updatedEntry = [
        document.getElementById('editName').value,
        document.getElementById('editEmail').value,
        document.getElementById('editMessage').value
    ];

    filteredList[currentIndex] = updatedEntry;
    const originalIndex = dataList.findIndex(entry => entry[0] === filteredList[currentIndex][0]);
    if (originalIndex !== -1) {
        dataList[originalIndex] = updatedEntry;
    }

    fetch('YOUR_GOOGLE_APPS_SCRIPT_UPDATE_URL', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            originalIndex,
            updatedEntry
        }),
    }).then(response => response.json())
      .then(data => {
          if (data.status === 'success') {
              alert('Changes saved successfully');
              displayEntry(currentIndex);
          } else {
              alert('Failed to save changes');
          }
      }).catch(error => console.error('Error saving changes:', error));
}
