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

document.querySelector('.cttcroom').style.cursor = 'pointer';
document.querySelector('.spectrum').style.cursor = 'pointer';
document.querySelector('.staffroom').style.cursor = 'pointer';
document.querySelector('.meetingroom').style.cursor = 'pointer';
document.querySelector('.lab').style.cursor = 'pointer';

const t = new Date();
const h = t.getHours();
const m = t.getHours();
if (h<10 || h>=16) {
	document.querySelector('.staffroom').style.pointerEvents = 'none';
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

	if(classname === 'cttcroom'){
		document.querySelector('.data').innerHTML = '<p>All courses offered by <u>CTTC</u> are taught in this room by their faculties. This room is also equipped with machineries and tools for carrying out illustrations to the students. Mostly, the class timig is in the afternoon from 4:30pm onwards. </p><p>Website: www.cttc.gov.in</p>';
		document.querySelector('.data').classList.add('style');
	}
	if(classname === 'spectrum'){
		document.querySelector('.data').innerHTML = '<p>This is the official room for <u>Spectrum Club</u> where all projects, innovations, activities and fun-stuffs takes place. Students may carry their laptops with them to explore and learn web development, android developments and many more.</p><p>Contact Us: www.spectrumcet.com</p>';
		document.querySelector('.data').classList.add('style');
	}
	if(classname === 'staffroom'){
		document.querySelector('.data').innerHTML = '<p><u>Staff Room</u> is open from 10:00am to 4:30pm.</p><p>Staff ID is necessary for entry into the staff room. Faculties are requested to sign the register before departing.</p>';
		document.querySelector('.data').classList.add('style');
	}
	if(classname === 'meetingroom'){
		document.querySelector('.data').innerHTML = '<p>All official gatherings and meetings takes place in this room. Any club/society of the college must bring a written application from the respective Hod to arrange a meeting in this room.</p><p>Contact: Rahul Jain, 6370213XXX</p>';
		document.querySelector('.data').classList.add('style');
	}
	if(classname === 'lab'){
		document.querySelector('.data').innerHTML = '<p><u>Laboratory Rules</u>:</p><ol><li>Lab Record and apron is compulsory for getting entry into the lab.</li><li>Shoes and bags should be kept outside in the racks provided.</li><li>Breaking of any laboratory equipments and glasses will lead to full compensation.</li><li>Silence should be maintained inside the lab.</li></ol>';
		document.querySelector('.data').classList.add('style');
	}
}	
