import {useState, useMemo} from 'react'
import {GetPropertyInfoArgs} from '../api'
import {Listing} from '../types'
import {useGetPropertyInfo} from './queries'

type UseMatchAlgorithmArgs = GetPropertyInfoArgs & {
  onMatch?(listing: Listing): void
}

const LIKE_COUNT_TO_TRIGGER_MATCH = 3

export function useMatchAlgorithm(args: UseMatchAlgorithmArgs) {
  const {city, state, onMatch} = args

  const [propertyIndex, setPropertyIndex] = useState(0)
  const {data: propertyInfo, isLoading} = useGetPropertyInfo({city, state})

  const randomizedImages = useMemo(() => {
    if (!propertyInfo) return null

    let individualPhotos = propertyInfo
      .map(listing =>
        listing.photos.map(photo => ({
          photoUrl: photo.photoUrl,
          propertyId: listing.propertyId,
          listing,
        })),
      )
      .flat(1)

    individualPhotos = uniqueByKey(individualPhotos, 'photoUrl')
    individualPhotos?.sort(() => Math.random() - 0.5)

    return individualPhotos
  }, [propertyInfo])

  const [likes, setLikes] = useState({})
  const currentProperty = randomizedImages?.[propertyIndex]?.listing

  function like() {
    setLikes(likes => {
      const likesCopy = {...likes}
      const id = currentProperty!.propertyId

      if (likesCopy[id]) {
        likesCopy[id]++
      } else {
        likesCopy[id] = 1
      }

      if (likesCopy[id] === LIKE_COUNT_TO_TRIGGER_MATCH) {
        onMatch && onMatch(currentProperty!)
      }

      return likesCopy
    })

    setPropertyIndex(index => index + 1)
  }

  function dislike() {
    setPropertyIndex(index => index + 1)
  }

  return {
    isLoading,
    currentPhotoUrl: randomizedImages?.[propertyIndex]?.photoUrl,
    nextPhotoUrl: randomizedImages?.[propertyIndex + 1]?.photoUrl,
    imageUrls: randomizedImages
      ?.slice(propertyIndex, propertyIndex + 10)
      .map(image => image.photoUrl!),
    like,
    dislike,
  }
}

function uniqueByKey<T>(array: T[], key: keyof T) {
  return [...new Map(array.map(item => [item[key], item])).values()]
}
