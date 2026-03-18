function calcularIdade() {
  let nome = document.getElementById("nome").value;
  let nascimento = parseInt(document.getElementById("nascimento").value);

  let anoAtual = new Date().getFullYear();
  let idade = anoAtual - nascimento;

  document.getElementById("resultado").innerText =
    "Olá " + nome + ", você tem " + idade + " anos.";
}