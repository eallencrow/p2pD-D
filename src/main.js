const { app, BrowserWindow, ipcMain } = require('electron');

let mainWin;

app.on('ready', () => {
    mainWin = new BrowserWindow({
        show: false,
    });

    mainWin.loadURL(`file://${__dirname}/app/index.html`);

    mainWin.once('ready-to-show', () => {
        mainWin.show();
    })

    mainWin.on('closed', () => {
        mainWin = null
    })
});

app.on('window-all-closed', () => {
    app.quit()
});

ipcMain.on('server-gen', (event, arg) => {
    console.log(arg)
})