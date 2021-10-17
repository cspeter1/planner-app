export const MONTH_NAMES = [
	'Január', 'Február', 'Március',
	'Április', 'Május', 'Június',
	'Július', 'Augusztus', 'Szeptember',
	'Október', 'November', 'December'
] as const

export type TMonth = typeof MONTH_NAMES[number]

export interface IMonth {
  month: TMonth
  days: number
}

export const monthDays: Array<IMonth> = [
	{
		month: 'Január',     days: 31
	},
	{
		month: 'Február',    days: 28
	},
	{
		month: 'Március',    days: 31
	},
	{
		month: 'Április',    days: 30
	},
	{
		month: 'Május',      days: 31
	},
	{
		month: 'Június',     days: 30
	},
	{
		month: 'Július',     days: 31
	},
	{
		month: 'Augusztus',  days: 31
	},
	{
		month: 'Szeptember', days: 30
	},
	{
		month: 'Október',    days: 31
	},
	{
		month: 'November',   days: 30
	},
	{
		month: 'December',   days: 31
	}
]

/**
 * Visszaadja a megfelelő hónap adatait
 * @param month Melyik hónap
 * @returns A megadott hónap adatai
 */
export function getMonth(month: TMonth): IMonth {
	return monthDays.find((monthDay) => monthDay.month === month) as IMonth
}

export function getMonthName(date: Date): TMonth{
	const monthCount = date.getMonth()
	if (monthCount === 0){
		return 'Január'
	} else if (monthCount === 1){
		return 'Február'
	} else if (monthCount === 2){
		return 'Március'
	} else if (monthCount === 3){
		return 'Április'
	} else if (monthCount === 4){
		return 'Május'
	} else if (monthCount === 5){
		return 'Június'
	} else if (monthCount === 6){
		return 'Július'
	} else if (monthCount === 7){
		return 'Augusztus'
	} else if (monthCount === 8){
		return 'Szeptember'
	} else if (monthCount === 9){
		return 'Október'
	} else if (monthCount === 10){
		return 'November'
	} else {
		return 'December'
	}
}
