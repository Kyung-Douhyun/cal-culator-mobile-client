export default function calculateCalories(fetchedData, dateStr) {
	const data = fetchedData.foodusersDate;
	if (data.length === 0) {
		return [];
	}
	const refObj = {};
	let startDate, endDate;
	if (dateStr.split(' ').length === 2) {
		[startDate, endDate] = dateStr.split(' ').map(date => new Date(date));
	} else {
		let lastDayOfMonth = getLastDayOfMonth(dateStr);
		[startDate, endDate] = [new Date(`${dateStr}-01`), new Date(`${dateStr}-${lastDayOfMonth}`)];
	}

	while (startDate.toString() !== endDate.toString()) {
		const date = startDate.toISOString().slice(0, 10);
		refObj[date] = 0;
		startDate.setDate(startDate.getDate() + 1);
	}
	refObj[endDate.toISOString().slice(0, 10)] = 0;
	data.forEach(record => {
		const date = record.date.slice(0, 10);
		refObj[date]
			? (refObj[date] = refObj[date] + record.amount * record.foods.calories)
			: (refObj[date] = record.amount * record.foods.calories);
	});

	return Object.keys(refObj).map(date => {
		return { x: date, y: refObj[date] };
	});
}

function getLastDayOfMonth(dateStr) {
	let month = Number(dateStr.slice(5));
	let year = Number(dateStr.slice(0, 4));

	if (month === 2) {
		if (year % 4 === 0) {
			return '29';
		}
		return '28';
	}
	if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
		return '31';
	}
	if ([4, 6, 9, 11].includes(month)) {
		return '30';
	}
}
