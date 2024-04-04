document.addEventListener('DOMContentLoaded', function() {
    const opcoesPagamento = document.getElementById('opcoes-pagamento');
    const adicionarCartaoBtn = document.getElementById('adicionar-cartao');
    const alterarFotoBtn = document.getElementById('alterar-foto');
    const salvarBtn = document.getElementById('salvar');
    const voltarBtn = document.getElementById('voltar');
    const fotoPerfil = document.getElementById('foto');
    const inputFoto = document.getElementById('input-foto');
  
    adicionarCartaoBtn.addEventListener('click', function() {
      const novoCartao = document.createElement('li');
      novoCartao.innerHTML = `
        <img src="visa.png" alt="Visa">
        <span>**** **** **** 4321</span>
      `;
      opcoesPagamento.appendChild(novoCartao);
    });
  
    alterarFotoBtn.addEventListener('click', function() {
      inputFoto.click();
    });
  
    inputFoto.addEventListener('change', function() {
      const file = inputFoto.files[0];
      const reader = new FileReader();
      reader.onload = function(e) {
        fotoPerfil.src = e.target.result;
      };
      reader.readAsDataURL(file);
    });
  
    salvarBtn.addEventListener('click', function() {
      alert('Alterações salvas com sucesso!');
    });
  
    voltarBtn.addEventListener('click', function() {
      window.history.back();
    });
  });
  