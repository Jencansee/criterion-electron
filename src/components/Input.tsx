const Input = ({
	number,
	handleInputType,
}: {
	number: number;
	handleInputType: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
	return (
		<input
			className="w-full text-md rounded-lg border-2 border-stone-400 bg-stone-400 py-3 px-4 leading-tight text-gray-700 focus:border-purple-400 focus:bg-stone-300 focus:outline-none"
			type="number"
			value={number}
			onChange={handleInputType}
		/>
	);
};

export default Input;
