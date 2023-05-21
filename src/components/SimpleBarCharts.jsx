import React from 'react';
import {
	Bar,
	BarChart,
	CartesianGrid,
	Legend,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';

const data = [
	{ name: 'vehículos particulares', age: 2023, number: 2000000 },
	{ name: 'Motocicletas', age: 2023, number: 497000 },
	{ name: 'Bicicletas', age: 2023, number: 1800000 },
	{ name: 'Scooter y motos electricas', age: 2023, number: 40000 },
	{ name: 'transporte publico', age: 2023, number: 5193 },
];

const Simplebarcharts = () => {
	return (
		<ResponsiveContainer width='100%' aspect={2}>
			<BarChart
				data={data}
				width={500}
				height={300}
				margin={{
					top: 5,
					right: 30,
					left: 20,
					bottom: 5,
				}}
			>
				<CartesianGrid strokeDasharray='4 1 2' />
				<XAxis dataKey='name' />
				<YAxis />
				<Tooltip />
				<Legend />
				<Bar dataKey='number' fill='#166801' />
				<Bar dataKey='age' fill='#1EE3C9' />
			</BarChart>
		</ResponsiveContainer>
	);
};

export default Simplebarcharts;
