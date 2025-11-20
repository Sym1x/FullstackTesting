function calculatePower(voltage, resistance) {
    if (resistance === 0) {
        throw new Error("La resistance ne peut pas être 0 (division impossible)");
    }
    return (voltage ** 2) / resistance;
}

module.exports = { calculatePower };
