/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-plusplus */

import { matrixData, matrixRow } from "types";


const laplace = (data: matrixData) => {
  const result = [];

  for (let i = 0; i < data.length; i++) {
    let max = data[i][0];

    for (let j = 0; j < data[i].length; j++) {
      if (max < data[i][j]) max = data[i][j];
    }

    result.push(max);
  }

  return result;
};

const minMax = (data: matrixData) => {
  const result = [];

  for (let i = 0; i < data.length; i++) {
    let min = data[i][0];

    for (let j = 0; j < data[i].length; j++) {
      if (min > data[i][j]) min = data[i][j];
    }

    result.push(min);
  }

  return result;
};

const savage = (initialData: matrixData) => {
	const result = [];

	//* clone data matrix
	// const data = JSON.parse(JSON.stringify(initialData));
	const data = initialData.map((row) => row.map((cell) => cell));

	/** расчет max */
	for (let j = 0; j < data.length; j++) {
		let max = data[0][j];

		for (let i = 0; i < data[j].length; i++) {
			if (max < data[i][j]) max = data[i][j];
		}

		for (let k = 0; k < data[j].length; k++) {
			//! remove this line
			data[k][j] = max - data[k][j];
		}
	}

	/** расчет min */
	for (let i = 0; i < data.length; i++) {
		let min = data[i][0];

		for (let j = 0; j < data.length; j++) {
			if (min > data[i][j]) min = data[i][j];
		}

		result.push(min);
	}

	console.info('* Savage criterion');
	return result;
};

const hurwitz = (data: matrixData) => {
  const result = [];
  const opt = 0.83;

  for (let i = 0; i < data.length; i++) {
    let min = data[i][0];
    let max = data[i][0];

    for (let j = 0; j < data.length; j++) {
      if (max < data[i][j]) max = data[i][j];
      if (min > data[i][j]) min = data[i][j];
    }

    result.push(Number((opt * max + (min - opt * min)).toFixed(2)));
  }

  return result;
};

interface algoRefObject {
  [key: number | string]: (data: matrixData) => matrixRow;
}
const ALGORITHMS: algoRefObject = {
  1: laplace,
  2: minMax,
  3: savage,
  4: hurwitz,
};

export default ALGORITHMS;
