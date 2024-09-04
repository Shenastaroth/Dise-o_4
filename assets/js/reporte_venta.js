document.addEventListener('DOMContentLoaded', function () {
    const reportTableBody = document.getElementById('report-table-body');

    if (reportTableBody) {  
        const reporteData = JSON.parse(localStorage.getItem('reporteData')) || [];

        reportTableBody.innerHTML = '';

        reporteData.forEach(sale => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${sale.firstName}</td>
                <td>${sale.lastName}</td>
                <td>${sale.username}</td>
                <td>${sale.country}</td>
                <td>${sale.email}</td>
                <td>${sale.purchaseDate}</td>
                <td>${sale.amount}</td>
            `;
            reportTableBody.appendChild(row);
        });
    }
});
