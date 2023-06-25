// script.


//CALANDAR:
// Defining an array of objects representing the months with their respective IDs and names
const months = [
    { 'id': 1, 'name': 'Jan' },
    { 'id': 2, 'name': 'Feb' },
    { 'id': 3, 'name': 'Mar' },
    { 'id': 4, 'name': 'Apr' },
    { 'id': 5, 'name': 'May' },
    { 'id': 6, 'name': 'Jun' },
    { 'id': 7, 'name': 'Jul' },
    { 'id': 8, 'name': 'Aug' },
    { 'id': 9, 'name': 'Sep' },
    { 'id': 10, 'name': 'Oct' },
    { 'id': 11, 'name': 'Nov' },
    { 'id': 12, 'name': 'Dec' },
];
// Getting the current year and month
var currentYear = new Date().getFullYear();
var currentMonth = new Date().getMonth() + 1;

// Function to check the number of days in a given month and the day of the week for the first day of the month
function letsCheck(year, month) {
    var daysInMonth = new Date(year, month, 0).getDate();
    var firstDay = new Date(year, month, 1).getUTCDay();
    var array = {
        daysInMonth: daysInMonth,
        firstDay: firstDay
    };
    return array;
}

// Function to generate the calendar for a specific year and month
function makeCalendar(year, month) {
	// Checking the number of days in the month and the day of the week for the first day
    var getChek = letsCheck(year, month);
	// Adjusting the first day index to start from Monday (0) to Sunday (6)
    getChek.firstDay === 0 ? getChek.firstDay = 7 : getChek.firstDay;
	// Clearing the calendar list container
    $('#calendarList').empty();
	// Generating the calendar HTML by looping through each day of the month
    for (let i = 1; i <= getChek.daysInMonth; i++) {
		// Creating a list item with the day number and positioning it based on the first day of the month
        if (i === 1) {
            var div = '<li id="' + i + '" style="grid-column-start: ' + getChek.firstDay + ';">1</li>';
        } else {
            var div = '<li id="' + i + '" >' + i + '</li>'
        }
		if (i === new Date().getDate() && month === new Date().getMonth() + 1 && year === new Date().getFullYear()) {
			div = '<li id="' + i + '" class="current-day"><b>' + i + '</b></li>';
		}
        $('#calendarList').append(div);
    }
	// Retrieving the name of the month based on the month ID
    monthName = months.find(x => x.id === month).name;
	// Updating the year and month display
    $('#yearMonth').text(year + ' ' + monthName);
}
// Generating the calendar for the current year and month
makeCalendar(currentYear, currentMonth);

// Function to navigate to the next month
function nextMonth() {
	// Incrementing the current month and adjusting the year if necessary
    currentMonth = currentMonth + 1;
    if (currentMonth > 12) {
        currentYear = currentYear + 1;
        currentMonth = 1;
    }
	// Clearing the calendar list container
    $('#calendarList').empty();
	// Updating the year and month display
    $('#yearMonth').text(currentYear + ' ' + currentMonth);
	// Generating the calendar for the new year and month
    makeCalendar(currentYear, currentMonth);
}

// Function to navigate to the previous month
function prevMonth() {
	// Decrementing the current month and adjusting the year if necessary
    currentMonth = currentMonth - 1;
    if (currentMonth < 1) {
        currentYear = currentYear - 1;
        currentMonth = 12;
    }
	// Clearing the calendar list container
    $('#calendarList').empty();
	// Updating the year and month display
    $('#yearMonth').text(currentYear + ' ' + currentMonth);
	// Generating the calendar for the new year and month
    makeCalendar(currentYear, currentMonth);
}



//remove and insert existing elements:

let idAtual = null;
let idAtualDesc = null;

function removePrimeiraSection()
{
    let primeiraSection = document.getElementById('servico-detalhes-0');
    primeiraSection.style.display = 'none';
}


function mostrarConteudoDetalhes(id) {
    removePrimeiraSection();
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




// function showRegisterForm() {
//     document.getElementById("login-form").style.display = "none";
//     document.getElementById("register-form").style.display = "block";
//   }
  
  function showLoginForm() 
  {
    document.getElementById("register-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
  }
