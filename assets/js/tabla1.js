document.getElementById('add-btn').addEventListener('click', function () {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const username = document.getElementById('username').value;

    if (firstName && lastName && username) {
        addRowToTable(firstName, lastName, username);
        saveDataToLocalStorage(firstName, lastName, username);
        clearForm();
    }
});

function addRowToTable(firstName, lastName, username) {
    const tableBody = document.getElementById('sales-table-body');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${username}</td>
        <td>
            <button class="edit-btn">Editar</button>
            <button class="delete-btn">Eliminar</button>
        </td>
    `;

    // Botón para editar
    row.querySelector('.edit-btn').addEventListener('click', function () {
        editRow(this);
    });

    // Botón para eliminar
    row.querySelector('.delete-btn').addEventListener('click', function () {
        deleteRow(this);
    });

    tableBody.appendChild(row);
}

function editRow(button) {
    const row = button.closest('tr');
    const firstName = row.children[0].textContent;
    const lastName = row.children[1].textContent;
    const username = row.children[2].textContent;

    document.getElementById('first-name').value = firstName;
    document.getElementById('last-name').value = lastName;
    document.getElementById('username').value = username;

    // Remueve la fila para reemplazarla
    row.remove();
}

function deleteRow(button) {
    const row = button.closest('tr');
    row.remove();
}

function saveDataToLocalStorage(firstName, lastName, username) {
    const salesData = JSON.parse(localStorage.getItem('salesData')) || [];
    salesData.push({ firstName, lastName, username });
    localStorage.setItem('salesData', JSON.stringify(salesData));
}

function clearForm() {
    document.getElementById('first-name').value = '';
    document.getElementById('last-name').value = '';
    document.getElementById('username').value = '';
}

