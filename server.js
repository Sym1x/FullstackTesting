const http = require("http");
const fs = require("fs");
const { calculatePower } = require("./math");

const PORT = 3000;

http.createServer((req, res) => {
    fs.readFile("input.txt", "utf8", (err, data) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            return res.end("Erreur lors de la lecture du fichier !");
        }

        // load file and get voltage and resistance
        const lines = data.split("\n");
        let voltage = null;
        let resistance = null;

        lines.forEach(line => {
            if (line.startsWith("Voltage="))
                voltage = parseFloat(line.split("=")[1]);
            if (line.startsWith("Resistance="))
                resistance = parseFloat(line.split("=")[1]);
        });

        let result;
        try {
            result = calculatePower(voltage, resistance);
        } catch (e) {
            res.writeHead(400, { "Content-Type": "text/html" });
            return res.end(`<h1>Erreur : ${e.message}</h1>`);
        }

        // html response
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`
            <h1>Calcul de puissance electrique</h1>
            <p><strong>Tension (V):</strong> ${voltage} volts</p>
            <p><strong>Resistance (R):</strong> ${resistance} ohms</p>
            <h2>Resultat: ${result} watts</h2>
        `);
    });
}).listen(PORT, () => {
    console.log(`Serveur en ecoute sur http://localhost:${PORT}`);
});
