const FileUploader = ({ setCurrencyData }) => {
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

	const handleFileRead = e => {
		const content = e.target.result
		const data = parseCurrencyData(content)
		setCurrencyData(data) // Обновляем состояние в App
	}

	const handleFileChosen = file => {
		let fileReader = new FileReader()
		fileReader.onloadend = handleFileRead
		fileReader.readAsText(file)
	}

	return (
		<div>
			<input
				type='file'
				accept='.csv'
				onChange={e => handleFileChosen(e.target.files[0])}
			/>
			{/* Отображение данных, если они были загружены */}
		</div>
	)
}

export default FileUploader
