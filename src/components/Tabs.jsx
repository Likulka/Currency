import React from 'react'

const Tabs = ({ activeTab, setActiveTab }) => {
	return (
		<div className='tabs'>
			<button
				className={activeTab === 'jogging' ? 'active' : ''}
				onClick={() => setActiveTab('jogging')}
			>
				Пробежки
			</button>
			<button
				className={activeTab === 'currency' ? 'active' : ''}
				onClick={() => setActiveTab('currency')}
			>
				Валюты
			</button>
		</div>
	)
}

export default Tabs
