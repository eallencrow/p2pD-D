const { ipcRenderer } = require('electron');

document.getElementById("make-server")
    .addEventListener("click", () => {
        ipcRenderer.send('server-gen', 'ping');
    })
