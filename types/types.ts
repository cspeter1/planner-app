export type Flat<T> = T extends ReadonlyArray<infer U> ? Flat<U> : T

export type Collection<T> = T | ReadonlyArray<T>

export type RecursiveArray<T> = T | ReadonlyArray<RecursiveArray<T> | T>
