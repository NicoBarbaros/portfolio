const days = [
	'Sunday',
	'Monday',
	'Thuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday'
]

const weekDay = () => {
	let now = new Date().getDay();
	return days[now];
}

export default weekDay;