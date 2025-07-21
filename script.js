let carrinho = [];
let total = 0;

function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    total += preco;
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const itensCarrinho = document.getElementById('itens-carrinho');
    const totalElement = document.getElementById('total');
    
    itensCarrinho.innerHTML = '';
    carrinho.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `<p>${item.nome} - R$ ${item.preco.toFixed(2)}</p>`;
        itensCarrinho.appendChild(div);
    });
    
    totalElement.textContent = total.toFixed(2);
}

function finalizarCompra() {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    
    const mensagem = `Pedido confirmado!\n\nItens:\n${carrinho.map(item => `- ${item.nome}: R$ ${item.preco.toFixed(2)}`).join('\n')}\n\nTotal: R$ ${total.toFixed(2)}\n\nObrigado pela compra!`;
    alert(mensagem);
    
    // Limpar carrinho após compra
    carrinho = [];
    total = 0;
    atualizarCarrinho();
}
