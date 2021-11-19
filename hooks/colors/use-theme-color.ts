import {colors} from '../../constants'
import {useColorScheme} from './use-color-scheme'

export function useThemeColor(
  props: {light?: string; dark?: string},
  colorName: keyof typeof colors.light & keyof typeof colors.dark,
) {
  const theme = useColorScheme()
  const colorFromProps = props[theme]
  return colorFromProps || colors[theme][colorName]
}
