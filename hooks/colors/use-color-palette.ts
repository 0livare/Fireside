import {useMemo} from 'react'

import {useColorScheme} from './use-color-scheme'
import {
  colors,
  ConstantColors,
  ColorPalette,
} from '../../constants/color-palette'

export function useColorPalette(): ColorPalette {
  const theme = useColorScheme()

  return useMemo(() => {
    const themedColors = colors[theme]

    const constantColors = {...colors} as any
    delete constantColors.light
    delete constantColors.dark

    return {
      ...themedColors,
      ...(constantColors as ConstantColors),
    }
  }, [theme])
}
