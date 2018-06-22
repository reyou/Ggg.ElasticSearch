import request from "request-promise";
export default class RequestUtilities {
  static async MakeRequest(context, requestOptions) {
    requestOptions.headers = {
      "User-Agent": "request",
      "Content-Type": "application/json"
    };
    requestOptions.rejectUnauthorized = false;
    try {
      let response = await request(requestOptions);
      let responseType = typeof response;
      let responseResult = response;
      if (responseType === "object") {
        responseResult = JSON.stringify(response, null, 4);
      }
      context.setState({
        url: requestOptions.url,
        error: null,
        message: null,
        name: null,
        response: responseResult
      });
      return response;
    } catch (ex) {
      let errorType = typeof ex.error;
      let error = ex.error;
      if (errorType === "object") {
        error = JSON.stringify(ex.error, null, 4);
      }
      context.setState({
        url: requestOptions.url,
        error: error,
        message: ex.message,
        name: ex.name,
        response: null
      });
    }
  }
}
