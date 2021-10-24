export interface RandomOptions {
  isFloating: boolean
  precision?: number
}

export interface Interval {
  min: number
  max: number
}

export interface InRangeOptions {
  includeMin: boolean
  includeMax: boolean
}

export type ClampRange = [ number, number ]
