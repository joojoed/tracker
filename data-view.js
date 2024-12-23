// Fetch data from the Google Sheet
fetch('YOUR_GOOGLE_SHEET_API_URL')
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
