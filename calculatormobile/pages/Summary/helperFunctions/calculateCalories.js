export default function calculateCalories(fetchedData) {
  const data = fetchedData.foodusersDate;
  if (data.length === 0) {
    return [];
  }
  let refObj = {};

  data.forEach((record) => {
    const date = record.date.slice(0, 10);
    refObj[date]
      ? (refObj[date] = refObj[date] + record.amount * record.foods.calories)
      : (refObj[date] = record.amount * record.foods.calories);
  });

  return Object.keys(refObj).map((date) => {
    return { x: date, y: refObj[date] };
  });
}
