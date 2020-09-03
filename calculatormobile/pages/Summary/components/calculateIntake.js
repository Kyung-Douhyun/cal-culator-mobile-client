function calculateIntake(requiredDaily, data) {
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

  data.forEach((item) => {
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

  nutritions.forEach((nutrition) => {
    dailyIntake[nutrition] = dailyIntake[nutrition] / requiredDaily[nutrition];
  });

  // return dailyIntake;
  return Object.keys(dailyIntake).map((nutrition) => {
    return { x: nutrition, y: dailyIntake[nutrition] };
  });
}

export default calculateIntake;
