import React  from 'react'
import _utils from './src/system/utils/utils'
import _log   from './src/system/log/log'

declare global {
  const utils: typeof _utils

  const log: typeof _log

  type PlannerElement = React.ReactElement
}
