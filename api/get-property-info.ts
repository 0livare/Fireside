import {GraphQLClient, gql} from 'graphql-request'

export async function getPropertyInfo() {
  const graphqlClient = new GraphQLClient(
    'https://integ-mls-service.skyslope.com/',
  )

  try {
    const res = await graphqlClient.request(getListingByAddressComponentQuery, {
      searchString: '1',
      city: 'sacramento',
      state: 'Ca',
      daysToSearch: 1825,
      searchType: 'MONGODB',
      resultSize: 100,
    })

    return res.getListingsByAddressComponents
  } catch (e) {
    console.error(e)
  }
}

const getListingByAddressComponentQuery = gql`
  query GetListingsByAddressComponents(
    $city: String
    $state: String
    $resultSize: PositiveInt
  ) {
    getListingsByAddressComponents(
      city: $city
      state: $state
      resultSize: $resultSize
    ) {
      propertyAddress {
        streetNumber
        streetName
        streetType
        streetDirection
        unitNumber
        city
        state
        zipCode
      }
      photos {
        photoUrl
        thumbnailUrl
      }
    }
  }
`

const getListingsByAddressQuery = gql`
  query GetListingsByAddress(
    $searchString: String
    $unitNumber: String
    $city: String
    $state: String
    $zipCode: String
    $latitude: Float
    $longitude: Float
    $distance: PositiveInt
    $distanceUnit: DistanceUnit
    $searchAllMarkets: Boolean
    $resultSize: PositiveInt
    $daysToSearch: PositiveInt
    $searchType: String
  ) {
    getListingsByAddress(
      searchString: $searchString
      unitNumber: $unitNumber
      city: $city
      state: $state
      zipCode: $zipCode
      latitude: $latitude
      longitude: $longitude
      distance: $distance
      distanceUnit: $distanceUnit
      searchAllMarkets: $searchAllMarkets
      daysToSearch: $daysToSearch
      resultSize: $resultSize
      searchType: $searchType
    ) {
      uid
      propertyId
      displayMlsNumber
      marketName
      displayAddress
      latitude
      longitude
      squareFeet
      daysOnMarket
      photoUrl
      propertyAddress {
        streetNumber
        streetName
        streetType
        streetDirection
        unitNumber
        city
        state
        zipCode
      }
      listDate
      listingPrice
      listingStatus
      lastUpdateDate
      listingAgentSummaryInfo {
        agentId
        name
        phone
        officeId
        officeName
        officePhone
      }
      listingAgent {
        licenseNumber
        firstName
        lastName
      }
      photos {
        photoUrl
      }
    }
  }
`
