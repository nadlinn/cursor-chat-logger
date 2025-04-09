import * as vscode from 'vscode';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
  const logDir = path.join(os.homedir(), 'Documents', 'cursor_chat_logs');
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
  }

  const logFile = path.join(logDir, `${new Date().toISOString().slice(0, 10)}.txt`);

  const disposable = vscode.commands.registerCommand('chatLogger.startLogging', () => {
    vscode.window.showInformationMessage('Cursor Chat Logger is active!');

    vscode.workspace.onDidChangeTextDocument(event => {
      const content = event.contentChanges.map(c => c.text).join('\n');
      const logEntry = `\n---\n[${new Date().toLocaleTimeString()}] ${content}`;
      fs.appendFileSync(logFile, logEntry);
    });
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
