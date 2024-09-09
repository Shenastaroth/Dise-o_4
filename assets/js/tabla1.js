
$(document).ready(function() {
    $('#example').DataTable();
});

function addRow() {
    var table = $('#example').DataTable();
    var name = $('#name').val();
    var position = $('#position').val();
    var office = $('#office').val();
    var age = $('#age').val();
    var startDate = $('#star_date').val(); // Nota: Cambié 'star_date' a 'start_date'
    var salary = $('#salary').val();

    // Agregar una nueva fila con los datos proporcionados
    table.row.add([
        name,
        position,
        office,
        age,
        startDate,
        salary
    ]).draw(false);

    // Limpiar el formulario
    $('#form')[0].reset();
}
