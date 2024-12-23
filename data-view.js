let currentIndex = 0;
let dataList = [];
let filteredList = [];

document.addEventListener('DOMContentLoaded', () => {
    // Fetch data from Google Sheets
    fetch('https://script.google.com/macros/s/AKfycbzsO-Q0m5DBVFo1p2vso23HQqBzcan-kwVvHH2tpW2L3HVMJ6E-CGDFl3jF2sRD_G4I/exec')
        .then(response => response.json())
        .then(data => {
            dataList = data.slice(1); // Skip the header row
            filteredList = [...dataList]; // Initialize filteredList
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
});

function displayEntry(index) {
    if (filteredList.length > 0) {
        const entry = filteredList[index];
        document.getElementById('name').textContent = `Name: ${entry[0]}`;
        document.getElementById('email').textContent = `Email: ${entry[1]}`;
        document.getElementById('message').textContent = `Message: ${entry[2]}`;
    } else {
        document.getElementById('name').textContent = 'No data available';
        document.getElementById('email').textContent = '';
        document.getElementById('message').textContent = '';
    }
}
