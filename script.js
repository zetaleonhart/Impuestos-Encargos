function calculate() {
    const product = document.getElementById("product").value;
    const price = parseFloat(document.getElementById("price").value);
    const weight = parseFloat(document.getElementById("weight").value);

    const tax = price * 0.07;
    const serviceFee = price * 0.04;

    let shippingCost = 0;
    if (weight > 0 && weight <= 0.5) {
        shippingCost = 10;
    } else {
        shippingCost = Math.ceil(weight) * 20;
    }

    const total = price + tax + serviceFee + shippingCost;

    const result = `
        Producto: ${product} <br>
        Precio: $${price.toFixed(2)} <br>
        Tax: $${tax.toFixed(2)} <br>
        Servicio: $${serviceFee.toFixed(2)} <br>
        Costo de envío: $${shippingCost.toFixed(2)} <br>
        Total: $${total.toFixed(2)} <br>
        <p>Sígueme <a href="https://www.instagram.com/zmencargos" target="_blank">www.instagram.com/zmencargos</a></p>
    `;

    document.getElementById("result").innerHTML = result;
}
