function calculateDailyIntake(requiredDaily, data) {
	const nutritions = [
		'calories',
		'fat',
		'carbohydrate',
		'sugar',
		'protein',
		'sodium',
		'cholesterol',
		'iron',
		'calcium',
		'vitamin_a',
		'vitamin_d',
	];

	const dailyIntake = {
		calories: 0,
		fat: 0,
		carbohydrate: 0,
		sugar: 0,
		protein: 0,
		sodium: 0,
		cholesterol: 0,
		iron: 0,
		calcium: 0,
		vitamin_a: 0,
		vitamin_d: 0,
	};

	data.forEach(item => {
		dailyIntake.calories += item.foods.calories * item.amount;
		dailyIntake.fat += item.foods.fat * item.amount;
		dailyIntake.carbohydrate += item.foods.carbohydrate * item.amount;
		dailyIntake.sugar += item.foods.sugar * item.amount;
		dailyIntake.protein += item.foods.protein * item.amount;
		dailyIntake.sodium += item.foods.sodium * item.amount;
		dailyIntake.cholesterol += item.foods.cholesterol * item.amount;
		dailyIntake.iron += item.foods.iron * item.amount;
		dailyIntake.calcium += item.foods.calcium * item.amount;
		dailyIntake.vitamin_a += item.foods.vitamin_a * item.amount;
		dailyIntake.vitamin_d += item.foods.vitamin_d * item.amount;
	});

	nutritions.forEach(nutrition => {
		dailyIntake[nutrition] = (dailyIntake[nutrition] / requiredDaily[nutrition]).toFixed(2);
	});

	const sortedNutrition = Object.keys(dailyIntake)
		.map(nutrition => [nutrition, dailyIntake[nutrition]])
		.sort((a, b) => a[1] - b[1]);

	const dontEat = sortedNutrition.slice(-3).filter(el => el[1] > 1);
	const doEat = sortedNutrition.slice(0, 3);

	return { dontEat, doEat };
}

export default calculateDailyIntake;
