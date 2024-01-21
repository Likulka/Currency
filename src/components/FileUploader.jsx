const FileUploader = ({ setCurrencyData, setJoggingData }) => {
	const parseCurrencyData = content => {
		const rows = content.trim().split('\n')
		return rows.slice(1).map((row) => {
			const [date, usd, eur] = row.split(';')
			return {
				date,
				usd: parseFloat(usd),
				eur: parseFloat(eur),
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
				setJoggingData(data.reverse())
			}
		}
		fileReader.readAsText(file)
	}

	return (
		<div className='uploader'>
			<h1>Загрузите csv файл</h1>
			<input
				type='file'
				id='file-upload'
				accept='.csv'
				onChange={e => handleFileUpload(e.target.files[0])}
			/>
			<label htmlFor='file-upload'>Загрузить файл</label>
		</div>
	)
}

export default FileUploader
