import {StyleProp, TextStyle, ViewStyle} from 'react-native'

type RecursiveArray<T> = Array<T | RecursiveArray<T>>

type Style =
  | StyleProp<ViewStyle | TextStyle>
  | ((...state: any[]) => StyleProp<ViewStyle | TextStyle>)
  | undefined

export function cs(...styles: RecursiveArray<Style>): StyleProp<ViewStyle> {
  const flatStyles = styles.flat(Infinity)

  const someStylesIsFn = flatStyles.some(style => typeof style === 'function')
  if (!someStylesIsFn) return flatStyles

  let r = (...state: any[]) =>
    flatStyles.map(style =>
      typeof style === 'function' ? style(...state) : style,
    )

  // We must lie to tye TS compiler because components other than
  // pressable do not allow functions for their style props.  But
  // if no function is passed, this will not return a function.
  return r as StyleProp<ViewStyle>
}
