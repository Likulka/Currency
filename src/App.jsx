import { useEffect, useState } from 'react'
import './App.css'
import CurrencyDataTable from './components/CurrencyDataTable'
import CurrencyGraph from './components/CurrencyGraph'
import FileUploader from './components/FileUploader'
import Tabs from './components/Tabs.jsx'
import CurrencyAnalyze from './components/CurrencyAnalyze.jsx'
import analyzeData from './utils/analyzeData.js'

function App() {
	const [currencyData, setCurrencyData] = useState([])
	const [analysis, setAnalysis] = useState(null)
	const [activeTab, setActiveTab] = useState('currency')

	useEffect(() => {
		if (currencyData.length > 1) {
			setAnalysis(analyzeData(currencyData))
		}
	}, [currencyData])

	return (
		<>
			<FileUploader setCurrencyData={setCurrencyData} />
			<Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
			<div className='data-wrapper'>
				{activeTab === 'currency' && currencyData.length > 0 && (
					<>
						<CurrencyDataTable data={currencyData} />
						<CurrencyGraph data={currencyData} lines={['eur', 'usd']}>
							{analysis && <CurrencyAnalyze data={analysis} />}
						</CurrencyGraph>
					</>
				)}
			</div>
		</>
	)
}

export default App
