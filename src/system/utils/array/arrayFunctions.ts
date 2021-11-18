import type { Collection, Flat, RecursiveArray } from '../../../../types/types'
import type { Narrowable, TIterateeFunction, UniqueArray } from './definitions'

export interface IArrayFunctions {
   times: <T>(n: number, iteratee: TIterateeFunction<T>) => Array<T>
   flatten: <T>(array: ArrayLike<Collection<T>>) => Array<T>
   flattenDeep: <T>(array: RecursiveArray<T>) => Array<Flat<T>>
   last: <T> (array: ReadonlyArray<T>) => T | undefined
   lastIndex: <T> (array: ReadonlyArray<T>) => number
   includes: <T>(array: ReadonlyArray<T>, search: unknown, fromIndex?: number) => boolean
   unique: <N extends Narrowable, A extends [] | ReadonlyArray<N> & UniqueArray<A, A>> (array: ReadonlyArray<N>) => A
   isUnique: <N extends Narrowable>(array: ReadonlyArray<N>) => boolean
   random: <U, T extends ReadonlyArray<U>>(array: T) => U
   randomIndex: <T> (array: ReadonlyArray<T>) => number
   isEmpty: <T> (array: ReadonlyArray<T>) => boolean
}

export const arrayFunctions: IArrayFunctions = {
	/**
   * Létrehoz `n` elemű tömböt, amit `iteratee` függvény segítségével tölt fel.
   * @template T
   * @param {number} n Hány elemű legyen a tömb.
   * @param {TIterateeFunction<T>} iteratee A függvény az elemek generálásához.
   * @returns {Array<T>} A létrehozott tömb.
   */
	times<T> (n: number, iteratee: TIterateeFunction<T>): Array<T> {
		return Array.from({ length: n }).map((_, i) => iteratee(i))
	},
	/**
   * A megadott `array` tömböt egy szinttel laposítja.
   * @template T
   * @template A
   * @param {A} array A megadott több dimenziós tömb.
   * @returns {Array<T>} A kilaposított `array` tömb.
   */
	flatten<T>(array: ArrayLike<Collection<T>>): Array<T> {
		return Array.from(array).reduce((acc: Array<T>, curr: Collection<T>) => acc.concat(curr), [])
	},
	/**
   * Egy dimenziós tömböt csinál a megadott `array` rekúrzív tömbből.
   * @template T
   * @param {RecursiveArray<T>} array A megadott tömb.
   * @returns {Array<Flat<T>>} A kilapított tömb.
   */
	flattenDeep<T>(array: RecursiveArray<T>): Array<Flat<T>> {
		let result = arrayFunctions.flatten(array as Array<Collection<T>>)

		while (result.some((resultElem) => Array.isArray(resultElem))) {
			result = arrayFunctions.flatten(result)
		}

		return result as Array<Flat<T>>
	},
	/**
   * Visszaadja a megadott `array` utolsó elemét. Üres tömb esetén undefine-t ad vissza.
   * @template T
   * @param {ReadonlyArray<T>} array A megadott tömb.
   * @returns {(T | undefined)} Az `array` utolsó eleme, vagy undefined
   */
	last<T>(array: ReadonlyArray<T>): T | undefined {
		return array.length > 0 ? array[ array.length - 1 ] : undefined
	},
	/**
   * Visszaadja az `array` utolsó indexét, üres tömb esetén -1-et ad vissza.
   * @template T
   * @param {ReadonlyArray<T>} array A megadott tömb.
   * @returns {number}
   */
	lastIndex<T>(array: ReadonlyArray<T>): number {
		return array.length - 1
	},
	/**
   * Megvizsgálja, hogy a `search` elem benne van az `array` tömbben.
   * @template T
   * @param {ReadonlyArray<T>} array A megadott tömb.
   * @param {unknown} search A keresendő elem.
   * @param {number} [fromIndex] Keresés kezdő indexe.
   * @returns {boolean} Az `search` benne van `array` tömbben.
   */
	includes<T> (array: ReadonlyArray<T>, search: unknown, fromIndex?: number): boolean {
		return array.includes(search as T, fromIndex)
	},
	/**
    * Egyedi tömböt hoz létre a megadott `array` tömbből.
    * @template N
    * @template A
    * @param {ReadonlyArray<N>} array A megadott tömb.
    * @returns {A} Az `array`-ból generált egyedi elemeket tartalmazó tömb.
    */
	unique<N extends Narrowable, A extends [] | ReadonlyArray<N> & UniqueArray<A, A>> (array: ReadonlyArray<N>): A {
		return array.filter((arrayElem, i) => array.indexOf(arrayElem) === i) as A
	},
	/**
    * Megvizsgálja, hogy a `array` tömb minden tagja egyedi-e.
    * @template N
    * @param {ReadonlyArray<N>} array A megadott tömb.
    * @returns {boolean} A tömb minden tagja egyedi.
    */
	isUnique<N extends Narrowable>(array: ReadonlyArray<N>): boolean {
		return arrayFunctions.unique(array).length === array.length
	},
   /**
    * Visszaad egy véletlenszerű elemet `array` tömbből.
    * @template U
    * @template T
    * @param {T} array A megadott tömb.
    * @returns {U} Az `array` tömbből véletlenszűen kiválasztott elem.
    */
   random<U, T extends ReadonlyArray<U>> (array: T): U {
      return array[arrayFunctions.randomIndex(array)]
   },
   /**
    * Visszaad egy véletlen indexet `array` tömbből. Ha üres tömb akkor -1-et ad vissza.
    * @template T
    * @param {ReadonlyArray<T>} array A megadott tömb.
    * @returns {number} A véletlenszerű index.
    */
   randomIndex<T> (array: ReadonlyArray<T>): number {
      return arrayFunctions.isEmpty(array) ? -1 : utils.number.random(0, arrayFunctions.lastIndex(array))
   },
   /**
    * Meghatározza, hogy a tömb üres-e.
    * @template T
    * @param {ReadonlyArray<T>} array A megadott tömb.
    * @returns {boolean} A tömb üres.
    */
   isEmpty<T> (array: ReadonlyArray<T>): boolean {
      return array.length === 0
   }
}
