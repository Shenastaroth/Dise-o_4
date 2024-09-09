document.getElementById('add-product-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Obtener los valores de los campos del formulario
    const name = document.getElementById('product-name').value;
    const price = document.getElementById('product-price').value;
    const description = document.getElementById('product-description').value;
    const imageInput = document.getElementById('product-image').files[0];

    // Usar FileReader para obtener la URL de la imagen
    const reader = new FileReader();
    reader.readAsDataURL(imageInput);

    reader.onload = function () {
        const imageURL = reader.result;

        // Crear un nuevo elemento de producto con la imagen
        const productItem = document.createElement('li');
        productItem.innerHTML = `
            <img src="${imageURL}" alt="${name}" style="width: 100px; height: 100px;">
            <h3>${name}</h3>
            <p>Precio: $${price}</p>
            <p>${description}</p>
        `;

        // Agregar el producto al listado
        document.getElementById('products').appendChild(productItem);

        // Limpiar el formulario
        document.getElementById('add-product-form').reset();
    };
});
