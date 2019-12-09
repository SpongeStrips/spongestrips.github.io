export function setupAutoTextareas() {
    // adapted from https://stackoverflow.com/a/25621277

    // get all textareas
    const textAreas = document.getElementsByTagName('textarea');
    // iterate over them
    for (var tx of textAreas) {
        // add initial CSS for auto-resizing
        tx.setAttribute('style', 'height:' + (tx.scrollHeight) + 'px;overflow-y:hidden;resize:none;');

        // listen for changes to text
        tx.addEventListener("input", () => {
            // set to auto first to get size
            tx.style.height = 'auto';
            // then set height to the determined scrollable height
            tx.style.height = (tx.scrollHeight) + 'px';
        }, false);
    }
}