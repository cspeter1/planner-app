import { RandomOptions, Interval, InRangeOptions, ClampRange } from "./definitions"

export interface INumberFunctions {
  random: (min: number, max: number, options?: RandomOptions) => number
	inRange: (n: number, range: Interval, options: InRangeOptions) => boolean
	clamp: (n: number, range: ClampRange) => number
}

export const numberFunctions: INumberFunctions = {
	/**
   * Véletlenszám generálás (min és max érték is generálható).
   * @param {number} min A véletlen szám minimum értéke.
   * @param {number} max A maximális véletlen szám.
   * @param {RandomOptions} [options] A random szám generálásának beállítása.
   * @returns {number} A véletlen szám.
   */
	random(min: number, max: number, options?: RandomOptions): number {
		// Van megadott beállítás
		if (options) {
			const { isFloating, precision = 2 } = options

			// Nem egész szám kell
			if (isFloating) {
				return Number((Math.random() * (max - min + 1) + min).toFixed(precision))
			}
			else {
				return Math.round(Math.random() * (max - min + 1) + min)
			}
		}
		// Nincs megadott beállítás
		else {
			return Math.round(Math.random() * (max - min + 1) + min)
		}
	},
	/**
	 * A megadott `n` szám benne van az `range` intervallumban.
	 * @param {number} n A vizsgálandó szám.
	 * @param {Interval} range A megadott intervallum
	 * @param {InRangeOptions} [options={ includeMin: true, includeMax: false }] Az intervallum beállításai
	 * @returns {boolean} A szám benne van az intervallumban.
	 */
	inRange(n: number, range: Interval, options: InRangeOptions = { includeMin: true, includeMax: false }): boolean {
		// A megadott intervallum
		const { min, max } = range

		// Beállítások
		const { includeMin, includeMax } = options

		const isMinValid = includeMin ? n >= min : n > min
		const isMaxValid = includeMax ? n <= max : n > max

		return isMinValid && isMaxValid
	},
	/**
	 * Ha `n` kisebb mint a range első értéke akkor azt adja vissza, különben ha nagyobb mint a második értéke akkor azt, különben pedig `n`-t add vissza.
	 * @param {number} n A megadott szám,
	 * @param {ClampRange} range A minimum és maximum szám.
	 * @returns {number} A megfelelő szám.
	 */
	clamp(n: number, range: ClampRange): number {
		const [ min, max ] = range

		return n <= min ? min : n >= max ? max : n
	}
}
