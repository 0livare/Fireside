import {useQuery} from 'react-query'

import {getPropertyInfo, GetPropertyInfoArgs} from '../../api'

export function useGetPropertyInfo(args: GetPropertyInfoArgs) {
  const {city, state, resultSize} = args
  return useQuery(
    ['get-property-info', city, state, resultSize],
    () => getPropertyInfo(args),
    {
      enabled: Boolean(city && state),
      staleTime: Infinity,
    },
  )
}
