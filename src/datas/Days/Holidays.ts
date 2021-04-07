import { IEvent } from "./Days"
import { getMonthName, IMonth } from "./Months"
import { isLeapYear } from "./Years"

export interface IHoliday {
  date: IMonth
  event: IEvent
  isWordBreak: boolean
}

export const fixHolidays: readonly IHoliday[] = [
	{
		date: {
			month: 'Január', days: 1
		}, event: {
			name:'Újév', icon: 'cheers'
		}, isWordBreak: true
	},
	{
		date: {
			month: 'Január', days: 22
		}, event: {
			name: 'Magyar kultúra napja'
		}, isWordBreak: false
	},
	{
		date: {
			month: 'Február', days: 1
		}, event: {
			name: 'A köztársaság napja'
		}, isWordBreak: false
	},
	{
		date: {
			month: 'Február', days: 25
		}, event: {
			name: 'A kommunista diktatúrák áldozatainak emléknapja'
		}, isWordBreak: false
	},
	{
		date: {
			month: 'Március', days: 15
		}, event: {
			name: 'Az 1848-as forradalom ünnepe'
		}, isWordBreak: true
	},
	{
		date: {
			month: 'Április', days: 16
		}, event: {
			name: 'A holokauszt áldozatainak emléknapja'
		}, isWordBreak: false
	},
	{
		date: {
			month: 'Május', days: 1
		}, event: {
			name: 'A munka ünnepe'
		}, isWordBreak: true
	},
	{
		date: {
			month: 'Június', days: 4
		}, event: {
			name: 'A nemzeti összetartozás napja'
		}, isWordBreak: false
	},
	{
		date: {
			month: 'Június', days: 16
		}, event: {
			name: 'Nagy Imre emléknap'
		}, isWordBreak: false
	},
	{
		date: {
			month: 'Június', days: 19
		}, event: {
			name: 'A független Magyarország napja'
		}, isWordBreak: false
	},
	{
		date: {
			month: 'Július', days: 22
		}, event: {
			name: 'A nándorfehérvári diadal emléknapja'
		}, isWordBreak: false
	},
	{
		date: {
			month: 'Augusztus', days: 20
		}, event: {
			name: 'Az államalapítás ünnepe'
		}, isWordBreak: true
	},
	{
		date: {
			month: 'Augusztus', days: 23
		}, event: {
			name: 'A totalitárius diktatúrák áldozatainak európai emléknapja'
		}, isWordBreak: false
	},
	{
		date: {
			month: 'Október', days: 6
		}, event: {
			name: 'Az aradi vértanúk emléknapja'
		}, isWordBreak: false
	},
	{
		date: {
			month: 'Október', days: 23
		}, event: {
			name: 'Az 1956-os forradalom ünnepe'
		}, isWordBreak: true
	},
	{
		date: {
			month: 'Október', days: 31
		}, event: {
			name: 'Halloween', icon: 'ghost'
		}, isWordBreak: false
	},
	{
		date: {
			month: 'November', days: 1
		}, event: {
			name: 'Mindenszentek'
		}, isWordBreak: true
	},
	{
		date: {
			month: 'November', days: 2
		}, event: {
			name: 'Halottak napja'
		}, isWordBreak: false
	},
	{
		date: {
			month: 'November', days: 4
		}, event: {
			name: 'Az emlékezés napja'
		}, isWordBreak: false
	},
	{
		date: {
			month: 'November', days: 13
		}, event: {
			name: 'A magyar nyelv napja'
		}, isWordBreak: false
	},
	{
		date: {
			month: 'November', days: 25
		}, event: {
			name: 'Gulag-emléknap'
		}, isWordBreak: false
	},
	{
		date: {
			month: 'December', days: 6
		}, event: {
			name: 'Mikulás', icon: 'sleigh'
		}, isWordBreak: false
	},
	{
		date: {
			month: 'December', days: 25
		}, event: {
			name: 'Karácsony', icon: 'gift'
		}, isWordBreak: true
	},
	{
		date: {
			month: 'December', days: 26
		}, event: {
			name: 'Karácsony', icon: 'gift'
		}, isWordBreak: true
	},
	{
		date: {
			month: 'December', days: 31
		}, event: {
			name: 'Szilveszter', icon: 'cheers'
		}, isWordBreak: false
	},
]

export function getLeapDay(year: number = new Date().getFullYear()): IHoliday | null {
	if (isLeapYear(year)) {
		return { date: { month: 'Február', days: 24 }, event: { name: 'Szökőnap' }, isWordBreak: false }
	}

	return null
}

/**
 * Visszaadja a húsvéthoz kapcsolódó ünnepek időpontjait
 * @param year Melyik évben
 */
export function getEaster(year: number = new Date().getFullYear()): IHoliday[] {
	const C = Math.floor(year/100)
	const N = year - 19*Math.floor(year/19)
	const K = Math.floor((C - 17)/25)
	let I = C - Math.floor(C/4) - Math.floor((C - K)/3) + 19*N + 15
	I = I - 30*Math.floor((I/30))
	I = I - Math.floor(I/28)*(1 - Math.floor(I/28)*Math.floor(29/(I + 1))*Math.floor((21 - N)/11))
	let J = year + Math.floor(year/4) + I + 2 - C + Math.floor(C/4)
	J = J - 7*Math.floor(J/7)
	const L = I - J
	const M = 3 + Math.floor((L + 40)/44)
	const D = L + 28 - 31*Math.floor(M/4)

	const easterMonday = new Date(year, M - 1, D + 1)
	const easterSunday = new Date(year, M - 1, D)
	const goodFriday   = new Date(year, M - 1, D - 2)

	return [
		{
			date: {
				month: getMonthName(easterMonday), days: easterMonday.getDate()
			}, event: {
				name: 'Húsvét hétfő', icon: 'carrot'
			}, isWordBreak: true
		},
		{
			date: {
				month: getMonthName(easterSunday), days: easterSunday.getDate()
			}, event: {
				name: 'Húsvét vasárnap', icon: 'carrot'
			}, isWordBreak: true
		},
		{
			date: {
				month: getMonthName(goodFriday), days: goodFriday.getDate()
			}, event: {
				name: 'Nagypéntek', icon: 'carrot'
			}, isWordBreak: true
		},
	]
}
