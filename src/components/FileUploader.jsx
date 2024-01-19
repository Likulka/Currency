const FileUploader = ({ setCurrencyData, setJoggingData }) => {
	const parseCurrencyData = content => {
		const rows = content.trim().split('\n')
		return rows.slice(1).map((row, index) => {
			const [date, eur, usd] = row.split(';')
			return {
				date,
				rate1: parseFloat(eur),
				rate2: parseFloat(usd),
			}
		})
	}

	const parseJoggingData = content => {
		const rows = content.trim().split('\n')
		return rows.slice(1).map(row => {
			const [
				date,
				time,
				distance,
				maxSpeed,
				minSpeed,
				averageSpeed,
				averagePulse,
			] = row.split(';')

			return {
				date,
				time: parseInt(time),
				distance: parseFloat(distance),
				maxSpeed: parseFloat(maxSpeed),
				minSpeed: parseFloat(minSpeed),
				averageSpeed: parseFloat(averageSpeed),
				averagePulse: parseInt(averagePulse),
			}
		})
	}

	const handleFileUpload = file => {
		const fileReader = new FileReader()

		fileReader.onloadend = e => {
			const content = e.target.result
			if (file.name.endsWith('currency.csv')) {
				const data = parseCurrencyData(content)
				console.log(data)
				setCurrencyData(data)
			} else if (file.name.endsWith('jogging.csv')) {
				const data = parseJoggingData(content)
				console.log(data)
				setJoggingData(data)
			}
		}
		fileReader.readAsText(file)
	}

	return (
		<div>
			<input
				type='file'
				accept='.csv'
				onChange={e => handleFileUpload(e.target.files[0])}
			/>
		</div>
	)
}

export default FileUploader
