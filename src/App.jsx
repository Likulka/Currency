import { useEffect, useState } from 'react'
import './App.css'
import CurrencyDataTable from './components/CurrencyDataTable'
import CurrencyGraph from './components/CurrencyGraph'
import FileUploader from './components/FileUploader'
import analyzeData from './utils/analyzeData.js'

function App() {
	const [currencyData, setCurrencyData] = useState([])
	const [analysis, setAnalysis] = useState(null)

	const renderAnalysis = () => {
		if (!analysis) return null
		return (
			<table>
				<thead>
					<tr>
						<th>Валюта</th>
						<th>Тип изменения</th>
						<th>Значение</th>
						<th>Дата</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>EUR</td>
						<td>MAX ▲</td>
						<td>{analysis.maxGain.eur.value.toFixed(4)}</td>
						<td>{analysis.maxGain.eur.date}</td>
					</tr>
					<tr>
						<td>EUR</td>
						<td>MAX ▼</td>
						<td>{analysis.maxLoss.eur.value.toFixed(4)}</td>
						<td>{analysis.maxLoss.eur.date}</td>
					</tr>
					<tr>
						<td>USD</td>
						<td>MAX ▲</td>
						<td>{analysis.maxGain.usd.value.toFixed(4)}</td>
						<td>{analysis.maxGain.usd.date}</td>
					</tr>
					<tr>
						<td>USD</td>
						<td>MAX ▼</td>
						<td>{analysis.maxLoss.usd.value.toFixed(4)}</td>
						<td>{analysis.maxLoss.usd.date}</td>
					</tr>
				</tbody>
			</table>
		)
	}

	useEffect(() => {
		if (currencyData.length > 1) {
			setAnalysis(analyzeData(currencyData))
		}
	}, [currencyData])

	return (
		<>
			<FileUploader setCurrencyData={setCurrencyData} />
			<div className='data-wrapper'>
				<CurrencyDataTable data={currencyData} />
				{currencyData.length !== 0 && (
					<CurrencyGraph data={currencyData}>{renderAnalysis()}</CurrencyGraph>
				)}
			</div>
		</>
	)
}

export default App
