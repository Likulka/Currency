const CurrencyAnalyze = ({ data }) => {
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
					<td>{data.maxGain.eur.value.toFixed(4)}</td>
					<td>{data.maxGain.eur.date}</td>
				</tr>
				<tr>
					<td>EUR</td>
					<td>MAX ▼</td>
					<td>{data.maxLoss.eur.value.toFixed(4)}</td>
					<td>{data.maxLoss.eur.date}</td>
				</tr>
				<tr>
					<td>USD</td>
					<td>MAX ▲</td>
					<td>{data.maxGain.usd.value.toFixed(4)}</td>
					<td>{data.maxGain.usd.date}</td>
				</tr>
				<tr>
					<td>USD</td>
					<td>MAX ▼</td>
					<td>{data.maxLoss.usd.value.toFixed(4)}</td>
					<td>{data.maxLoss.usd.date}</td>
				</tr>
			</tbody>
		</table>
	)
}

export default CurrencyAnalyze
