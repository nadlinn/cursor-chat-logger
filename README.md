# Cursor Chat Logger

A VS Code extension that logs chat conversations from Cursor IDE, helping you keep track of your AI pair programming sessions.

## Features

- Automatically logs chat conversations from Cursor IDE
- Stores conversations with context (workspace, file, timestamp)
- View conversation history
- Resume previous conversations
- Exports logs to markdown files for easy reference

## Installation

1. Download the `.vsix` file from the latest release
2. Open VS Code
3. Go to Extensions view (Ctrl+Shift+X / Cmd+Shift+X)
4. Click on the "..." menu in the top-right
5. Select "Install from VSIX..." and choose the downloaded file

Or install it from the command line:
```bash
code --install-extension cursor-chat-logger-0.0.1.vsix
```

## Usage

The extension provides the following commands (access via Command Palette - Ctrl+Shift+P / Cmd+Shift+P):

- `Chat Logger: Start Logging` - Start logging chat conversations
- `Chat Logger: View Conversations` - View conversation history
- `Chat Logger: Resume Conversation` - Resume a previous conversation

Logs are stored in:
- Conversations: `~/Documents/cursor_chat_logs/conversations/`
- Daily logs: `~/Documents/cursor_chat_logs/`

## Configuration

The extension contributes the following settings:

- `cursorChatLogger.autoResume`: Enable/disable auto-resuming the last conversation

## Development

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- VS Code

### Setup

1. Clone the repository
```bash
git clone https://github.com/nadlinn/cursor-chat-logger.git
cd cursor-chat-logger
```

2. Install dependencies
```bash
npm install
```

3. Open in VS Code
```bash
code .
```

### Build and Run

- Press F5 to start debugging
- Run `npm run compile` to compile
- Run `npm run package` to create VSIX package

## License

MIT

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request 