// Ejemplo de código JavaScript para agregar filas a la tabla
document.addEventListener('DOMContentLoaded', function() {
    const tableBody = document.querySelector('.recent-orders tbody');

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
