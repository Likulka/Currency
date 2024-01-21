import { useEffect, useState } from 'react'
import './App.css'
import CurrencyAnalyze from './components/CurrencyAnalyze.jsx'
import CurrencyDataTable from './components/CurrencyDataTable'
import FileUploader from './components/FileUploader'
import Graph from './components/Graph.jsx'
import JoggingDataTable from './components/JoggingDataTable.jsx'
import Tabs from './components/Tabs.jsx'
import analyzeData from './utils/analyzeData.js'
import { distanceSum } from './utils/calculateWeekendDistance.js'

function App() {
	const [currencyData, setCurrencyData] = useState([])
	const [joggingData, setJoggingData] = useState([])
	const [analysis, setAnalysis] = useState(null)
	const [activeTab, setActiveTab] = useState('currency')

	useEffect(() => {
		if (currencyData.length > 1) {
			setAnalysis(analyzeData(currencyData))
		}
	}, [currencyData])

	return (
		<>
			<div className='uploader'>
				<FileUploader
					setCurrencyData={data => {
						setCurrencyData(data)
						setActiveTab('currency')
					}}
					setJoggingData={data => {
						setJoggingData(data)
						setActiveTab('jogging')
					}}
				/>
			</div>
			{currencyData.length > 0 && joggingData.length > 0 && (
				<Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
			)}
			<div className='data-wrapper'>
				{activeTab === 'currency' && currencyData.length > 0 && (
					<>
						<CurrencyDataTable data={currencyData} />
						<Graph data={currencyData} lines={['eur', 'usd']}>
							{analysis && <CurrencyAnalyze data={analysis} />}
						</Graph>
					</>
				)}
				{activeTab === 'jogging' && joggingData.length > 0 && (
					<div>
						<Graph data={joggingData} lines={['distance', 'time']} />
						<p>
							Количество км в выходные = <span>{distanceSum(joggingData)}</span>
						</p>
						<JoggingDataTable data={joggingData} />
					</div>
				)}
			</div>
		</>
	)
}

export default App
