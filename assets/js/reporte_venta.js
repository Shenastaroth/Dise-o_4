document.addEventListener('DOMContentLoaded', function() {
    const ventasTableBody = document.querySelector('#ventas-table tbody');
    const loadDataButton = document.querySelector('#load-data');

    // Función para almacenar datos en localStorage
    function storeData() {
        const datosVentas = [
            { firstName: 'John', lastName: 'Doe', username: 'johndoe', country: 'USA', email: 'johndoe@example.com', purchaseDate: '2024-09-01', amount: '$1200' },
            { firstName: 'Jane', lastName: 'Smith', username: 'janesmith', country: 'Canada', email: 'janesmith@example.com', purchaseDate: '2024-09-02', amount: '$850' }
            // Puedes agregar más datos aquí
        ];

        localStorage.setItem('ventasData', JSON.stringify(datosVentas));
    }

    // Función para cargar datos desde localStorage y mostrarlos en la tabla
    function loadData() {
        const storedData = localStorage.getItem('ventasData');
        if (storedData) {
            const datosVentas = JSON.parse(storedData);
            ventasTableBody.innerHTML = ''; // Limpiar la tabla existente
            datosVentas.forEach(data => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${data.firstName}</td>
                    <td>${data.lastName}</td>
                    <td>${data.username}</td>
                    <td>${data.country}</td>
                    <td>${data.email}</td>
                    <td>${data.purchaseDate}</td>
                    <td>${data.amount}</td>
                `;
                ventasTableBody.appendChild(tr);
            });
        }
    }

    // Almacenar datos al cargar la página por primera vez
    if (!localStorage.getItem('ventasData')) {
        storeData();
    }

    // Cargar datos cuando se haga clic en el botón
    loadDataButton.addEventListener('click', loadData);
});
