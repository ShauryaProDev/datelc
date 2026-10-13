import { app, BrowserWindow, screen, Menu } from "electron";
import path from "path";

function createWindow() {
  const primaryDisplay = screen.getPrimaryDisplay();
  Menu.setApplicationMenu(null);

  const win = new BrowserWindow({
    width: primaryDisplay.workAreaSize.width * 0.8,
    height: primaryDisplay.workAreaSize.height * 0.8,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  win.loadFile(path.join(app.getAppPath(), "/dist-react/index.html"));
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});
