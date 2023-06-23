export type UniqueKey = number

/** depended on FormData. If value undefined or null it will return option title.
* Empty option should be the empty string. If pass number FormData will still get string
**/
export type SelectValue = string

export interface Option {
    uniqueKey: UniqueKey,
    value: SelectValue,
    title: string | number,
    isDisabled?: boolean,
}
