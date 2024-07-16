const precioCamisetaBoca = 12;
const precioCamisetaRiver = 14;
let ventas = JSON.parse(localStorage.getItem('ventas')) || [];

function agregarVenta(camiseta, cantidad) {
    ventas.push({ camiseta, cantidad });
    localStorage.setItem('ventas', JSON.stringify(ventas));
    mostrarMensaje(`Se vendieron ${cantidad} camisetas de ${camiseta}.`);
}

function calcularTotalVentas(ventas, equipo) {
    return ventas
        .filter(venta => venta.camiseta === equipo)
        .reduce((total, venta) => total + venta.cantidad * (equipo === 'River' ? precioCamisetaRiver : precioCamisetaBoca), 0);
}

function mostrarResultados() {
    const totalRiver = calcularTotalVentas(ventas, 'River');
    const totalBoca = calcularTotalVentas(ventas, 'Boca');
    const cantidadRiver = ventas.filter(venta => venta.camiseta === 'River').reduce((acc, venta) => acc + venta.cantidad, 0);
    const cantidadBoca = ventas.filter(venta => venta.camiseta === 'Boca').reduce((acc, venta) => acc + venta.cantidad, 0);

    const mensaje = `
        Cantidad de camisetas de River vendidas: ${cantidadRiver}
        Cantidad de camisetas de Boca vendidas: ${cantidadBoca}
        Total de ventas de camisetas de River: $${totalRiver.toFixed(2)}
        Total de ventas de camisetas de Boca: $${totalBoca.toFixed(2)}
        Total general de camisetas vendidas: $${(totalRiver + totalBoca).toFixed(2)}
    `;

    document.getElementById('resultados').innerText = mensaje;
}

function mostrarMensaje(mensaje) {
    const mensajesDiv = document.getElementById('mensajes');
    const mensajeElemento = document.createElement('p');
    mensajeElemento.innerText = mensaje;
    mensajesDiv.appendChild(mensajeElemento);
}


document.getElementById('agregarVenta').addEventListener('click', () => {
    const equipo = document.getElementById('equipo').value;
    const cantidad = parseInt(document.getElementById('cantidad').value);

    if (!isNaN(cantidad) && cantidad > 0) {
        agregarVenta(equipo, cantidad);
    } else {
        mostrarMensaje('Cantidad no válida. Por favor, inténtalo de nuevo.');
    }
});

document.getElementById('mostrarResultados').addEventListener('click', mostrarResultados);


