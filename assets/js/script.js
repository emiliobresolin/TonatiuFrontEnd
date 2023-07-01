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


var dateRange = {
    startYear: 0,
    startMonth: 0,
    startDay: 0,
    endYear: 0,
    endMonth: 0,
    endDay: 0
};

var isDateSelected = false;

function markDateRange() {
    // Obtém os valores dos inputs de data inicial e final
    var startDate = document.getElementById('startDate').value;
    var endDate = document.getElementById('endDate').value;

    // Converte as datas para o formato desejado (ano, mês, dia)
    var startParts = startDate.split('-');
    var endParts = endDate.split('-');
    var startYear = parseInt(startParts[0]);
    var startMonth = parseInt(startParts[1]);
    var startDay = parseInt(startParts[2]);
    var endYear = parseInt(endParts[0]);
    var endMonth = parseInt(endParts[1]);
    var endDay = parseInt(endParts[2]);

    // Verifica se as datas são válidas
    if (!isNaN(startYear) && !isNaN(startMonth) && !isNaN(startDay) && !isNaN(endYear) && !isNaN(endMonth) && !isNaN(endDay)) {
        // Atualiza os valores do objeto dateRange
        dateRange.startYear = startYear;
        dateRange.startMonth = startMonth;
        dateRange.startDay = startDay;
        dateRange.endYear = endYear;
        dateRange.endMonth = endMonth;
        dateRange.endDay = endDay;
        // Marca a faixa de datas no calendário
        for (var year = startYear; year <= endYear; year++) {
            var startMonthIndex = (year === startYear) ? startMonth : 1;
            var endMonthIndex = (year === endYear) ? endMonth : 12;
            for (var month = startMonthIndex; month <= endMonthIndex; month++) {
                var startDayIndex = (year === startYear && month === startMonth) ? startDay : 1;
                var endDayIndex = (year === endYear && month === endMonth) ? endDay : new Date(year, month, 0).getDate();
                for (var day = startDayIndex; day <= endDayIndex; day++) {
                    var dateElement = document.getElementById(day);
                    if (dateElement) {
                        dateElement.classList.add('selected-range');
                        // Obtenha a referência para a div de destino
                        target = document.getElementById("calendar");
                    }
                }
            }
        }
        // Define a flag de seleção como true
        // isDateSelected = true;
        alert('Range selecionado com sucesso.');
        // Role a página até a div de destino
        target.scrollIntoView({ behavior: 'smooth' });
    }
}

function markDate() {

    // Verifica se uma data já foi selecionada
    if (isDateSelected) {
        alert('Seleção de data ja ocorreu, click em reajustar para modifica-la.');
        return; // Retorna se uma data já foi selecionada
    }

    // Obtém o valor do input de data
    var selectedDate = document.getElementById('dateInput').value;

    // Converte a data para o formato desejado (ano, mês, dia)
    var dateParts = selectedDate.split('-');
    var year = parseInt(dateParts[0]);
    var month = parseInt(dateParts[1]);
    var day = parseInt(dateParts[2]);

    // Verifica se a data é válida
    if (!isNaN(year) && !isNaN(month) && !isNaN(day)) {
        // Obtém os valores dos inputs de data inicial e final definidos por markDateRange
        var startYear = dateRange.startYear;
        var startMonth = dateRange.startMonth;
        var startDay = dateRange.startDay;
        var endYear = dateRange.endYear;
        var endMonth = dateRange.endMonth;
        var endDay = dateRange.endDay;

        // Verifica se a data selecionada está dentro do intervalo
        if (
            year >= startYear && year <= endYear &&
            month >= startMonth && month <= endMonth &&
            day >= startDay && day <= endDay
        ) {
            // Marca a data no calendário
            var dateElement = document.getElementById(day);
            if (dateElement) {
                dateElement.classList.add('selected');
                alert('Data do serviço adicionada com sucesso ao calendario.');
                isDateSelected = true; // Atualiza a flag
                // Obtenha a referência para a div de destino
                target = document.getElementById("calendar");
                // Role a página até a div de destino
                target.scrollIntoView({ behavior: 'smooth' });
            }

        }else{
            alert('A data selecionada não está disponível.');
        }
    }


}

function removeSelectedDate() {
    // Remove a classe 'selected' do elemento marcado
    var selectedElement = document.getElementsByClassName('selected')[0];
    if (selectedElement) {
        selectedElement.classList.remove('selected');
        isDateSelected = false;
        alert('Data do serviço removida do calendario.')
    }
}

function resetDateSelection() {
    removeSelectedDate(); // Remove a data atualmente selecionada
    isDateSelected = false; // Define a flag de seleção como false
}









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

  
  function showLoginForm() 
  {
    document.getElementById("register-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
  }
