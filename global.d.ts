import _utils from './src/system/utils/utils'
import _log from './src/system/log/log'
import { PlannerHTMLElement as _PlannerHTMLElement } from './types/PlannerHTMLElement/PlannerHTMLElement'

declare global {
  const utils: typeof _utils

  const log: typeof _log

  const PlannerHTMLElement: typeof _PlannerHTMLElement
}
