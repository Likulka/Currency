import { useState } from 'react'
import './App.css'
import CurrencyDataTable from './components/CurrencyDataTable'
import FileUploader from './components/FileUploader'

function App() {
	const [currencyData, setCurrencyData] = useState([])

	return (
		<>
			<FileUploader setCurrencyData={setCurrencyData} />
			<CurrencyDataTable data={currencyData} />
		</>
	)
}

export default App
