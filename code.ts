figma.showUI(__html__, { width: 320, height: 420 });

type ColorItem = {
  hex: string;
  rgb: string;
};

function rgbToHex(r: number, g: number, b: number) {
  const to255 = (v: number) => Math.round(v * 255);
  return (
    "#" +
    [to255(r), to255(g), to255(b)]
      .map((x) => x.toString(16).padStart(2, "0"))
      .join("")
      .toUpperCase()
  );
}

function extractColors(node: SceneNode): ColorItem[] {
  const colors = new Map<string, ColorItem>();

  function walk(n: SceneNode) {
    if ("fills" in n && Array.isArray(n.fills)) {
      for (const fill of n.fills) {
        if (fill.type === "SOLID") {
          const { r, g, b } = fill.color;
          const hex = rgbToHex(r, g, b);

          colors.set(hex, {
            hex,
            rgb: `rgb(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(
              b * 255,
            )})`,
          });
        }
      }
    }

    if ("children" in n) {
      for (const child of n.children) {
        walk(child);
      }
    }
  }

  walk(node);
  return Array.from(colors.values());
}

const selection = figma.currentPage.selection;

if (selection.length !== 1 || selection[0].type !== "FRAME") {
  figma.ui.postMessage({
    type: "error",
    message: "Please select one frame before running the plugin.",
  });
} else {
  const colors = extractColors(selection[0]);

  figma.ui.postMessage({
    type: "colors",
    colors,
  });
}

figma.ui.onmessage = (msg) => {
  if (msg.type === "close") {
    figma.closePlugin();
  }
};
