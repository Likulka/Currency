import { useState } from 'react'
import './App.css'
import CurrencyDataTable from './components/CurrencyDataTable'
import FileUploader from './components/FileUploader'

function App() {
	const [currencyData, setCurrencyData] = useState([])
	const [joggingData, setJoggingData] = useState([])

	return (
		<>
			<FileUploader
				setCurrencyData={setCurrencyData}
				setJoggingData={setJoggingData}
			/>
			<CurrencyDataTable data={currencyData} />
		</>
	)
}

export default App
