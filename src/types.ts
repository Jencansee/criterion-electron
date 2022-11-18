export type matrixData = number[][];

export interface Matrix {
	entryMatrix: matrixData;
	results: number[];
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