const fs = require("fs");
const path = require("path");

const SRC = path.join(__dirname, "src");
const OUT = path.join(__dirname, "release", "RevenueAuditBot.user.js");

const header = `// ==UserScript==
// @name         Revenue Audit Bot
// @namespace    https://github.com/sripathinikhil9-max/RevenueAuditBot
// @version      2.0.0
// @description  Revenue Audit Automation
// @author       Nikhil + ChatGPT
// @match        https://www.appsheet.com/*
// @grant        none
// ==/UserScript==

(function () {
'use strict';

`;

const footer = `

})();
`;

const order = [
    "utils.js",
    "logger.js",
    "storage.js",
    "timer.js",
    "progress.js",
    "ui.js",
    "appsheet.js",
    "search.js",
    "report.js",
    "remarks.js",
    "workflow.js",
    "main.js"
];

let output = header;

for (const file of order) {

    const filePath = path.join(SRC, file);

    if (!fs.existsSync(filePath)) {

        console.log("Missing:", file);

        continue;

    }

    output += "\n\n";
    output += "// ===== " + file + " =====\n\n";
    output += fs.readFileSync(filePath, "utf8");

}

output += footer;

fs.writeFileSync(OUT, output);

console.log("Build Complete!");
