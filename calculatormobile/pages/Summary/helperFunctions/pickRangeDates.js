export default function pickRangeDates(selectedDates, newDate) {
  if (selectedDates === null) {
    return {
      [newDate]: { startingDay: true, color: 'green' },
    };
  }
  selectedDates[newDate] = null;
  const dateInOrder = Object.keys(selectedDates).sort();
  let startDate = new Date(dateInOrder[0]);
  let endDate = new Date(dateInOrder[dateInOrder.length - 1]);

  const newSelectedDate = {
    [startDate.toISOString().slice(0, 10)]: {
      startingDay: true,
      color: 'green',
    },
  };

  while (startDate.toISOString() !== endDate.toISOString()) {
    startDate.setDate(startDate.getDate() + 1);
    newSelectedDate[startDate.toISOString().slice(0, 10)] = { color: 'green' };
  }
  newSelectedDate[endDate.toISOString().slice(0, 10)].endingDay = true;

  return newSelectedDate;
}
