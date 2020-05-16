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

