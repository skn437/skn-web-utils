export const httpMethod = {
  /**
   * `GET` is used to request data from a specified resource
   */
  GET: "GET",
  /**
   * `POST` is used to send data to a server to create/update a resource
   */
  POST: "POST",
  /**
   * `PUT` is used to send data to a server to create/update a resource
   */
  PUT: "PUT",
  /**
   * `DELETE` method deletes the specified resource
   */
  DELETE: "DELETE",
  /**
   * `PATCH` method is used to apply partial modifications to a resource
   */
  PATCH: "PATCH",
  /**
   * `OPTIONS` method describes the communication options for the target resource
   */
  OPTIONS: "OPTIONS",
  /**
   * `HEAD` is almost identical to `GET` which is used to request data from a specified resource, but without the response body
   */
  HEAD: "HEAD",
  /**
   * `CONNECT` method is used to start a two-way communications (a tunnel) with the requested resource
   */
  CONNECT: "CONNECT",
  /**
   * `TRACE` method is used to perform a message loop-back test that tests the path for the target resource (useful for debugging purposes)
   */
  TRACE: "TRACE",
} as const;
