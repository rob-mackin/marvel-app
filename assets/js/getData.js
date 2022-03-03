import MD5 from '../../node_modules/md5-es/src/md5.js';

/*
  Function to get and return api data:
  - accepts desired api end point (string),
  - number of results to get (int)
  - offset value (int)
*/
export default async function getData(endpoint, limit, offset) {
  // ToDo: dotenv for keys
  const privateKey = 'a7b4e1f55797c4bcf207e0fe8f967e4adc35e969'
  const apiKey = '0eb173e329db1dabfb0500c2d27dbf1f'
  const timestamp = Date.now()
  const hash = MD5.hash(`${timestamp}${privateKey}${apiKey}`)
  let url = `https://gateway.marvel.com/${endpoint}?ts=${timestamp}&apikey=${apiKey}&hash=${hash}`

  if (limit) url = `${url}&limit=${limit}`
  if (offset) url = `${url}&offset=${offset}`

  const apiResponse = await fetch(url)

  // Return with console error if bad response
  if (!apiResponse.ok) {
    console.error('Failed to retreive data')
    return
  }

  // Return query results
  const apiData = await apiResponse.json()
  const results = apiData.data.results

  return results
}
