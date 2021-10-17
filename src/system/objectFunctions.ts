export interface IObjectFunctions {
  getKeysRecursive: <T extends Object>(object: T, prefix?: string, res?: Array<string>) => Array<string>
  getValuesByKey: <T extends Object>(object: T, key: string) => T
}

export const objectFunctions: IObjectFunctions = {
	/**
   * Visszaadja `object` összes kulcsát rekúrzivan.
   * @template T
   * @param {T} object A megadott object.
   * @param {string} [prefix=''] A kulcs előtt található prefix.
   * @param {string[]} [res=[]] A eddig összegyűjtött elemek.
   * @returns {string[]} Az `object` kulcsai rekúrzivan.
   */
	getKeysRecursive<T> (object: T, prefix = '', res: Array<string> = []): Array<string> {
		Object.keys(object).forEach((key) => {
			// Az adott kulcson object van, rekúrzívan még egy kör
			if (typeof object[key] === "object") {
				objectFunctions.getKeysRecursive(object[key], `${ prefix }.${ key }`)
			} else {
				// Eredményhez hozzáadás
				res.push(`${ prefix }.${ key }`)
			}
		})

		return res
	},
	getValuesByKey<T extends Object>(object: T, key: string): T {
		const keys = key.split('.')

		if (keys.length === 1) {
			return object[key]
		}
		else {
			return keys.reduce((acc, curr) => acc[curr], object)
		}
	}
}
