document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "admin" && pass === "1234") {
        localStorage.setItem("logado", "true");
        window.location.href = "index.html";
    } else {
        alert("Usuário ou senha incorretos!");
    }
});

// Bloqueia acesso se tentar abrir o site sem login
if (window.location.pathname.includes("index.html")) {
    if (localStorage.getItem("logado") !== "true") {
        window.location.href = "login.html";
    }
}
