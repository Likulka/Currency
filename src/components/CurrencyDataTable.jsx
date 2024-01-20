const CurrencyDataTable = ({ data }) => {
	console.log('j3r3df')
	if (!data || data.length === 0) {
		return null
	}

	return (
		<table>
			<thead>
				<tr>
					<th>Дата</th>
					<th>EUR</th>
					<th>USD</th>
				</tr>
			</thead>
			<tbody>
				{data.map((item, index) => (
					<tr key={index}>
						<td>{item.date}</td>
						<td>{item.rate1.toFixed(4)}</td>
						<td>{item.rate2.toFixed(4)}</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default CurrencyDataTable
