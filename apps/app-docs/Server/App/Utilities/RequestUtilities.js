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
      context.setState({
        url: requestOptions.url,
        error: null,
        message: null,
        name: null,
        response: JSON.stringify(response)
      });
    } catch (ex) {
      context.setState({
        url: requestOptions.url,
        error: JSON.stringify(ex.error),
        message: JSON.stringify(ex.message),
        name: JSON.stringify(ex.name),
        response: null
      });
    }
  }
}
