import { PUNCTUATION_MARKS } from "./definitions"

export interface IStringFunctions {
  capitalize: <T extends string> (s: T) => Capitalize<T>
  uncapitalize: <T extends string> (s: T) => Uncapitalize<T>
  uppercase: <T extends string> (s: T) => Uppercase<T>
  lowercase: <T extends string> (s: T) => Lowercase<T>
  first: <T extends string> (s: T) => string | undefined
  last: <T extends string> (s: T) => string | undefined
  isSentence: <T extends string> (s: T) => boolean
}

export const stringFunctions: IStringFunctions = {
	/**
   * A megadott `s` szövegnek az első betűjét nagy betűsre cseréli le.
   * @template T
   * @param {T} s A megadott szöveg.
   * @returns {Capitalize<T>} A szöveg nagy kezdőbetűvel.
   */
	capitalize<T extends string> (s: T): Capitalize<T> {
		const [firstLetter, ...rest] = s.split('')

		return `${ firstLetter.toLocaleUpperCase() }${ rest.join('') }` as Capitalize<T>
	},
	/**
   * Az `s` szöveg első betűjét kisbetűsre alakítja.
   * @template T
   * @param {T} s A megadott szöveg.
   * @returns {Uncapitalize<T>} Kis kezdőbetűvel kezdődő szöveg.
   */
	uncapitalize<T extends string> (s: T): Uncapitalize<T> {
		const [firstLetter, ...rest] = s.split('')
		return  `${ firstLetter.toLocaleLowerCase() }${ rest.join('') }` as Uncapitalize<T>
	},
	/**
   * A megadott `s` szöveg összes betűjét nagybetűsre cseréli.
   * @template T
   * @param {T} s A megadott szöveg.
   * @returns {Uppercase<T>} A nagybetűs `s` szöveg.
   */
	uppercase<T extends string> (s: T): Uppercase<T> {
		return `${ s.split('').map((letter) => letter.toLocaleUpperCase()).join('') }` as Uppercase<T>
	},
	/**
   * A szöveg összes karakterét kisbetűsre cseréli.
   * @template T
   * @param {T} s A megadott szöveg.
   * @returns {Lowercase<T>} A kisbetűs `s` szöveg.
   */
	lowercase<T extends string> (s: T): Lowercase<T> {
		return `${ s.split('').map((letter) => letter.toLocaleLowerCase()).join('') }` as Lowercase<T>
	},
	/**
    * Visszaadja az `s` szöveg első karakterét, üres string esetén undefined.
    * @template T
    * @param {T} s A megadott szöveg.
    * @returns {(string | undefined)} A szöveg első karaktere
    */
	first<T extends string> (s: T): string | undefined {
		return s.length > 0 ? s.charAt(0) : undefined
	},
	/**
    * Visszaadja az utolsó betűt az `s` string-ből, ha üres string akkor undefined-t add vissza.
    * @template T
    * @param {T} s A megadott szöveg.
    * @returns {(string | undefined)} Az utolsó betú `s` szövegben.
    */
	last<T extends string> (s: T): string | undefined {
		// s string karakterekre bontva
		const letters = s.split('')

		return letters.length > 0 ? utils.array.last(letters) : undefined
	},
	/**
    * Megvizsgálja, hogy a `s` szöveg mondat-e (nagy betűvel kezdődik és írás jellel végződik).
    * @template T
    * @param {T} s A megadott szöveg.
    * @returns {boolean} A megadott szöveg mondat.
    */
	isSentence<T extends string> (s: T): boolean {
		// Első karakter
		const firstLetter = stringFunctions.first(s)

		// Utolsó karakter
		const lastLetter  = stringFunctions.last(s)

		if (firstLetter && lastLetter) {
			return firstLetter === firstLetter.toLocaleUpperCase() && utils.array.includes(PUNCTUATION_MARKS, lastLetter)
		}

		return false
	}
}
