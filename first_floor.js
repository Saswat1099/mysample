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

document.querySelector('.lab').style.cursor = 'pointer';
document.querySelector('.conferenceroom').style.cursor = 'pointer';
document.querySelector('.staffroom').style.cursor = 'pointer';
document.querySelector('.exam').style.cursor = 'pointer';
document.querySelector('.academy').style.cursor = 'pointer';

const t = new Date();
const h = t.getHours();
const m = t.getHours();
if (h<10 || h>=16) {
	document.querySelector('.staffroom').style.pointerEvents = 'none';
}
if (h<10 || h>=13) {
	document.querySelector('.academy').style.pointerEvents = 'none';
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

	if(classname === 'lab'){
		document.querySelector('.data').innerHTML = '<p><u>Laboratory Rules</u>:</p><ol><li>Lab Record and apron is compulsory for getting entry into the lab.</li><li>Shoes and bags should be kept outside in the racks provided.</li><li>Breaking of any laboratory equipments and glasses will lead to full compensation.</li><li>Silence should be maintained inside the lab.</li></ol>';
		document.querySelector('.data').classList.add('style');
	}
	if(classname === 'staffroom'){
		document.querySelector('.data').innerHTML = '<p><u>Staff Room</u> is open from 10:00am to 4:30pm.</p><p>Staff ID is necessary for entry into the staff room. Faculties are requested to sign the register before departing.</p>';
		document.querySelector('.data').classList.add('style');
	}
	if(classname === 'conferenceroom'){
		document.querySelector('.data').innerHTML = '<h4><u>Conference Room Timing</u>: 10:30am to 12:30pm</h4><p>The conference room is held available for conduting seminars, hackathons, and official meetings. The conference room is well-equipped with projectors and smart boards for smooth conduct of seminars and tech-talks. </p><p>Contact: Rajesh Sahoo, 9861431XXX</p>';
		document.querySelector('.data').classList.add('style');
	}
	if(classname === 'exam'){
		document.querySelector('.data').innerHTML = '<p><u>Examination Section</u> basically deals with exams and papers.</p><p>Faculties are advised to evaluate the semester examination papers in their respective given time slots and record it in the examination register. No faculty is allowed to take the semester papers along with them. Students can also check their semester papers after evaluation in the examination section and apply for rechecking if needed.</p>';
		document.querySelector('.data').classList.add('style');
	}
	if(classname === 'academy'){
		document.querySelector('.data').innerHTML = '<p><u>Academic Section</u> is open from 10:00am to 1:30pm.</p><p>Academic section basically deals with querries regarding branch change, academic session, online payments, optional subjects, scholarships and others related to academics. Students are instructed to carry their ID cards for quick reference</p>';
		document.querySelector('.data').classList.add('style');
	}
}	


