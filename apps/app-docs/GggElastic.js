//=============================================================================
// C:\Github\Ggg\Ggg.NodeJs\app\GggRequest\GggRequest.js
//=============================================================================
var request = require("request");
// process.env.HTTP_PROXY = "http://127.0.0.1:8888";
//=============================================================================
class GggElastic {
  constructor() {
    this.server = "http://localhost:9200";
  }
  makeRequest(url, options, callback) {
    var requestOptions = {
      url: this.server + url,
      headers: {
        "User-Agent": "request",
        "Content-Type": "application/json"
      },
      rejectUnauthorized: false
    };
    if (options) {
      requestOptions.method = options.method;
      requestOptions.json = options.json;
      requestOptions.form = options.form;
    }
    request(requestOptions, function (error, response, body) {
      console.log("url:", requestOptions.url);
      console.log("error:", error);
      console.log("statusCode:", response && response.statusCode);
      console.log("body:", body);
      console.log("body.stringify:", JSON.stringify(body, null, 4));
      callback(error, response, body);
    });
  }
  checkServer() {
    const _self = this;
    var promise = new Promise(function (resolve, reject) {
      var options;
      _self.makeRequest("", options, function (error, response, body) {
        if (error) {
          reject(error);
          return;
        }
        resolve(response, body);
      });
    });
    promise.then(() => {
      console.log("checkServer completed.");
    });
  }
  // https://www.elastic.co/guide/en/elasticsearch/reference/current/_create_an_index.html
  createIndex(indexName) {
    let url = `/${indexName}?pretty`;
    let options = {
      method: "PUT"
    };
    let callback = function (error, response, body) { };
    this.makeRequest(url, options, callback);
  }
  // https://www.elastic.co/guide/en/elasticsearch/reference/current/_delete_an_index.html
  deleteIndex(indexName) {
    let url = `/${indexName}?pretty`;
    var options = {
      method: "DELETE"
    };
    var callback = function (error, response, body) { };
    this.makeRequest(url, options, callback);
  }
  // https://www.elastic.co/guide/en/elasticsearch/reference/current/_deleting_documents.html
  deleteDocument(indexName, id) {
    var url = `/customer/_doc/${id}?pretty`;
    var options = {
      method: "DELETE"
    };
    var callback = function (error, response, body) { };
    this.makeRequest(url, options, callback);
  }
  // https://www.elastic.co/guide/en/elasticsearch/reference/current/_index_and_query_a_document.html
  putSomething(indexName, id, document) {
    const _self = this;
    var url = `/${indexName}/_doc/${id}?pretty`;
    var options = {
      method: "PUT",
      json: document
    };
    var promise = new Promise(function (resolve, reject) {
      _self.makeRequest(url, options, function (error, response, body) {
        if (error) {
          reject(error);
          return;
        }
        resolve(response, body);
      });
    });
    return promise;
  }
  // https://www.elastic.co/guide/en/elasticsearch/reference/current/_modifying_your_data.html
  // https://www.elastic.co/guide/en/elasticsearch/reference/current/_updating_documents.html
  postSomething(indexName, id, document) {
    const _self = this;
    var url = `/${indexName}/_doc?pretty`;
    if (id) {
      url = `/${indexName}/_doc/${id}/_update?pretty`;
    }
    var options = {
      method: "POST",
      json: document
    };
    var promise = new Promise(function (resolve, reject) {
      _self.makeRequest(url, options, function (error, response, body) {
        if (error) {
          reject(error);
          return;
        }
        resolve(response, body);
      });
    });
    return promise;
  }

  getSomething(indexName, id) {
    const _self = this;
    let url = `/${indexName}/_doc/${id}/?pretty`;
    var options;
    var promise = new Promise(function (resolve, reject) {
      _self.makeRequest(url, options, function (error, response, body) {
        if (error) {
          reject(error);
          return;
        }
        resolve(response, body);
      });
    });
    return promise;
  }
}

//=============================================================================
module.exports = new GggElastic();
//=============================================================================
