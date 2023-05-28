(function($) {

	var $window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Nav.

		// Title Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
					'<span class="title">' + $('#logo').html() + '</span>' +
				'</div>'
			)
				.appendTo($body);

		// Navigation Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

})(jQuery);




//EMILIO ADDED:

// script.

let idAtual = null;

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
	}
}
// Adicione a classe "ocultar" ao primeiro ID
document.getElementById('ocultar').classList.add('ocultar');


//let idAtualDesc = null;

function mostrarConteudoDescricao(id) {
	let secaoSelecionada = document.getElementById(id);
	secaoSelecionada.classList.add('mostrar');
	secaoSelecionada.classList.remove('mostrar');
	// if (idAtualDesc === id) {
	// 	// Mesmo ID, apenas remove a classe "mostrar"
	// 	secaoSelecionada.classList.remove('mostrar');
	// } else {
	// 	// ID diferente, remove a classe "mostrar" da seção anteriormente selecionada, se houver
	// 	if (idAtualDesc) {
	// 	let secaoAnterior = document.getElementById(idAtualDesc);
	// 	secaoAnterior.classList.add('mostrar');
	// 	}
	// 	// Remove a classe "mostrar" da nova seção selecionada
	// 	secaoSelecionada.classList.remove('mostrar');
		
	// 	// Atualiza o ID atual para o novo ID
	// 	idAtualDesc = id;
	// }
}
//document.getElementById('mostrar').classList.add('mostrar');
