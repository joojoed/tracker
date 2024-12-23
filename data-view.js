// Fetch data from the Google Sheet
fetch('https://script.google.com/macros/s/AKfycby2Wvn2BBCaqHFYCtWH91j6nGyl9E5hAYTPSyfAnEE5JtTitRAkMURDf6Z8x5CuTRbR/exec')
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
