import { SyntheticEvent } from "react";

const Button = ({
	handleClick,
}: {
	handleClick: (e: SyntheticEvent<HTMLButtonElement>) => void;
}) => {
	return (
		<button
			className="ml-5 flex items-center justify-center rounded-md border border-transparent bg-purple-600 px-4 py-2 text-base font-medium text-white hover:bg-purple-700"
			onClick={handleClick}
		>
			Расчитать
		</button>
	);
};

export const Result = ({ result }: { result?: string | number }) => {
	return (
		<div className="flex items-center justify-center rounded-md border border-transparent bg-white bg-opacity-70 px-4 py-2 font-medium text-black">
			{result}
		</div>
	);
};

export default Button;
