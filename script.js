// Adicione no início do arquivo
let pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];

// Modifique a função finalizarCompra()
function finalizarCompra() {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    
    const novoPedido = {
        data: new Date().toLocaleString(),
        itens: [...carrinho],
        total: total
    };
    
    pedidos.push(novoPedido);
    localStorage.setItem('pedidos', JSON.stringify(pedidos));
    
    const mensagem = `Pedido confirmado!\n\nItens:\n${carrinho.map(item => `- ${item.nome}: R$ ${item.preco.toFixed(2)}`).join('\n')}\n\nTotal: R$ ${total.toFixed(2)}\n\nObrigado pela compra!`;
    alert(mensagem);
    
    carrinho = [];
    total = 0;
    atualizarCarrinho();
}

// Adicione esta nova função para gerar relatórios
function gerarRelatorio() {
    if (pedidos.length === 0) {
        return "Nenhum pedido registrado ainda.";
    }
    
    let relatorio = "RELATÓRIO DE PEDIDOS\n\n";
    let totalGeral = 0;
    
    pedidos.forEach((pedido, index) => {
        relatorio += `Pedido #${index + 1} - ${pedido.data}\n`;
        pedido.itens.forEach(item => {
            relatorio += `- ${item.nome}: R$ ${item.preco.toFixed(2)}\n`;
        });
        relatorio += `Total: R$ ${pedido.total.toFixed(2)}\n\n`;
        totalGeral += pedido.total;
    });
    
    relatorio += `TOTAL GERAL: R$ ${totalGeral.toFixed(2)}\n`;
    relatorio += `QUANTIDADE DE PEDIDOS: ${pedidos.length}`;
    
    return relatorio;
}
