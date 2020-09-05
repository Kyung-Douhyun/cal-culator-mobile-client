export default function calculateCalories(fetchedData, dateStr) {
	const data = fetchedData.foodusersDate;
	if (data.length === 0) {
		return [];
	}
	const refObj = {};
	const [startDate, endDate] = dateStr.split(' ').map(date => new Date(date));

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
