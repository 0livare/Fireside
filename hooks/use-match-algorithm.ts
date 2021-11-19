import {useState} from 'react'
import {useGetPropertyInfo} from './queries'

type UseMatchAlgorithmArgs = {
  city?: string
  state?: string
}

export function useMatchAlgorithm(args: UseMatchAlgorithmArgs) {
  const {city, state} = args

  const [imageIndex, setImageIndex] = useState(0)
  const {data: propertyInfo, isLoading} = useGetPropertyInfo({city, state})

  console.log(`propertyInfo`, propertyInfo)

  function getPhotoUrlForIndex(index: number) {
    return propertyInfo?.[imageIndex].photos[index]?.photoUrl
  }

  return {
    isLoading,
    nextImageUrls: [
      getPhotoUrlForIndex(imageIndex),
      getPhotoUrlForIndex(imageIndex + 1),
    ],
  }
}
