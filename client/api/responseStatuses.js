const SUCCESS_CODES = [200, 201, 204, 304]
const FAILURE_CODES = [401, 403, 404, 500, 502, 503, 504]
const STATUS_TO_STRING = {
  200: 'Ok',
  201: 'Created',
  204: 'No Content',
  304: 'Not Modified',
  401: 'Unauthorised',
  403: 'Forbidden',
  404: 'Not Found',
  500: 'Internal Server Error',
  502: 'Bad Gateway',
  503: 'Service Unavailable',
  504: 'Gateway Timeout',
}

export default {
  SUCCESS_CODES,
  FAILURE_CODES,
  STATUS_TO_STRING,
}
