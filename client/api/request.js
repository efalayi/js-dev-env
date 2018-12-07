import 'whatwg-fetch'

function handleResponse(response) {
  return response.json()
}

function handleError(error) {
  return error
}

export async function getRequest(url) {
  try {
    const response = await fetch(url, {
      credentials: 'include',
    })
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
}

export async function postRequest(url) {
  try {
    const response = await fetch(url)
    return handleResponse(response)
  } catch (error) {
    return handleError(error)
  }
}
