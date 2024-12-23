let currentIndex = 0;
let dataList = [];

document.addEventListener('DOMContentLoaded', () => {
    // Fetch data from Google Sheets
    fetch('https://script.google.com/macros/s/AKfycby5ZOmIbknT-yougJd7ayYHjfw2wSfXwvPYjLqiF_sz7DeH8qugdPmyD8KUKEQrQ2O5/exec')
        .then(response => response.json())
        .then(data => {
            // Skip header row
            dataList = data.slice(1);
            displayEntry(currentIndex);
        })
        .catch(error => console.error('Error fetching data:', error));

    document.getElementById('nextButton').addEventListener('click', () => {
        if (currentIndex < dataList.length - 1) {
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
});

function displayEntry(index) {
    if (dataList.length > 0) {
        document.getElementById('name').textContent = `Name: ${dataList[index][0]}`;
        document.getElementById('email').textContent = `Email: ${dataList[index][1]}`;
        document.getElementById('message').textContent = `Message: ${dataList[index][2]}`;
    } else {
        document.getElementById('name').textContent = 'No data available';
        document.getElementById('email').textContent = '';
        document.getElementById('message').textContent = '';
    }
}
