import { useEffect, useState } from 'react';
import api from './services/api';
import { Box } from '@chakra-ui/layout';

function App() {
	const [data, setData] = useState([]);

	const getData = async () => {
		try {
			const { data } = await api.get();
			setData(data.result);
			console.log('pets', data.result);
		} catch (error) {
			console.log('error', error);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
				{data.map((element) => (
					<Box key={element._id}>{element.name}</Box>
				))}
			</header>
		</div>
	);
}

export default App;
