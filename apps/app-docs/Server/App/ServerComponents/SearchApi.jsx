import React, { Component } from "react";
import RequestUtilities from "../Utilities/RequestUtilities.js";
import appSettings from "../AppSettings.jsx";
let settings = new appSettings();
import ResponsePanel from "../Components/ResponsePanel.jsx";
export default class SearchApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: null,
      error: null,
      settings: settings
    };
  }
  async submit() {
    let method = $("#method").val();
    let indexName = $("#indexName").val();
    let query = $("#query").val();
    // GET
    let url = settings.ServerHost + `/${indexName}/_search?${query}&pretty`;
    let requestOptions = {
      method: method,
      url: url
    };
    if (method === "POST") {
      url = settings.ServerHost + `/${indexName}/_search?pretty`;
      requestOptions = {
        method: method,
        json: JSON.parse(query),
        url: url
      };
    }

    await RequestUtilities.MakeRequest(this, requestOptions);
  }
  exampleClick(e, method) {
    let query = e.target.value;
    if (query.toString().indexOf("{") === 0) {
      query = JSON.stringify(JSON.parse(e.target.value), null, 4);
    }
    $("#query").val(query);
    $("#method").val(method);
  }
  render() {
    return (
      <div className="contentPanel">
        <h3>{this.props.title}</h3>
        <table>
          <tbody>
            <tr>
              <td>IndexName:</td>
              <td>
                <input
                  id="indexName"
                  type="text"
                  defaultValue={settings.DefaultIndex}
                />
              </td>
            </tr>
            <tr>
              <td>Query:</td>
              <td>
                <textarea id="query" defaultValue="q=*&sort=_id:asc&pretty" />
              </td>
            </tr>
            <tr>
              <td>Method</td>
              <td>
                <input
                  id="method"
                  type="text"
                  defaultValue={settings.DefaultMethod}
                />
              </td>
            </tr>
            {this.getExamples()}
            <tr>
              <td>Submit:</td>
              <td>
                <input
                  id="submit"
                  type="button"
                  value="Search"
                  onClick={e => {
                    this.submit();
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <ResponsePanel state={this.state} />
      </div>
    );
  }
  getExamples() {
    let exampleTexts = [];
    exampleTexts.push({
      text: "q=*&sort=_id:desc&pretty",
      method: "GET"
    });
    exampleTexts.push({
      text: "q=*&sort=account_number:desc&pretty",
      method: "GET"
    });
    exampleTexts.push({
      text: `{
          "query": { "match_all": {} }
        }`.replace(/ /g, ""),
      method: "POST"
    });
    exampleTexts.push({
      text: `{
        "query": { "match_all": {} },
        "from": 10,
        "size": 10
      }`.replace(/ /g, ""),
      method: "POST"
    });
    exampleTexts.push({
      text: `{
              "query": { "match_all": {} },
              "sort": [
                { "account_number": "asc" }
              ]
            }`.replace(/ /g, ""),
      method: "POST"
    });
    exampleTexts.push({
      text: `{
            "query": { "match_all": {} },
            "sort": { "balance": { "order": "desc" } }
          }`.replace(/ /g, ""),
      method: "POST"
    });
    exampleTexts.push({
      text: `{
        "query": { "match_all": {} },
        "_source": ["account_number", "balance"]
      }`.replace(/ /g, ""),
      method: "POST"
    });
    exampleTexts.push({
      text: `{
        "query": { "match": { "account_number": 20 } }
      }`.replace(/ /g, ""),
      method: "POST"
    });
    exampleTexts.push({
      text: `{
        "query": { "match": { "address": "mill" } }
      }`.replace(/ /g, ""),
      method: "POST"
    });
    exampleTexts.push({
      text: `{"query":{"match":{"address":"mill lane"}}}`,
      method: "POST"
    });
    exampleTexts.push({
      text: `{"query":{"match_phrase": {"address":"mill lane"}}}`,
      method: "POST"
    });
    exampleTexts.push({
      text: `{
        "query": {
          "bool": {
            "must": [
              { "match": { "address": "mill" } },
              { "match": { "address": "lane" } }
            ]
          }
        }
      }`.replace(/ /g, ""),
      method: "POST"
    });
    exampleTexts.push({
      text: `{
        "query": {
          "bool": {
            "should": [
              { "match": { "address": "mill" } },
              { "match": { "address": "lane" } }
            ]
          }
        }
      }`.replace(/ /g, ""),
      method: "POST"
    });
    exampleTexts.push({
      text: `{
        "query": {
          "bool": {
            "must_not": [
              { "match": { "address": "mill" } },
              { "match": { "address": "lane" } }
            ]
          }
        }
      }`.replace(/ /g, ""),
      method: "POST"
    });
    exampleTexts.push({
      text: `{
        "query": {
          "bool": {
            "must": [
              { "match": { "age": "40" } }
            ],
            "must_not": [
              { "match": { "state": "ID" } }
            ]
          }
        },
        "sort":{"balance":{"order":"desc"}}
      }`.replace(/ /g, ""),
      method: "POST"
    });
    exampleTexts.push({
      text: `{
        "query": {
          "bool": {
            "must": { "match_all": {} },
            "filter": {
              "range": {
                "balance": {
                  "gte": 20000,
                  "lte": 30000
                }
              }
            }
          }
        }
      }`.replace(/ /g, ""),
      method: "POST"
    });
    exampleTexts.push({
      text: `{
        "size": 0,
        "aggs": {
          "group_by_state": {
            "terms": {
              "field": "state.keyword"
            }
          }
        }
      }`.replace(/ /g, ""),
      method: "POST"
    });
    exampleTexts.push({
      text: `{
        "size": 0,
        "aggs": {
          "group_by_state": {
            "terms": {
              "field": "state.keyword"
            },
            "aggs": {
              "average_balance": {
                "avg": {
                  "field": "balance"
                }
              }
            }
          }
        }
      }`.replace(/ /g, ""),
      method: "POST"
    });
    exampleTexts.push({
      text: `{
        "size": 0,
        "aggs": {
          "group_by_state": {
            "terms": {
              "field": "state.keyword",
              "order": {
                "average_balance": "desc"
              }
            },
            "aggs": {
              "average_balance": {
                "avg": {
                  "field": "balance"
                }
              }
            }
          }
        }
      }`.replace(/ /g, ""),
      method: "POST"
    });
    exampleTexts.push({
      text: `{
        "size": 0,
        "aggs": {
          "group_by_age": {
            "range": {
              "field": "age",
              "ranges": [
                {
                  "from": 20,
                  "to": 30
                },
                {
                  "from": 30,
                  "to": 40
                },
                {
                  "from": 40,
                  "to": 50
                }
              ]
            },
            "aggs": {
              "group_by_gender": {
                "terms": {
                  "field": "gender.keyword"
                },
                "aggs": {
                  "average_balance": {
                    "avg": {
                      "field": "balance"
                    }
                  }
                }
              }
            }
          }
        }
      }`.replace(/ /g, ""),
      method: "POST"
    });
    let examplesHtml = exampleTexts.map((item, index) => {
      return (
        <tr key={index}>
          <td>Example:</td>
          <td>
            <input
              defaultValue={item.text}
              type="text"
              onClick={e => this.exampleClick(e, item.method)}
            />
          </td>
        </tr>
      );
    });
    return examplesHtml;
  }
}
