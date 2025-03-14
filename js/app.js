let totalGeral;
limpar()

function adicionar() {
    //recuperar valores nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0].trim();
    let valorUnitario = parseFloat(produto.split('R$')[1].trim());
    let quantidade = parseInt(document.getElementById('quantidade').value);
    
    if (!produto || produto.indexOf('R$') === -1) {
        alert("Por favor, selecione um produto válido.");
        return;
    }
    if (isNaN(quantidade) || quantidade <= 0) {
        alert('Por favor, insira uma quantidade válida.');
        return;
    }

    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');   
    
    
    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul"> R$ ${preco}</span>
        </section>`;
    
    totalGeral += preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral.toFixed(2)}`;
    
    document.getElementById('quantidade').value = 0;
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = `R$ 0`;
}