// LanScript Website JavaScript

console.log("Welcome to LanScript!");

function copyCode() {
    const code = document.getElementById("code-example").innerText;

    navigator.clipboard.writeText(code);

    const button = document.getElementById("copy-button");
    button.innerText = "Copied!";

    setTimeout(() => {
        button.innerText = "Copy Code";
    }, 2000);
}

function showMessage() {
    alert("Welcome to LanScript! Start building with simple code.");
}
