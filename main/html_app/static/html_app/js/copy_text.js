// html კოდის კოპირება
function copyCode() {
    let code = document.getElementById("codeBlock").innerText;
    navigator.clipboard.writeText(code).then(() => alert("კოდი დაკოპირდა!")).catch(err => console.error("შეცდომა კოპირებისას:", err));
}


// html კოდის კოპირება
function copyCode1() {
    let code = document.getElementById("codeBlock1").innerText;
    navigator.clipboard.writeText(code).then(() => alert("კოდი დაკოპირდა!")).catch(err => console.error("შეცდომა კოპირებისას:", err));
}