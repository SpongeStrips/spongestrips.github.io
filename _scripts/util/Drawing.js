// design variables
const width = 960;
const textPadding = 30;
const lineHeight = 74;
const fontSizePx = 54;
const fontName = "Helvetica Neue";

// calculated variables (don't change)
const textWidth = width - (textPadding * 2);
const fontStr = fontSizePx.toString() + "px " + fontName;

export function createStrip(image, text) {
    // Create our canvas
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext('2d');
    canvas.width = width;
    ctx.font = fontStr; // we need to set this here for accurate wrapping calculations

    var y = 0;

    // Determine the final canvas size before drawing
    const imageHeight = image.height / image.width * width;
    const lines = getTextLines(ctx, text, textWidth);
    const textHeight = lines.length * lineHeight;
    canvas.height = imageHeight + textHeight + (textPadding * 2);

    // Fill in a white background
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw their image, scaled
    ctx.drawImage(image, 0, y, canvas.width, imageHeight);
    y += imageHeight + textPadding + fontSizePx;

    // Draw the text
    ctx.fillStyle = "#000";
    ctx.font = fontStr; // we need to re-set this because it seems to get cleared when the canvas resizes
    for (var line of lines) {
        ctx.fillText(line, textPadding, y, textWidth);
        y += lineHeight;
    }

    return canvas.toDataURL("image/jpeg");
};

// get the wrapped lines of text to draw
function getTextLines(context, text, maxWidth) {
    var words = text.split(' ');
    var line = '';
    var lines = [];

    for(var n = 0; n < words.length; n++) {
        var testLine = line + words[n] + ' ';
        var metrics = context.measureText(testLine);
        var testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
            lines.push(line);
            line = words[n] + ' ';
        } else {
            line = testLine;
        }
    }
    lines.push(line);
    return lines;
}