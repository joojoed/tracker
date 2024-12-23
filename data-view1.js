let currentIndex = 0;
let dataList = [];

document.addEventListener('DOMContentLoaded', () => {
    // Fetch data from Google Sheets
    fetch('YOUR_GOOGLE_SHEET_API_URL')
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
