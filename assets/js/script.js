// script.

let idAtual = null;
let idAtualDesc = null;

function removePrimeiraSection()
{
    let primeiraSection = document.getElementById('servico-detalhes-0');
    primeiraSection.style.display = 'none';
}


function mostrarConteudoDetalhes(id) {
    
	let secaoSelecionada = document.getElementById(id);

	if (idAtual === id) {
		// Mesmo ID, apenas remove a classe "ocultar"
		secaoSelecionada.classList.remove('ocultar');

	} else {
		// ID diferente, remove a classe "ocultar" da seção anteriormente selecionada, se houver
		if (idAtual) {
		let secaoAnterior = document.getElementById(idAtual);
		secaoAnterior.classList.add('ocultar');
		}
		// Remove a classe "ocultar" da nova seção selecionada
		secaoSelecionada.classList.remove('ocultar');
		// Atualiza o ID atual para o novo ID
		idAtual = id;
		// Chama a função mostrarConteudoDescricao para remover a classe 'mostrar'
		mostrarConteudoDescricao();
	}
    removePrimeiraSection();
    
}
// Adicione a classe "ocultar" ao primeiro ID
document.getElementById('servico-detalhes-1').classList.add('ocultar');

function mostrarConteudoDescricao(id) {
	let secaoSelecionada = document.getElementById(id);

    if (idAtual === idAtualDesc) {
        // Mesmo ID na função mostrarConteudoDetalhes e na função mostrarConteudoDescricao
        secaoSelecionada.classList.remove('mostrar');

	} else {
		// ID diferente, remove a classe "mostrar" da seção anteriormente selecionada, se houver
		if (idAtualDesc) {
		let secaoAnterior = document.getElementById(idAtualDesc);
		secaoAnterior.classList.add('mostrar');
		}
		// Remove a classe "mostrar" da nova seção selecionada
		secaoSelecionada.classList.remove('mostrar');
		
		// Atualiza o ID atual para o novo 
		idAtualDesc = id;
		//mostrarConteudoDetalhes(id);
	}
}
document.getElementById('mostrar').classList.add('mostrar');

