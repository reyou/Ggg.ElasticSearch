//=============================================================================
// List all environment variables from command line?
// https://stackoverflow.com/questions/5327495/list-all-environment-variables-from-command-line
var commands = {
  "List all": "SET",
  "starting with prefix": "SET Common",
  "output to a file ": "SET > output.txt"
};
//=============================================================================
// start server
// cd D:\Programs2\elasticsearch-6.2.1\elasticsearch-6.2.1\bin
// cd C:\Programs2\elasticsearch-6.2.1\elasticsearch-6.2.1\bin
// .\elasticsearch.bat
// Invoke-RestMethod http://localhost:9200
//=============================================================================
var api = {
  pattern: "<REST Verb> /<Index>/<Type>/<ID>",
  root: "http://localhost:9200",
  health: "http://localhost:9200/_cat/health?v",
  nodes: "http://localhost:9200/_cat/nodes?v",
  indices: "http://localhost:9200/_cat/indices?v",
  "create an index": {
    request: "PUT",
    url: "http://localhost:9200/customer?pretty"
  },
  "put something into index": {
    request: "PUT",
    url: "http://localhost:9200/customer/_doc/1?pretty"
  },
  "read from index": "http://localhost:9200/customer/_doc/1?pretty",
  "delete the index": "http://localhost:9200/customer?pretty"
};
//=============================================================================
