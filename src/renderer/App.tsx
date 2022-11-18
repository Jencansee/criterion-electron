import { useState } from 'react';
import 'tailwindcss/tailwind.css';

import Matrix from 'components/Matrix';
import Dropdown from 'components/Dropdown/Dropdown';
import Button from 'components/Button';
import ALGORITHMS from '../utils/algo';
import toast, { Toaster } from 'react-hot-toast';
import { matrixData, matrixRow } from 'types';

export default function App() {
	const [algorithm, setAlgorithm] = useState('1');
  const [result, setResult] = useState<matrixRow>([]);
	const [matrix, setMatrix] = useState<matrixData>([
    [16, 12, 10, 14],
    [19, 17, 9, 18],
    [13, 18, 15, 9],
    [17, 14, 11, 15],
  ]);


	const handleEmptyCols = (matrix: matrixData) => {
		for (let i = 0; i < matrix.length; i++) {
			for (let j = 0; j < matrix[i].length; j++) {
				matrix[i][j] = Number(matrix[i][j]);
			}
		}
	}

  const handleCalculator = () => {
    handleEmptyCols(matrix);
		const execFn = ALGORITHMS[algorithm];

		try {
			setResult(
				execFn(matrix)
			);
			
			toast.success(`Расчет стратегии №${algorithm} завершен`);
		}
		catch {
			toast.error('Произошла ошибка');
		}
  };

  return (
    <>
      <main className="mx-auto flex h-screen max-w-6xl flex-col justify-center p-20">
        <Matrix entryMatrix={matrix} results={result} updateMatrix={setMatrix}/>

        <div className="flex justify-center mt-4">
          <Button handleClick={handleCalculator} />
          <Dropdown
            handleAlgorithmPick={({ value }) => setAlgorithm(value)}
          />
        </div>

        <b className="m-8 text-xl">Оптимизм = 0,83</b>
				<p className="opacity-40 text-center select-none">© Калашников Павел</p>

				<Toaster
					position="top-right"
					toastOptions={{
						duration: 4000
					}}
				/>
      </main>
    </>
  );
}
