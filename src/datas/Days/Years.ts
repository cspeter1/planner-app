export function isLeapYear(year: number): boolean{
	if (year < 0) {
		return false
	}

	if (year % 4 === 0){
		if (year % 100 === 0 ) {
			if (year % 400 === 0) {
				return true
			}
			return false
		}
		return true
	}

	return false
}
