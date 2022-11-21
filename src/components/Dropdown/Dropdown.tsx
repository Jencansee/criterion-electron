import { useState } from "react";
import ReactDropdown, { Option } from "react-dropdown";
import "./style.css";

const Dropdown = ({
	handleAlgorithmPick,
}: {
	handleAlgorithmPick: (option: Option) => void;
}) => {
	const options = [
		{ value: "1", label: "Стратегия №1" },
		{ value: "2", label: "Стратегия №2" },
		{ value: "3", label: "Стратегия №3" },
		{ value: "4", label: "Стратегия №4" },
	];

	const [option, setOption] = useState<Option>({
		value: "1",
		label: "Стратегия №1",
	});

	const handleSelect = (option: Option) => {
		setOption(option);
		handleAlgorithmPick(option);
	};

	return (
		<ReactDropdown
			className="cursor-default rounded-md ml-5 bg-purple-600 text-base font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
			controlClassName="p-2 px-4"
			options={options}
			onChange={handleSelect}
			placeholder={String(option.label)}
			value={option}
		/>
	);
};

export default Dropdown;
