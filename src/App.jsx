import { useState } from 'react'
import './App.css'
import CurrencyDataTable from './components/CurrencyDataTable'
import FileUploader from './components/FileUploader'
import JoggingDataTable from './components/JoggingDataTable'
import JoggingGraph from './components/JoggingGraph'
import { distanceSum } from './utils/calculateWeekendDistance'

function App() {
	const [currencyData, setCurrencyData] = useState([])
	const [joggingData, setJoggingData] = useState([])

	return (
		<>
			<div className='uploader'>
				<FileUploader
					setCurrencyData={setCurrencyData}
					setJoggingData={setJoggingData}
				/>
			</div>
			<div className='data-wrapper'>
				<CurrencyDataTable data={currencyData} />
				{joggingData.length != 0 && (
					<div>
						<JoggingGraph data={joggingData} />{' '}
						<p>
							Количество км в выходные = <span>{distanceSum(joggingData)}</span>
						</p>{' '}
						<JoggingDataTable data={joggingData} />
					</div>
				)}
			</div>
		</>
	)
}

export default App
