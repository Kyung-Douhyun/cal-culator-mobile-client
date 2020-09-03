function dailyRecommendation(age, gender) {
  // order
  // vitaminA, vitaminD, calori, protein, carbohydrate, fat, calcium, iron, sodium, cholesterol, zinc, sugar
  // total 12 items
  if (age >= 15 && age <= 18 && gender === 'Male') {
    return {
      vitamin_a: 850,
      vitamin_d: 600,
      calories: 2800,
      protein: 52,
      carbohydrate: 130,
      fat: 30,
      calcium: 1300,
      iron: 11,
      sodium: 2300,
      cholesterol: 300,
      zinc: 11,
      sugar: 40,
    };
  }

  if (age >= 19 && age <= 29 && gender === 'Male') {
    return {
      vitamin_a: 750,
      vitamin_d: 600,
      calories: 2700,
      protein: 52,
      carbohydrate: 130,
      fat: 30,
      calcium: 1300,
      iron: 11,
      sodium: 2300,
      cholesterol: 300,
      zinc: 11,
      sugar: 50,
    };
  }

  if (age >= 30 && age <= 49 && gender === 'Male') {
    return {
      vitamin_a: 750,
      vitamin_d: 600,
      calories: 2700,
      protein: 52,
      carbohydrate: 130,
      fat: 30,
      calcium: 1300,
      iron: 11,
      sodium: 2300,
      cholesterol: 300,
      zinc: 11,
      sugar: 50,
    };
  }

  if (age >= 50 && age <= 64 && gender === 'Male') {
    return {
      vitamin_a: 700,
      vitamin_d: 600,
      calories: 2600,
      protein: 52,
      carbohydrate: 130,
      fat: 30,
      calcium: 1300,
      iron: 11,
      sodium: 2300,
      cholesterol: 300,
      zinc: 11,
      sugar: 50,
    };
  }

  if (age >= 65 && age <= 74 && gender === 'Male') {
    return {
      vitamin_a: 700,
      vitamin_d: 600,
      calories: 2600,
      protein: 52,
      carbohydrate: 130,
      fat: 30,
      calcium: 1300,
      iron: 11,
      sodium: 2300,
      cholesterol: 300,
      zinc: 11,
      sugar: 50,
    };
  }

  if (age >= 75 && gender === 'Male') {
    return {
      vitamin_a: 700,
      vitamin_d: 800,
      calories: 2400,
      protein: 52,
      carbohydrate: 130,
      fat: 30,
      calcium: 1300,
      iron: 11,
      sodium: 2300,
      cholesterol: 300,
      zinc: 11,
      sugar: 50,
    };
  }

  if (age >= 15 && age <= 18 && gender === 'Female') {
    return {
      vitamin_a: 600,
      vitamin_d: 400,
      calories: 2400,
      protein: 46,
      carbohydrate: 130,
      fat: 30,
      calcium: 1300,
      iron: 15,
      sodium: 2300,
      cholesterol: 300,
      zinc: 9,
      sugar: 40,
    };
  }

  if (age >= 19 && age <= 29 && gender === 'Female') {
    return {
      vitamin_a: 650,
      vitamin_d: 600,
      calories: 2400,
      protein: 46,
      carbohydrate: 130,
      fat: 30,
      calcium: 1300,
      iron: 15,
      sodium: 2300,
      cholesterol: 300,
      zinc: 9,
      sugar: 50,
    };
  }

  if (age >= 30 && age <= 49 && gender === 'Female') {
    return {
      vitamin_a: 650,
      vitamin_d: 600,
      calories: 2200,
      protein: 46,
      carbohydrate: 130,
      fat: 30,
      calcium: 1300,
      iron: 15,
      sodium: 2300,
      cholesterol: 300,
      zinc: 9,
      sugar: 50,
    };
  }

  if (age >= 50 && age <= 64 && gender === 'Female') {
    return {
      vitamin_a: 1600,
      vitamin_d: 600,
      calories: 2200,
      protein: 46,
      carbohydrate: 130,
      fat: 30,
      calcium: 1300,
      iron: 15,
      sodium: 2300,
      cholesterol: 300,
      zinc: 9,
      sugar: 50,
    };
  }

  if (age >= 65 && age <= 74 && gender === 'Female') {
    return {
      vitamin_a: 600,
      vitamin_d: 600,
      calories: 2000,
      protein: 46,
      carbohydrate: 130,
      fat: 30,
      calcium: 1300,
      iron: 15,
      sodium: 2300,
      cholesterol: 300,
      zinc: 9,
      sugar: 50,
    };
  }

  if (age >= 75 && gender === 'Male') {
    return {
      vitamin_a: 600,
      vitamin_d: 800,
      calories: 2000,
      protein: 46,
      carbohydrate: 130,
      fat: 30,
      calcium: 1300,
      iron: 15,
      sodium: 2300,
      cholesterol: 300,
      zinc: 9,
      sugar: 50,
    };
  }
}

export default dailyRecommendation;
