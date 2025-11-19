document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;
    let erro = document.getElementById("erro");

    // DADOS DO LOGIN (você pode mudar)
    let user = "admin";
    let pass = "123";

    if (usuario === user && senha === pass) {
        window.location.href = "index.html";
    } else {
        erro.textContent = "Usuário ou senha incorretos!";
    }
});
