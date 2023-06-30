export type UniqueKey = number

/** depended on FormData. If value undefined or null it will return option title.
* Empty option should be the empty string. If pass number FormData will still get string
**/

export interface Option {
    uniqueKey: UniqueKey,
    value: FormDataEntryValue,
    title: string | number,
    isDisabled?: boolean,
}
