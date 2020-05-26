setTimeout(function() {
			$('.preloader').fadeToggle();
		}, 2500);

const time = document.getElementById('time');

function addZero(n){
	return(parseInt(n, 10) < 10 ? '0' : '') + n;
}

function showTime() {
	let today = new Date(),
		hour = today.getHours(),
		min = today.getMinutes(),
		sec = today.getSeconds(),
		year = today.getFullYear(),
		month = today.getMonth(),
		date = today.getDate();

	const amPm = hour >= 12 ? 'PM' : 'AM';

	hour = hour%12 || 12;

	time.innerHTML = `${hour}:${addZero(min)}:${addZero(sec)} ${amPm} 
						${addZero(date)}/${addZero(month + 1)}/${year}`;

	setTimeout(showTime, 1000);
}

showTime();

document.querySelector('.principalroom').style.cursor = 'pointer';
document.querySelector('.hodroom').style.cursor = 'pointer';
document.querySelector('.readingroom').style.cursor = 'pointer';
document.querySelector('.library').style.cursor = 'pointer';

const t = new Date();
const h = t.getHours();
const m = t.getHours();
if (h<10 || h>=15) {
	document.querySelector('.library').style.pointerEvents = 'none';
}
if (h<9 || h>=19) {
	document.querySelector('.readingroom').style.pointerEvents = 'none';
}

const modal = document.querySelector('.modal'),
	close = document.querySelector('.close'),
	stair1 = document.querySelector('.stairs-1');
	stair2 = document.querySelector('.stairs-2');

stair1.addEventListener('click', (e)=>{
	modal.style.display = 'block';
});
stair2.addEventListener('click', (e)=>{
	modal.style.display = 'block';
});
close.addEventListener('click', (e)=>{
	modal.style.display = 'none';
});

if (true) {
		document.querySelector('.data').innerHTML = '<h3><u>NOTICE</u></h3><p>The admission for the academic session 2020 will commence from 3rd June,2020 through online application. Those who want to apply for hostels need to submit their previous semester results. The course fee of corresponding courses for M.Sc has been increased by Rs.8000/-.</p><p>For further querries, visit cet.edu.in</p>';
		document.querySelector('.data').classList.add('style');
	}

function display(e) {
	const classname = e.className;

	if(classname === 'principalroom'){
		document.querySelector('.data').innerHTML = '<h3>Mr. P K Patra</h3><h4>Contact to the principal should be done between 11:00am to 12:30pm with an application duly signed by the Head of the Department of the respective branch.</h4><p>Tel: 0674-2386075, Fax: 0674-2386182</p><p>Email: principalcet@cet.edu.in, Website: www.cet.edu.in</p>';
		document.querySelector('.data').classList.add('style');
	}
	if(classname === 'hodroom'){
		document.querySelector('.data').innerHTML = '<h3>Mr. A K Mohanty</h3><h4>Contact to the HoD should be done between 11:00am to 1:30pm with an application duly signed by the Advisor of the respective branch.</h4><p>Phone: 9862310XXX</p>';
		document.querySelector('.data').classList.add('style');
	}
	if(classname === 'readingroom'){
		document.querySelector('.data').innerHTML = '<h4><u>Reading Room Timing</u>: 9:00am to 7:00pm</h4><p><u>Reading Roon Rules</u>:</p><ol><li>Students are instructed to maintain discipline and decorom of the reading room.</li><li>Students can use the pc services inside the reading room.</li><li>Bringing food items and bag is strictly prohibited.</li></ol>';
		document.querySelector('.data').classList.add('style');
	}
	if(classname === 'library'){
		document.querySelector('.data').innerHTML = '<h4><u>Library Timing</u>: 10:00am to 3:00pm</h4><p><u>Library Rules</u>:</p><ol><li>Please carry your ID card and library card for issue and return of books.</li><li>Books can be issued for atmost two weeks and further keeping the books will incur charges.</li><li>Books should be in proper condition while returning, otherwise it will lead to replacement with a new one.</li><li>Students are required to check the book while issueing and bring to the notice of the librarian any torn out pages if any.</li><li>Loss of the library card should be immediately reported to librarian.</li></ol><p><u>NOTE</u>: This is to inform all the students that the library services has been stopped due to unavailabiliity of staff as a result of corona pandemic. All students are hereby informed to access online content provided in the college website.</p><p>Contact details: Biswajit Samal, 9562300XXX</p><p>Contact details: Rahul Mahadev, 9596325XXX</p>';
		document.querySelector('.data').classList.add('style');
	}
}








