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

const Graph = ({ data, children, lines }) => {
	return (
		<div>
			<ResponsiveContainer width='100%' height={500}>
				<LineChart data={data}>
					<Tooltip labelStyle={{ color: '#125b60' }} />
					<CartesianGrid strokeDasharray='3 3' />
					<XAxis dataKey='date' />
					<YAxis domain={[70, 120]} />
					<Tooltip />
					<Legend />
					<Line
						type='monotone'
						dataKey={lines[0]}
						stroke='#8884d8'
						activeDot={{ r: 8 }}
					/>
					<Line
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

export default Graph
