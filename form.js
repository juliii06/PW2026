document.getElementById("cadastroForm")
.addEventListener("submit", function(event){

    event.preventDefault();

    const nome = document.getElementById("nome").value;

    alert("Usuário " + nome + " cadastrado com sucesso!");

});