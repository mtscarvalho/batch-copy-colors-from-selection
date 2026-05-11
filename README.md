# Copy color from frame

Quickly extract all color codes used in a selected frame.

## Features

- Extract multiple colors from any frame
- Copy HEX color codes instantly
- Simple and lightweight UI
- Built with TypeScript

---

## Getting Started

### 1. Install Node.js

Download and install Node.js (includes NPM):

https://nodejs.org/en/download/

---

### 2. Install Dependencies

Open the plugin folder in your terminal and run:

```bash
npm install
```

---

### 3. Start Development Mode

Run the TypeScript watcher:

```bash
npm run watch
```

This automatically recompiles the plugin whenever you save changes.

---

## Running the Plugin in Figma

1. Open Figma
2. Go to **Plugins → Development → Import Plugin from Manifest**
3. Select the `manifest.json` file from this project
4. Run the plugin from:
   - **Plugins → Development → Multi Color Extractor**

---

## Project Structure

```txt
├── code.ts        # Main plugin logic
├── code.js        # Compiled JavaScript
├── ui.html        # Plugin UI
├── manifest.json  # Figma plugin configuration
├── package.json
└── tsconfig.json
```

---

## Development Notes

This plugin uses:

- TypeScript
- Figma Plugin API
- NPM

Helpful resources:

- https://www.figma.com/plugin-docs/
- https://www.typescriptlang.org/

---

## License

MIT License
