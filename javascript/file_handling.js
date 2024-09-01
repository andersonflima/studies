// File Handling in JavaScript (Browser)

// Writing to a file is not applicable in a browser environment, 
// but you can download content as a file.

function download(content, fileName, contentType) {
    const a = document.createElement("a");
    const file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

download('Hello, world!\n', 'example.txt', 'text/plain');

// Reading from a file in the browser can be done using the File API (not covered here).
