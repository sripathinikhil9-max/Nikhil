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

    <div id="titleArea">
        🤖 Revenue Audit Bot
        <span id="version">v2.0</span>
    </div>

    <div id="windowButtons">
        <span id="minBtn">─</span>
        <span id="closeBtn">✕</span>
    </div>

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

    // =====================
// DRAG WINDOW
// =====================

(function makeDraggable() {

    const header = document.getElementById("raHeader");

    let dragging = false;
    let offsetX = 0;
    let offsetY = 0;

    header.addEventListener("mousedown", function (e) {

        dragging = true;

        offsetX = e.clientX - panel.offsetLeft;
        offsetY = e.clientY - panel.offsetTop;

        document.body.style.userSelect = "none";

    });

    document.addEventListener("mousemove", function (e) {

        if (!dragging) return;

        panel.style.left = (e.clientX - offsetX) + "px";
        panel.style.top = (e.clientY - offsetY) + "px";
        panel.style.right = "auto";

    });

    document.addEventListener("mouseup", function () {

        dragging = false;

        document.body.style.userSelect = "";

    });

})();

    const style = document.createElement("style");

    style.textContent = `
#raBotPanel{
position:fixed;
left:calc(100vw - 360px);
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

display:flex;

justify-content:space-between;

align-items:center;

background:#1565c0;

padding:10px 14px;

cursor:move;

font-weight:bold;

font-size:16px;

}

#titleArea{

display:flex;

align-items:center;

gap:8px;

}

#version{

font-size:11px;

background:#0d47a1;

padding:2px 6px;

border-radius:10px;

}

#windowButtons{

display:flex;

gap:14px;

font-size:18px;

cursor:pointer;

}

#windowButtons span{

padding:2px 8px;

border-radius:6px;

}

#windowButtons span:hover{

background:rgba(255,255,255,.2);

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


      
