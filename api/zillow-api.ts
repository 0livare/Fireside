import {ZWS_ID} from '@env'

const zillowUrls = {
  getSearchResults: 'http://www.zillow.com/webservice/GetSearchResults.htm',
  getUpdatedPropertyDetails:
    'http://www.zillow.com/webservice/GetUpdatedPropertyDetails.htm',
}

async function getPropertyInfo() {
  let searchParams = new URLSearchParams({
    'zws-id': ZWS_ID,
    citystatezip: 'Denver, CO',
    // address: address,
    // rentzestimate: true,
  })

  try {
    let url = new URL(
      `${zillowUrls.getSearchResults}?${searchParams.toString()}`,
    )
    const res = await fetch(url.toString())
    const info = res.json()
    console.log(`info`, info)
    return info
  } catch (e) {
    console.error(e)
  }
}

export const zillowApi = {
  getPropertyInfo,
}
