export default function analyzeData(data) {
	let maxGain = {
		eur: { value: 0, date: '' },
		usd: { value: 0, date: '' },
	}
	let maxLoss = {
		eur: { value: 0, date: '' },
		usd: { value: 0, date: '' },
	}

	for (let i = 1; i < data.length; i++) {
		;['eur', 'usd'].forEach(key => {
			const change = data[i][key] - data[i - 1][key]
			if (change > maxGain[key].value) {
				maxGain[key] = { value: change, date: data[i].date }
			} else if (change < maxLoss[key].value) {
				maxLoss[key] = { value: change, date: data[i].date }
			}
		})
	}

	return { maxGain, maxLoss }
}