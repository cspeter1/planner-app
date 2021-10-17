import { arrayFunctions, IArrayFunctions } from "./arrayFunctions"
import { objectFunctions, IObjectFunctions } from "./objectFunctions"
import staticImplementation from "./staticImplementation"

interface IUtils {
  array: IArrayFunctions
  object: IObjectFunctions
}

@staticImplementation<IUtils>()
export default class utils{
	public static get array (): IArrayFunctions {
		return arrayFunctions
	}

	public static get object (): IObjectFunctions {
		return objectFunctions
	}
}
