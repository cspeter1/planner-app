import { TUtils } from "./definitions"
import staticImplementation from "../staticImplementation"

// Array
import { arrayFunctions, IArrayFunctions } from "./array/arrayFunctions"

// Object
import { objectFunctions, IObjectFunctions } from "./object/objectFunctions"

// String
import { stringFunctions, IStringFunctions } from "./string/stringFunctions"

// Number
import { numberFunctions, INumberFunctions } from "./number/numberFunctions"

// Boolean
import { booleanFunctions, IBooleanFunctions } from "./boolean/booleanFunctions"

type TUtilTypes = [IArrayFunctions, IObjectFunctions, IStringFunctions, INumberFunctions, IBooleanFunctions]

@staticImplementation<TUtils<TUtilTypes>>()
export default class utils{
	public static get array (): IArrayFunctions {
		return arrayFunctions
	}

	public static get object (): IObjectFunctions {
		return objectFunctions
	}

	public static get string (): IStringFunctions {
		return stringFunctions
	}

	public static get number (): INumberFunctions {
		return numberFunctions
	}

	public static get boolean (): IBooleanFunctions {
		return booleanFunctions
	}
}
