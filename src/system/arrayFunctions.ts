type TIterateeFunction<T> = (i: number) => T

export interface IArrayFunctions {
  times: <T>(n: number, iteratee: TIterateeFunction<T>) => Array<T>
}

export const arrayFunctions = {
	/**
   * Létrehoz `n` elemű tömböt, amit `iteratee` függvény segítségével tölt fel.
   * @template T
   * @param {number} n Hány elemű legyen a tömb.
   * @param {TIterateeFunction<T>} iteratee A függvény az elemek generálásához.
   * @returns {Array<T>} A létrehozott tömb.
   */
	times<T> (n: number, iteratee: TIterateeFunction<T>): Array<T> {
		return new Array<number>(n).map((i) => iteratee(i))
	}
}
