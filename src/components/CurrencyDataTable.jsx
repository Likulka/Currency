const CurrencyDataTable = ({ data }) => {
	if (data.length === 0) {
		return null
	}

	return (
		<table>
			<thead>
				<tr>
					<th>Дата</th>
					<th>USD</th>
					<th>EUR</th>
				</tr>
			</thead>
			<tbody>
				{data.map((item, index) => (
					<tr key={index}>
						<td>{item.date}</td>
						<td>{item.usd.toFixed(4)}</td>
						<td>{item.eur.toFixed(4)}</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default CurrencyDataTable
