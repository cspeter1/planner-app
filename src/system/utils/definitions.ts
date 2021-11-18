const UTILS_TYPES = [ 'array', 'object', 'string', 'number', 'boolean' ] as const
type TUtilsType = typeof UTILS_TYPES[number]

export type TUtils<T extends ReadonlyArray<Object>> = {
  [key in TUtilsType]: T extends ReadonlyArray<infer U> ? U : never
}
