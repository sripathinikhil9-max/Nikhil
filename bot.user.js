// ==UserScript==
// @name         Revenue Audit Bot
// @namespace    https://github.com/sripathinikhil9-max/RevenueAuditBot
// @version      1.0.0
// @description  Revenue Audit Automation
// @author       Nikhil + ChatGPT
// @match        https://www.appsheet.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    if (document.getElementById("raBotPanel")) return;

    let running = false;

    const panel = document.createElement("div");
    panel.id = "raBotPanel";

    panel.innerHTML = `
        <div id="raHeader">
            🤖 Revenue Audit Bot v1.0
        </div>

        <div class="row">
            <b>Status</b>
            <div id="raStatus">Waiting...</div>
        </div>

        <div class="row">
            <b>Current BL</b>
            <div id="currentBL">-</div>
        </div>

        <div class="row">
            <b>Progress</b>
            <div id="progress">0 / 0</div>
        </div>

        <div class="row">
            <b>Live Log</b>
            <div id="logBox"></div>
        </div>

        <div id="btnArea">
            <button id="startBot">START</button>
            <button id="stopBot">STOP</button>
        </div>
    `;

    document.body.appendChild(panel);

    const style = document.createElement("style");

    style.textContent = `
#raBotPanel{
position:fixed;
right:20px;
top:80px;
width:330px;
background:#202124;
color:white;
border-radius:10px;
box-shadow:0 0 15px rgba(0,0,0,.4);
z-index:999999;
font-family:Arial;
overflow:hidden;
}

#raHeader{
background:#1565c0;
padding:12px;
font-size:17px;
font-weight:bold;
cursor:move;
text-align:center;
}

.row{
padding:10px;
border-bottom:1px solid #444;
}

#logBox{
height:180px;
overflow:auto;
background:#111;
padding:8px;
font-size:12px;
}

#btnArea{
display:flex;
justify-content:space-around;
padding:12px;
}

button{
padding:8px 18px;
border:none;
border-radius:6px;
cursor:pointer;
font-weight:bold;
}

#startBot{
background:#2e7d32;
color:white;
}

#stopBot{
background:#c62828;
color:white;
}
`;

    document.head.appendChild(style);

    function log(msg){
        const box=document.getElementById("logBox");
        const t=new Date().toLocaleTimeString();
        box.innerHTML += "["+t+"] "+msg+"<br>";
        box.scrollTop=box.scrollHeight;
    }

    function status(text){
        document.getElementById("raStatus").innerText=text;
    }

    log("Bot Loaded");
    log("Waiting for Start");

    document.getElementById("startBot").onclick=()=>{
        if(running)return;
        running=true;
        status("Running");
        log("Start Clicked");
    };

    document.getElementById("stopBot").onclick=()=>{
        running=false;
        status("Stopped");
        log("Bot Stopped");
    };

})();
