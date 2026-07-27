/**
 * Revenue Audit Bot
 * Logger Module
 */

class Logger {

    constructor(logElement) {

        this.logElement = logElement;

    }

    write(type, message) {

        const time = new Date().toLocaleTimeString();

        const line = document.createElement("div");

        line.className = "log-" + type.toLowerCase();

        line.innerHTML = `<b>[${time}]</b> ${type} : ${message}`;

        this.logElement.appendChild(line);

        this.logElement.scrollTop = this.logElement.scrollHeight;

        console.log(`[${type}] ${message}`);

    }

    info(msg) {
        this.write("INFO", msg);
    }

    success(msg) {
        this.write("SUCCESS", msg);
    }

    warning(msg) {
        this.write("WARNING", msg);
    }

    error(msg) {
        this.write("ERROR", msg);
    }

}
