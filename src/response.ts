export const httpResponse = {
  /**
   * Continue
   *
   * The server has received the request headers, and the client should proceed to send the request body
   */
  _100: 100,
  /**
   * Switching Protocols
   *
   * The requester has asked the server to switch protocols
   */
  _101: 101,
  /**
   * Early Hints
   *
   * Used with the Link header to allow the browser to start preloading resources while the server prepares a response
   */
  _103: 103,
  /**
   * OK
   *
   * The request is OK
   */
  _200: 200,
  /**
   * Created
   *
   * The request has been fulfilled, and a new resource is created
   */
  _201: 201,
  /**
   * Accepted
   *
   * The request has been accepted for processing, but the processing has not been completed
   */
  _202: 202,
  /**
   * Non-Authoritative Information
   *
   * The request has been successfully processed, but is returning information that may be from another source
   */
  _203: 203,
  /**
   * No Content
   *
   * The request has been successfully processed, but is not returning any content
   */
  _204: 204,
  /**
   * Reset Content
   *
   * The request has been successfully processed, but is not returning any content, and requires that the requester reset the document view
   */
  _205: 205,
  /**
   * Partial Content
   *
   * The server is delivering only part of the resource due to a range header sent by the client
   */
  _206: 206,
  /**
   * Multiple Choices
   *
   * A link list. The user can select a link and go to that location. Maximum five addresses
   */
  _300: 300,
  /**
   * Moved Permanently
   *
   * The requested page has moved to a new URL
   */
  _301: 301,
  /**
   * Found
   *
   * The requested page has moved temporarily to a new URL
   */
  _302: 302,
  /**
   * See Other
   *
   * The requested page can be found under a different URL
   */
  _303: 303,
  /**
   * Not Modified
   *
   * Indicates the requested page has not been modified since last requested
   */
  _304: 304,
  /**
   * Temporary Redirect
   *
   * The requested page has moved temporarily to a new URL
   */
  _307: 307,
  /**
   * Permanent Redirect
   *
   * The requested page has moved permanently to a new URL
   */
  _308: 308,
  /**
   * Bad Request
   *
   * The request cannot be fulfilled due to bad syntax
   */
  _400: 400,
  /**
   * Unauthorized
   *
   * The request was a legal request, but the server is refusing to respond to it. For use when authentication is possible but has failed or not yet been provided
   */
  _401: 401,
  /**
   * Payment Required
   *
   * Reserved for future use
   */
  _402: 402,
  /**
   * Forbidden
   *
   * The request was a legal request, but the server is refusing to respond to it
   */
  _403: 403,
  /**
   * Not Found
   *
   * The requested page could not be found but may be available again in the future
   */
  _404: 404,
  /**
   * Method Not Allowed
   *
   * A request was made of a page using a request method not supported by that page
   */
  _405: 405,
  /**
   * Not Acceptable
   *
   * The server can only generate a response that is not accepted by the client
   */
  _406: 406,
  /**
   * Proxy Authentication Required
   *
   * The client must first authenticate itself with the proxy
   */
  _407: 407,
  /**
   * Request Timeout
   *
   * The server timed out waiting for the request
   */
  _408: 408,
  /**
   * Conflict
   *
   * The request could not be completed because of a conflict in the request
   */
  _409: 409,
  /**
   * Gone
   *
   * The requested page is no longer available
   */
  _410: 410,
  /**
   * Length Required
   *
   * The `Content-Length` is not defined. The server will not accept the request without it
   */
  _411: 411,
  /**
   * Precondition Failed
   *
   * The precondition given in the request evaluated to false by the server
   */
  _412: 412,
  /**
   * Request Too Large
   *
   * The server will not accept the request, because the request entity is too large
   */
  _413: 413,
  /**
   * Request-URI Too Long
   *
   * The server will not accept the request, because the URI is too long. Occurs when you convert a `POST` request to a `GET` request with a long query information
   */
  _414: 414,
  /**
   * Unsupported Media Type
   *
   * The server will not accept the request, because the media type is not supported
   */
  _415: 415,
  /**
   * Range Not Satisfiable
   *
   * The client has asked for a portion of the file, but the server cannot supply that portion
   */
  _416: 416,
  /**
   * Expectation Failed
   *
   * The server cannot meet the requirements of the Expect request-header field
   */
  _417: 417,
  /**
   * Internal Server Error
   *
   * A generic error message, given when no more specific message is suitable
   */
  _500: 500,
  /**
   * Not Implemented
   *
   * The server either does not recognize the request method, or it lacks the ability to fulfill the request
   */
  _501: 501,
  /**
   * Bad Gateway
   *
   * The server was acting as a gateway or proxy and received an invalid response from the upstream server
   */
  _502: 502,
  /**
   * Service Unavailable
   *
   * The server is currently unavailable (overloaded or down)
   */
  _503: 503,
  /**
   * Gateway Timeout
   *
   * The server was acting as a gateway or proxy and did not receive a timely response from the upstream server
   */
  _504: 504,
  /**
   * HTTP Version Not Supported
   *
   * The server does not support the HTTP protocol version used in the request
   */
  _505: 505,
  /**
   * Network Authentication Required
   *
   * The client needs to authenticate to gain network access
   */
  _511: 511,
} as const;
