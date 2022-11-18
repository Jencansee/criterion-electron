import { SyntheticEvent } from 'react';

const Dropdown = ({
	handleAlgorithmPick,
}: {
	handleAlgorithmPick: (e: SyntheticEvent<HTMLSelectElement>) => void;
}) => {
	return (
		<select
			className="rounded-md ml-5 bg-purple-600 p-2 px-4 py-2 text-base font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
			name="cars"
			id="cars"
			onChange={(e) => handleAlgorithmPick(e)}
		>
			<option value="1">Стратегия № 1</option>
			<option value="2">Стратегия № 2</option>
			<option value="3">Стратегия № 3</option>
			<option value="4">Стратегия № 4</option>
		</select>
	);
};

export default Dropdown;
