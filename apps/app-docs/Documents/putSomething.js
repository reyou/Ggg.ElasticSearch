//=============================================================================
// https://www.elastic.co/guide/en/elasticsearch/reference/current/_index_and_query_a_document.html
// http://localhost:9200/customer/_doc/1
//=============================================================================
const elastic = require("../GggElastic");
//=============================================================================
var indexName = "customer";
var id = 1;
var customer = {
  name: "Jane Doe",
  age: 20
};
// http://localhost:9200/customer/_doc/1?pretty
elastic.putSomething(indexName, id, customer);
//=============================================================================
