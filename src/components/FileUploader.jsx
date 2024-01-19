const FileUploader = ({ setCurrencyData }) => {
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

	const handleFileRead = e => {
		const content = e.target.result
		const data = parseCurrencyData(content)
		setCurrencyData(data.reverse())
	}

	const handleFileChosen = file => {
		let fileReader = new FileReader()
		fileReader.onloadend = handleFileRead
		fileReader.readAsText(file)
	}

	return (
		<div className='uploader'>
			<h1>Загрузите csv файл</h1>
			<input
				type='file'
				id='file-upload'
				accept='.csv'
				onChange={e => handleFileChosen(e.target.files[0])}
			/>
			<label htmlFor='file-upload'>Загрузить файл</label>
		</div>
	)
}

export default FileUploader
