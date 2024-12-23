// Fetch data from the Google Sheet
fetch('https://script.google.com/macros/s/AKfycbyobuL4TqzTUKlk9YT65LFTJTqhqJ88vJdb7ulQtOUb2sBGb6EAC9pJ0haC_mAJCPZi/exec')
    
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
