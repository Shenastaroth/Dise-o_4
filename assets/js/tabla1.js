document.addEventListener('DOMContentLoaded', function() {
    const tableBody = document.querySelector('.recent-orders tbody');
    console.log('Table body:', tableBody); // Verifica si el selector está devolviendo el elemento correcto

    const rows = [
        ['Juan', 'Pérez', 'juanperez', 'España'],
        ['Maria', 'García', 'mariagarcia', 'Argentina']
    ];

    rows.forEach(row => {
        const tr = document.createElement('tr');
        row.forEach(cell => {
            const td = document.createElement('td');
            td.textContent = cell;
            tr.appendChild(td);
        });
        tableBody.appendChild(tr);
    });
});
