const JoggingDataTable = ({ data }) => {
	if (data.length === 0) {
		return null
	}
	return (
		<table>
			<thead>
				<tr>
					<th>Дата</th>
					<th>Время</th>
					<th>Расстояние</th>
					<th>
						Максимальная <br /> скорость
					</th>
					<th>
						Минимальная
						<br /> скорость
					</th>
					<th>
						Средняя
						<br /> скорость
					</th>
					<th>
						Средний
						<br /> пульс
					</th>
				</tr>
			</thead>
			<tbody>
				{data.map((item, index) => (
					<tr key={index}>
						<td>{item.date}</td>
						<td>{item.time.toFixed(0)}</td>
						<td>{item.distance.toFixed(2)}</td>
						<td>{item.maxSpeed.toFixed(2)}</td>
						<td>{item.minSpeed.toFixed(2)}</td>
						<td>{item.averageSpeed.toFixed(2)}</td>
						<td>{item.averagePulse}</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default JoggingDataTable
