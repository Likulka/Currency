import { useState } from 'react'
import './App.css'
import CurrencyDataTable from './components/CurrencyDataTable'
import FileUploader from './components/FileUploader'
import JoggingDataTable from './components/JoggingDataTable'

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
			<JoggingDataTable data={joggingData} />
		</>
	)
}

export default App
