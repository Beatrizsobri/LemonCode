const booking = { count: 3, price: 12.55 }
const product = { count: 3, price: 12.55, type: "ropa" };
const empleado = {
    bruto: 14500,
    hijos: 2,
    pagas: 14
};

////Calcular precio total////

const getTotal = (booking) => {
    const { count, price } = booking;

    const result = count > 0 ? count * price : 0
    return result
};

console.log(`Precio Total: ${getTotal(booking)} €`)

////Calcular el IVA////

const getVat = (product) => {
    const { type, price } = product;

    if (type === 'alimentacion') {
        return price * 0.1;
    }
    else if (type === 'libro') {
        return price * 0.04;
    }
    else {
        return price * 0.21;
    }
};

console.log(`IVA unitario: ${getVat(product)} €`)

const getVatWithSwitch = (product) => {
    const { type, price } = product;

    switch (type) {
        case 'alimentacion':
            return price * 0.1;
        case 'libro':
            return price * 0.04;
        default:
            return price * 0.21;
    }
};

console.log(`IVA unitario: ${getVatWithSwitch(product)} €`)

////Calcular sueldo neto en nómina////

const getNetSalary = (employee) => {
    let retention = 0

    if (employee.bruto < 12000) {
        retention = 0;
    } else if (employee.bruto > 12000 && employee.bruto < 24000) {
        retention = 0.08;
    } else if (employee.bruto > 24000 && employee.bruto < 34000) {
        retention = 0.16;
    } else {
        retention = 0.30;
    }

    if (employee.hijos > 0) {
        retention = retention - 0.02;
    }

    const netSalaryPerYear = employee.bruto - (employee.bruto * retention)

    const netSalaryPerMonth = Math.round(netSalaryPerYear / employee.pagas, -2);

    return netSalaryPerMonth;
}


console.log(`Salario neto: ${getNetSalary(empleado)} €`)

////Avanzado////

const getTotalVat = (product) => product.count > 0 ? product.count * getVat(product) : 0;

console.log(`IVA total: ${getTotalVat(product)} €`)

////Mostrar resultado por consola////

const printProductPrice = (product) => {
    const subtotal = getTotal(product);
    const vat = getTotalVat(product);
    const total = vat + subtotal;

    console.log("Subtotal:", subtotal + "€");
    console.log("IVA:", vat + "€");
    console.log("Total:", total + "€");
}

printProductPrice(product);
