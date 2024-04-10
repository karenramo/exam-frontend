document.addEventListener('DOMContentLoaded', () => {
    // URL de la API
    const apiUrl = 'http://localhost:5296';

    // Función para obtener y mostrar los clientes
    const getCustomers = async () => {
        try {
            const response = await fetch(`${apiUrl}/customer`);
            const customers = await response.json();

            const customerList = document.querySelectorAll('#customer-list');
            customerList.forEach(list => list.innerHTML = ''); // Limpiar la lista antes de agregar nuevos elementos

            customers.forEach(customer => {
                const li = document.createElement('li');
                li.textContent = `${customer.id}: ${customer.name}`;
                customerList[0].appendChild(li);
            });
        } catch (error) {
            console.error('Error al obtener clientes:', error);
        }
    };

    // Función para obtener y mostrar los productos
    const getProducts = async () => {
        try {
            const response = await fetch(`${apiUrl}/product`);
            const products = await response.json();

            const productList = document.getElementById('product-list');
            productList.innerHTML = ''; // Limpiar la lista antes de agregar nuevos elementos

            products.forEach(product => {
                const li = document.createElement('li');
                li.textContent = `${product.id}: ${product.name}`;
                productList.appendChild(li);
            });
        } catch (error) {
            console.error('Error al obtener productos:', error);
        }
    };

    // Llamar a las funciones para cargar los clientes y productos al cargar la página
    getCustomers();
    getProducts();
});