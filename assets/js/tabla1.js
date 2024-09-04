document.addEventListener('DOMContentLoaded', function () {
    const ventasTableBody = document.querySelector('#ventas-table-body');
    const ventaForm = document.querySelector('#venta-form');

    // Función para cargar datos desde localStorage y mostrarlos en la tabla
    function loadData() {
        const storedData = localStorage.getItem('ventasData');
        if (storedData) {
            const datosVentas = JSON.parse(storedData);
            ventasTableBody.innerHTML = ''; // Limpiar la tabla existente
            datosVentas.forEach((data, index) => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${data.firstName}</td>
                    <td>${data.lastName}</td>
                    <td>${data.username}</td>
                    <td>${data.country}</td>
                    <td>${data.email}</td>
                    <td>${data.purchaseDate}</td>
                    <td>${data.amount}</td>
                    <td>
                        <button class="edit-btn" data-index="${index}">Editar</button>
                        <button class="delete-btn" data-index="${index}">Eliminar</button>
                    </td>
                `;
                ventasTableBody.appendChild(tr);
            });
        }
    }

    // Función para actualizar el localStorage después de un cambio en la tabla
    function updateLocalStorage() {
        const rows = ventasTableBody.querySelectorAll('tr');
        const updatedData = Array.from(rows).map(row => {
            return {
                firstName: row.cells[0].textContent,
                lastName: row.cells[1].textContent,
                username: row.cells[2].textContent,
                country: row.cells[3].textContent,
                email: row.cells[4].textContent,
                purchaseDate: row.cells[5].textContent,
                amount: row.cells[6].textContent
            };
        });
        localStorage.setItem('ventasData', JSON.stringify(updatedData));
    }

    // Evento para agregar una nueva venta
    ventaForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const newSale = {
            firstName: document.querySelector('#first-name').value,
            lastName: document.querySelector('#last-name').value,
            username: document.querySelector('#username').value,
            country: document.querySelector('#country').value,
            email: document.querySelector('#email').value,
            purchaseDate: document.querySelector('#purchase-date').value,
            amount: document.querySelector('#amount').value
        };

        const datosVentas = JSON.parse(localStorage.getItem('ventasData')) || [];
        datosVentas.push(newSale);
        localStorage.setItem('ventasData', JSON.stringify(datosVentas));

        loadData(); // Recargar la tabla después de agregar
        ventaForm.reset(); // Limpiar el formulario
    });

    // Evento para eliminar una fila
    ventasTableBody.addEventListener('click', function (e) {
        if (e.target.classList.contains('delete-btn')) {
            const index = e.target.getAttribute('data-index');
            let datosVentas = JSON.parse(localStorage.getItem('ventasData'));
            datosVentas.splice(index, 1); // Eliminar el elemento del array
            localStorage.setItem('ventasData', JSON.stringify(datosVentas));
            loadData(); // Recargar la tabla después de eliminar
        }
    });

    // Evento para editar una fila
    ventasTableBody.addEventListener('click', function (e) {
        if (e.target.classList.contains('edit-btn')) {
            const index = e.target.getAttribute('data-index');
            let datosVentas = JSON.parse(localStorage.getItem('ventasData'));

            const updatedSale = prompt("Ingresa los nuevos datos en formato: Nombre, Apellido, Usuario, País, Email, Fecha, Monto", `${datosVentas[index].firstName},${datosVentas[index].lastName},${datosVentas[index].username},${datosVentas[index].country},${datosVentas[index].email},${datosVentas[index].purchaseDate},${datosVentas[index].amount}`);
            
            if (updatedSale) {
                const [firstName, lastName, username, country, email, purchaseDate, amount] = updatedSale.split(",");
                datosVentas[index] = { firstName, lastName, username, country, email, purchaseDate, amount };
                localStorage.setItem('ventasData', JSON.stringify(datosVentas));
                loadData(); // Recargar la tabla después de editar
            }
        }
    });

    // Cargar datos al cargar la página
    loadData();
});
