// Fetch data from the Google Sheet
fetch('https://script.google.com/macros/s/AKfycby5ZOmIbknT-yougJd7ayYHjfw2wSfXwvPYjLqiF_sz7DeH8qugdPmyD8KUKEQrQ2O5/exec')
    
    .then(response => response.json())
    .then(data => {
        const tableBody = document.getElementById('data-table-body');
        data.forEach(row => {
            const tr = document.createElement('tr');
            row.forEach(cell => {
                const td = document.createElement('td');
                td.textContent = cell;
                tr.appendChild(td);
            });
            tableBody.appendChild(tr);
        });
    });
