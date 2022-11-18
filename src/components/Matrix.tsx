import { handlerProps, Matrix, MatrixProps } from 'types';
import { Result } from './Button';
import Input from './Input';

const handleInputType = ({ e, idx, currentRowNumber, updateMatrix }: handlerProps) => {
	updateMatrix(prev => {
		const newMatrix = [...prev];

		newMatrix[currentRowNumber - 1][idx] = e.target.value && Number(e.target.value);

		return newMatrix
	})
};

const MatrixRow = ({ currentRowNumber, matrix, result, updateMatrix }: MatrixProps) => {
  return (
    <div>
      <div className="mb-5 flex items-center">
        <p className="mr-10 text-lg font-semibold cursor-default select-none">{`X${currentRowNumber}`}</p>
        <div className="">
          <div className="grid grid-cols-5 flex-wrap gap-5">
            {matrix.map((num, idx) => (
              <Input
                key={`matrixRowChlqq-${idx}${currentRowNumber}`}
                number={num}
								handleInputType={(e) => handleInputType({e, idx, currentRowNumber, updateMatrix})}
              />
            ))}
            <Result result={result} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Matrix = ({
  entryMatrix,
  results,
	updateMatrix
}: Matrix) => {
  return (
    <>
      <div className="mb-5 flex">
        <p className="mr-10 inline flex-grow-0 text-lg font-semibold opacity-0 cursor-default">
          X1
        </p>
        <div className="grid flex-grow grid-cols-5 flex-wrap gap-5">
          <p className="text-lg font-semibold cursor-default select-none">S1</p>
          <p className="text-lg font-semibold cursor-default select-none">S2</p>
          <p className="text-lg font-semibold cursor-default select-none">S3</p>
          <p className="text-lg font-semibold cursor-default select-none">S4</p>
          <p className="text-lg font-semibold cursor-default select-none">S5</p>
        </div>
      </div>
      {entryMatrix.map((row, idx) => {
        return (
          <MatrixRow
            result={results[idx]}
            key={`matrixRow${idx}`}
            currentRowNumber={idx + 1}
            matrix={row}
						updateMatrix={updateMatrix}
          />
        );
      })}
    </>
  );
};

export default Matrix;
