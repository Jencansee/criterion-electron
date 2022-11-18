export type matrixRow = number[];
export type matrixData = matrixRow[];

export interface Matrix {
	entryMatrix: matrixData;
	results: matrixRow;
	updateMatrix: React.Dispatch<React.SetStateAction<number[][]>>;
}

export interface MatrixProps {
	matrix: number[];
	result?: number;
  currentRowNumber: number;
	updateMatrix: React.Dispatch<React.SetStateAction<number[][]>>
}

export interface handlerProps extends Omit<MatrixProps, 'matrix' | 'result'> {
	e: React.ChangeEvent<HTMLInputElement>
	idx: number | string
}