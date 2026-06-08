# Batch copy colors from selection

Quickly extract every unique solid fill color from your Figma selection.

Select a **frame, group, component, instance, section, or multiple layers**, and the plugin automatically scans your selection to generate a clean list of unique colors. Switch between **HEX** and **RGB** formats, then copy individual colors or the entire palette with a single click.

Perfect for creating design systems, auditing files, documenting palettes, or sharing colors with developers.

![Batch copy colors from selection](https://i.ibb.co/HfHZvds0/batch-copy-colors-from-selection.png)

## Features

- 🎨 Extract unique solid fill colors from any selection
- 📦 Supports frames, groups, components, instances, sections, and multiple layers
- 🔄 Automatically updates when your selection changes
- 🔢 View colors in **HEX** or **RGB**
- 📋 Copy individual colors or the entire palette
- ⚡ Fast, lightweight, and easy to use

## Getting started

### 1. Install Node.js

Download and install Node.js (includes NPM):

https://nodejs.org/en/download/



### 2. Install dependencies

Open the project folder in your terminal and run:

```bash
npm install
````

### 3. Start development mode

Run the TypeScript watcher:

```bash
npm run watch
```

The plugin will automatically recompile whenever you save changes.

## Running the plugin in Figma

1. Open **Figma**
2. Go to **Plugins → Development → Import Plugin from Manifest**
3. Select the project's `manifest.json`
4. Run the plugin from:

* **Plugins → Development → Multi Color Extractor**

## Project structure

```text
├── code.ts        # Main plugin logic
├── code.js        # Compiled JavaScript
├── ui.html        # Plugin interface
├── manifest.json  # Plugin configuration
├── package.json
└── tsconfig.json
```


## Built with

* TypeScript
* Figma Plugin API
* NPM

## Use Cases

* Creating design systems
* Auditing existing design files
* Documenting color palettes
* Sharing colors with developers
* Inspecting UI libraries
* Extracting colors from complex selections

## Useful Resources

* Figma Plugin API: https://www.figma.com/plugin-docs/
* TypeScript: https://www.typescriptlang.org/



## License

MIT License

```
```
