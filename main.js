const precioCamisetaBoca = 12;
const precioCamisetaRiver = 14;
let ventasBoca = [];
let ventasRiver = [];


function agregarVenta(camiseta, cantidad) {
    if (camiseta == 'River') {
        ventasRiver.push(cantidad);
        console.log(`Se vendio la cantidad de ${cantidad} camisetas de River.`);
    } else if (camiseta == 'Boca') {
        ventasBoca.push(cantidad);
        console.log(`Se vendio la cantidad de ${cantidad} camisetas de Boca.`);
    } else {
        alert("No tenemos stock de esa camiseta");
        console.log("No hay stock de esa camiseta en esta tienda.");
    }
}
 

function procesarVentas() {
    let continuar = true;
    while (continuar) {
        let color = prompt("Introduce el equipo de la camiseta que quieres (River, Boca o Velez):");
        if (color == null) break;
        
        let cantidad = parseInt(prompt("Cuantas camisetas vas a querer de " + color + ":"));
        if (isNaN(cantidad) || cantidad <= 0) {
            alert("Cantidad no válida. Por favor, intentalo de nuevo con otro monto.");
            console.log("Hubo un intento de vender una cantidad no valida de: " + cantidad);
        } else {
            agregarVenta(color, cantidad);
        }

        continuar = confirm("¿Queres hacer otra compra por alguna camiseta?");
    }

    mostrarResultados();
}

procesarVentas();


function calcularTotalVentas(ventas, precio) {
    let total = 0;
    for (let i = 0; i < ventas.length; i++) {
        total += ventas[i] * precio;
    }
    return total;
}
 

function mostrarResultados() {
    let totalRiver = calcularTotalVentas(ventasRiver, precioCamisetaRiver);
    let totalBoca = calcularTotalVentas(ventasBoca, precioCamisetaBoca);
    let mensaje = "Cantidad de camisetas de River vendidas: " + ventasRiver.reduce((a, b) => a + b, 0) + "\n" +
                  "Cantidad de camisetas de Boca vendidas: " + ventasBoca.reduce((a, b) => a + b, 0) + "\n" +
                  "Total de ventas de camisetas de River: $" + totalRiver.toFixed(2) + "\n" +
                  "Total de ventas de camisetas de Boca: $" + totalBoca.toFixed(2) + "\n" +
                  "Total general de camisetas vendidas: $" + (totalRiver + totalBoca).toFixed(2);
    alert(mensaje);
    console.log(mensaje);
}



