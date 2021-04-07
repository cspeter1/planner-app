import { getMonth, getMonthName, IMonth } from "./Months"
import { isLeapYear } from "./Years"

interface INameDay {
  date: IMonth
  names: string[]
}

export const NAME_DAYS: INameDay[] = [
	// Január
	{ date: { month: 'Január', days: 1 }, names: ['Alpár', 'Fruzsina', 'Bazil'] },
	{ date: { month: 'Január', days: 2 }, names: ['Ábel', 'Gergely', 'Vazul'] },
	{ date: { month: 'Január', days: 3 }, names: ['Genovéva', 'Gyöngyvér', 'Benjámin', 'Dzsenifer'] },
	{ date: { month: 'Január', days: 4 }, names: ['Titusz', 'Leona', 'Angéla'] },
	{ date: { month: 'Január', days: 5 }, names: ['Simon', 'Emília'] },
	{ date: { month: 'Január', days: 6 }, names: ['Gáspár', 'Menyhért', 'Boldizsár'] },
	{ date: { month: 'Január', days: 7 }, names: ['Attila', 'Etele', 'Ramóna', 'Rajmund', 'Bálint'] },
	{ date: { month: 'Január', days: 8 }, names: ['Gyöngyvér', 'Keve', 'Szeverin', 'Szörény'] },
	{ date: { month: 'Január', days: 9 }, names: ['Marcell', 'Juliánusz'] },
	{ date: { month: 'Január', days: 10 }, names: ['Melánia', 'Vilmos', 'Vilma'] },
	{ date: { month: 'Január', days: 11 }, names: ['Ágota', 'Honoráta'] },
	{ date: { month: 'Január', days: 12 }, names: ['Ernő', 'Erneszta', 'Tatjána'] },
	{ date: { month: 'Január', days: 13 }, names: ['Veronika', 'Csongor', 'Yvett'] },
	{ date: { month: 'Január', days: 14 }, names: ['Bódog', 'Félix'] },
	{ date: { month: 'Január', days: 15 }, names: ['Lóránt', 'Loránd', 'Pál'] },
	{ date: { month: 'Január', days: 16 }, names: ['Gusztáv', 'Marcell'] },
	{ date: { month: 'Január', days: 17 }, names: ['Antal', 'Antónia'] },
	{ date: { month: 'Január', days: 18 }, names: ['Margit', 'Piroska'] },
	{ date: { month: 'Január', days: 19 }, names: ['Sára', 'Márta', 'Márió'] },
	{ date: { month: 'Január', days: 20 }, names: ['Fábián', 'Sebestyén'] },
	{ date: { month: 'Január', days: 21 }, names: ['Ágnes', 'Agnéta'] },
	{ date: { month: 'Január', days: 22 }, names: ['Vince', 'Artúr'] },
	{ date: { month: 'Január', days: 23 }, names: ['Zelma', 'Rajmund', 'Emerencia', 'Emese'] },
	{ date: { month: 'Január', days: 24 }, names: ['Timót', 'Ferenc'] },
	{ date: { month: 'Január', days: 25 }, names: ['Pál', 'Henrik'] },
	{ date: { month: 'Január', days: 26 }, names: ['Vanda', 'Paula', 'Timóteusz'] },
	{ date: { month: 'Január', days: 27 }, names: ['Angéla', 'Angelika'] },
	{ date: { month: 'Január', days: 28 }, names: ['Károly', 'Karola', 'Tamás'] },
	{ date: { month: 'Január', days: 29 }, names: ['Adél', 'Valér'] },
	{ date: { month: 'Január', days: 30 }, names: ['Martina', 'Gerda', 'Jácinta'] },
	{ date: { month: 'Január', days: 31 }, names: ['Marcella', 'János'] },

	// Február
	{ date: { month: 'Február', days: 1 }, names: ['Ignác', 'Brigitta', 'Kincső', 'Renátó'] },
	{ date: { month: 'Február', days: 2 }, names: ['Karolina', 'Karola', 'Aida'] },
	{ date: { month: 'Február', days: 3 }, names: ['Balázs', 'Oszkár', 'Celerina'] },
	{ date: { month: 'Február', days: 4 }, names: ['Ráhel', 'Csenge', 'Veronika', 'András'] },
	{ date: { month: 'Február', days: 5 }, names: ['Ágota', 'Ingrid', 'Etelka', 'Léda'] },
	{ date: { month: 'Február', days: 6 }, names: ['Dorottya', 'Dóra', 'Pál'] },
	{ date: { month: 'Február', days: 7 }, names: ['Tódor', 'Rómeó', 'Richárd'] },
	{ date: { month: 'Február', days: 8 }, names: ['Aranka', 'Jeromos'] },
	{ date: { month: 'Február', days: 9 }, names: ['Abigél', 'Alex', 'Apollónia'] },
	{ date: { month: 'Február', days: 10 }, names: ['Elvira'] },
	{ date: { month: 'Február', days: 11 }, names: ['Bertold', 'Marietta'] },
	{ date: { month: 'Február', days: 12 }, names: ['Lívia', 'Lídia', 'Eulália'] },
	{ date: { month: 'Február', days: 13 }, names: ['Ella', 'Linda', 'Levente', 'Katalin'] },
	{ date: { month: 'Február', days: 14 }, names: ['Bálint', 'Valentin', 'Cirill', 'Metód'] },
	{ date: { month: 'Február', days: 15 }, names: ['Kolos', 'Györgyi', 'Georgina'] },
	{ date: { month: 'Február', days: 16 }, names: ['Julianna', 'Lilla', 'Filippa'] },
	{ date: { month: 'Február', days: 17 }, names: ['Donát'] },
	{ date: { month: 'Február', days: 18 }, names: ['Bernadett', 'Simon', 'Zenkő'] },
	{ date: { month: 'Február', days: 19 }, names: ['Zsuzsanna', 'Eliza', 'Konrád'] },
	{ date: { month: 'Február', days: 20 }, names: ['Aladár', 'Álmos', 'Leó'] },
	{ date: { month: 'Február', days: 21 }, names: ['Eleonóra', 'Zelmira', 'Péter'] },
	{ date: { month: 'Február', days: 22 }, names: ['Gerzson', 'Margit', 'Zétény'] },
	{ date: { month: 'Február', days: 23 }, names: ['Alfréd', 'Polikárp', 'Mirtill'] },
	{ date: { month: 'Február', days: 24 }, names: ['Mátyás', 'Jázmin'] },
	{ date: { month: 'Február', days: 25 }, names: ['Géza', 'Cézár', 'Vanda'] },
	{ date: { month: 'Február', days: 26 }, names: ['Viktor', 'Győző'] },
	{ date: { month: 'Február', days: 27 }, names: ['Ákos', 'Bátor', 'Gábor', 'Edina'] },
	{ date: { month: 'Február', days: 28 }, names: ['Elemér', 'Oszvald', 'Román'] },
]

export function getNameDay(date: Date): string[] {
	const month = getMonth(getMonthName(date))

	// Ha szökőév van,
	if (isLeapYear(date.getFullYear())) {
		//február, és a dátum nagyobb egyenlő 24 akkor az előző napi névnapok aktuálisak, 24. nincs
		if (month.month === 'Február' && month.days >= 24) {
			// 24. van, nincs névnap
			if (month.days === 24) {
				return []
			}
			// Több mint 24, az előző napi névnapokat kérjük el
			else {
				month.days--
			}
		}
	}

	const foundNameDay = NAME_DAYS.find((nameDay) => {
		return nameDay.date.days === month.days && nameDay.date.month === month.month
	}) as INameDay

	return foundNameDay.names
}
