import {
	CartesianGrid,
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts'

const CurrencyGraph = ({ data, lines, children }) => {
	console.log(lines)
	return (
		<div>
			<ResponsiveContainer width='100%' height={500} minWidth={200}>
				<LineChart data={data}>
					<CartesianGrid strokeDasharray='3 3' />
					<XAxis dataKey='date' />
					<YAxis />
					<Tooltip labelStyle={{ color: '#125b60' }} />
					<Legend />
					<Line
						key={lines[0]}
						type='monotone'
						dataKey={lines[0]}
						stroke='#8884d8'
						activeDot={{ r: 8 }}
					/>
					<Line
						key={lines[1]}
						type='monotone'
						dataKey={lines[1]}
						stroke='#5db17d'
						activeDot={{ r: 8 }}
					/>
				</LineChart>
			</ResponsiveContainer>
			{children}
		</div>
	)
}

export default CurrencyGraph