document.addEventListener('DOMContentLoaded', () => {
    const Orders = [
        { productName: 'Producto A', productNumber: '54321', paymentStatus: 'Pagado', status: 'Completed' },
        { productName: 'Producto B', productNumber: '98765', paymentStatus: 'Pendiente', status: 'Pending' }
    ];

    Orders.forEach(order => {
        const tr = document.createElement('tr');
        const trContent = `
            <td>${order.productName}</td>
            <td>${order.productNumber}</td>
            <td>${order.paymentStatus}</td>
            <td class="${order.status === 'Declined' ? 'danger' : order.status === 'Pending' ? 'warning' : 'primary'}">${order.status}</td>
            <td class="primary">Detalles</td>
        `;
        tr.innerHTML = trContent;
        const tbody = document.querySelector('table tbody');
        if (tbody) {
            tbody.appendChild(tr);
        } else {
            console.error('No se encontró el elemento <tbody>.');
        }
    });
});
