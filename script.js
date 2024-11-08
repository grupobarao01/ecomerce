// Carregar o carrinho do localStorage
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
let total = carrinho.reduce(
  (acc, item) => acc + item.preco * item.quantidade,
  0,
);

// Dados do estoque dos produtos
const estoqueProdutos = {
  1: 40, // Produto 1
  2: 41, // Produto 2
  3: 42, // Produto 3
  4: 43,
  5: 44,
  6: 45,
  7: 46, // Produto 1
  8: 47, // Produto 2
  9: 48, // Produto 3
  10: 49,
  11: 30,
  12: 31,
  13: 32, // Produto 1
  14: 33, // Produto 2
  15: 34, // Produto 3
  16: 35,
  17: 36,
  18: 37,
  19: 38, // Produto 1
  20: 39, // Produto 2
  21: 20, // Produto 3
  22: 21,
  23: 22,
  24: 23,
  25: 24, // Produto 1
  26: 25, // Produto 2
  27: 26, // Produto 3
  28: 27,
  29: 28,
  30: 29,
  31: 19, // Produto 1
  32: 18, // Produto 2
  33: 17, // Produto 3
  34: 16,
  35: 15,
  36: 14,
  37: 13, // Produto 1
  38: 12, // Produto 2
  39: 11, // Produto 3
  40: 10,
  41: 9,
  42: 8,
  43: 7, // Produto 1
  44: 6, // Produto 2
  45: 5, // Produto 3
  46: 4,
  47: 3,
  48: 2,
  49: 1,

};

// Função para salvar o carrinho no localStorage
function salvarCarrinho() {
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  atualizarQuantidadeCarrinho();
}

// Função para adicionar um item ao carrinho
function adicionarAoCarrinho(nomeProduto, preco, produtoId) {
  const produtoExistente = carrinho.find((item) => item.nome === nomeProduto);
  const estoqueAtual = estoqueProdutos[produtoId];

  if (estoqueAtual > 0) {
    if (produtoExistente) {
      produtoExistente.quantidade++;
    } else {
      carrinho.push({ nome: nomeProduto, preco: preco, quantidade: 1 });
    }

    estoqueProdutos[produtoId]--;
    atualizarEstoque(produtoId);
    total += preco;
    salvarCarrinho();
    // alert('Produto adicionado ao carrinho!');
  } else {
    alert('Produto esgotado!');
  }
}

// Função para atualizar a exibição do estoque e desativar botão se o estoque acabar
function atualizarEstoque(produtoId) {
  const estoqueElemento = document.getElementById(`estoque-produto-${produtoId}`);
  const botaoElemento = document.getElementById(`btn-produto-${produtoId}`);

  if (estoqueElemento) {
    estoqueElemento.textContent = `Estoque: ${estoqueProdutos[produtoId]}`;
  }

  if (botaoElemento) {
    if (estoqueProdutos[produtoId] === 0) {
      botaoElemento.disabled = true;
      botaoElemento.textContent = 'Esgotado';
    } else {
      botaoElemento.disabled = false;
      botaoElemento.textContent = 'Adicionar ao Carrinho';
    }
  }
}


// Função para filtrar os produtos na pesquisa
function filtrarProdutos() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const produtos = document.querySelectorAll('.produto');

  produtos.forEach((produto) => {
    const nomeProduto = produto.getAttribute('data-nome').toLowerCase();
    if (nomeProduto.includes(input)) {
      produto.style.display = 'block';
    } else {
      produto.style.display = 'none';
    }
  });
}

// Função para remover um item do carrinho
function removerDoCarrinho(nomeProduto) {
  const produto = carrinho.find((item) => item.nome === nomeProduto);
  if (produto) {
    if (produto.quantidade > 1) {
      // Apenas diminui a quantidade se mais de um item estiver no carrinho
      produto.quantidade--;
      total -= produto.preco;
    } else {
      // Remove o item se a quantidade for 1
      const produtoIndex = carrinho.indexOf(produto);
      carrinho.splice(produtoIndex, 1);
      total -= produto.preco * produto.quantidade;
    }
    salvarCarrinho();
    atualizarCarrinho();
  }
}

// Função para ajustar a quantidade de um item no carrinho
function ajustarQuantidade(nomeProduto, novaQuantidade) {
  const produto = carrinho.find((item) => item.nome === nomeProduto);
  if (produto) {
    total -= produto.preco * produto.quantidade; // Subtrair o total anterior
    produto.quantidade = novaQuantidade;
    total += produto.preco * produto.quantidade; // Adicionar o novo total
    salvarCarrinho();
    atualizarCarrinho();
  }
}

