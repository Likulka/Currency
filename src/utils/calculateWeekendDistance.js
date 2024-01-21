export function distanceSum(data) {
	let dates = data.map(item => {
		const parts = item.date.split('.')
		const day = parseInt(parts[0], 10)
		const month = parseInt(parts[1], 10) - 1
		const year = parseInt(parts[2], 10)
		return new Date(year, month, day)
	})

	let weekendDistance = 0
	dates.forEach((date, index) => {
		if (isWeekend(date)) weekendDistance += data[index].distance
	})

	return weekendDistance
}

function isWeekend(date) {
	const dayOfWeek = date.getDay()
	return dayOfWeek === 0 || dayOfWeek === 6
}