// Função para atualizar o carrinho na tela do carrinho.html
function atualizarCarrinho() {
  const listaCarrinho = document.getElementById('listaCarrinho');
  const totalElemento = document.getElementById('total');

  if (listaCarrinho && totalElemento) {
    listaCarrinho.innerHTML = '';
    carrinho.forEach((item) => {
      const li = document.createElement('li');
      li.innerHTML = `
                ${item.nome} - R$ ${item.preco.toFixed(2)} x ${item.quantidade}
                <button onclick="removerDoCarrinho('${
                  item.nome
                }')" class="btn btn-danger">Remover</button>
            `;

      listaCarrinho.appendChild(li);
    });
    totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`;
  }
}

// Função para finalizar a compra
function finalizarCompra() {
  if (carrinho.length === 0) {
    alert('Seu carrinho está vazio!');
    return;
  }

  const modal = new bootstrap.Modal(
    document.getElementById('ExemploModalCentralizado'),
  );
  modal.show();

  // alert('Compra finalizada! Obrigado pela preferência.');
  carrinho = [];
  total = 0;
  salvarCarrinho();
  atualizarCarrinho();
}

const btnPix = document.getElementById('pix');
btnPix.addEventListener('click', formaPagamento);
const btnCredito = document.getElementById('credito');
btnPix.addEventListener('click', formaPagamento);
const btnBoleto = document.getElementById('boleto');
btnPix.addEventListener('click', formaPagamento);

function formaPagamento() {
  const modal = bootstrap.Modal.getInstance(
    document.getElementById('ExemploModalCentralizado'),
  );
  if (modal) {
    modal.hide(); // Fecha o modal
    alert('Compra Finalizada');
  }
}

// Função para remover todos os itens do carrinho
function removerTodosItens() {
  carrinho = [];
  total = 0;
  salvarCarrinho();
  atualizarCarrinho();
}

// Função para atualizar a quantidade de itens no carrinho
function atualizarQuantidadeCarrinho() {
  const quantidadeCarrinhoElemento =
    document.getElementById('quantidadeCarrinho');
  const quantidadeTotal = carrinho.reduce(
    (acc, item) => acc + item.quantidade,
    0,
  );
  if (quantidadeCarrinhoElemento) {
    quantidadeCarrinhoElemento.textContent = quantidadeTotal;
  }
}

// Atualizar o carrinho e a quantidade de itens ao carregar a página
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    atualizarCarrinho();
    atualizarQuantidadeCarrinho();
  });
} else {
  atualizarCarrinho();
  atualizarQuantidadeCarrinho();
}

// Atualizar estoque ao carregar a página de produtos
document.addEventListener('DOMContentLoaded', () => {
  for (let produtoId in estoqueProdutos) {
    atualizarEstoque(produtoId);
  }
});

// Variáveis globais
const botaoLogin = document.getElementById('botaoLogin');
const botaoSair = document.getElementById('botaoSair');
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const nomeUser = document.getElementById('nomeUser');

// Função para exibir ou esconder os botões de login e sair
function atualizarBotoesLogin() {
  const usuario = localStorage.getItem('usuario');
  if (usuario) {
    botaoLogin.style.display = 'none'; // Esconde o botão de login
    botaoSair.style.display = 'inline-block'; // Exibe o botão de sair
    nomeUser.innerText = usuario;
  } else {
    botaoLogin.style.display = 'inline-block'; // Exibe o botão de login
    botaoSair.style.display = 'none'; // Esconde o botão de sair
    nomeUser.innerText = '';
  }
}

// Função de login
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const usuario = usernameInput.value.trim();
  const senha = passwordInput.value.trim();

  if (usuario && senha) {
    localStorage.setItem('usuario', usuario); // Armazena o nome de usuário no localStorage
    atualizarBotoesLogin();
    const modal = bootstrap.Modal.getInstance(
      document.getElementById('loginModal'),
    );
    modal.hide(); // Fecha o modal
  }
});

// Função para logout
function sair() {
  localStorage.removeItem('usuario'); // Remove o usuário do localStorage
  atualizarBotoesLogin();
}

// Função para limpar os campos de login
function limparFormularioLogin() {
  usernameInput.value = '';
  passwordInput.value = '';
}

// Ouvinte para o evento de fechamento do modal
const loginModal = document.getElementById('loginModal');
loginModal.addEventListener('hidden.bs.modal', limparFormularioLogin);

// Atualizar os botões de login ao carregar a página
document.addEventListener('DOMContentLoaded', atualizarBotoesLogin);

// Função para exibir ou esconder os botões de login, sair e finalizar compra
function atualizarBotoesLogin() {
  const usuario = localStorage.getItem('usuario');
  const botaoFinalizarCompra = document.getElementById('finalizarCompra');

  if (usuario) {
    botaoLogin.style.display = 'none'; // Esconde o botão de login
    botaoSair.style.display = 'inline-block'; // Exibe o botão de sair
    nomeUser.innerText = usuario;
    botaoFinalizarCompra.style.display = 'inline-block'; // Exibe o botão de finalizar compra
  } else {
    botaoLogin.style.display = 'inline-block'; // Exibe o botão de login
    botaoSair.style.display = 'none'; // Esconde o botão de sair
    nomeUser.innerText = '';
    botaoFinalizarCompra.style.display = 'none'; // Esconde o botão de finalizar compra
  }
}

// Atualizar os botões de login ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  atualizarBotoesLogin(); // Atualiza a visibilidade dos botões
  atualizarCarrinho(); // Atualiza a lista do carrinho
  atualizarQuantidadeCarrinho(); // Atualiza a quantidade do carrinho
});
