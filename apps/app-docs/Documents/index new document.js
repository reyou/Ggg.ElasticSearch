//=============================================================================
// Modifying Your Data
// https://www.elastic.co/guide/en/elasticsearch/reference/current/_modifying_your_data.html
//=============================================================================
const elastic = require("../GggElastic");
//=============================================================================
var indexName = "customer";
var id = 2;
var customer = {
  name: "Jane Doe"
};

// http://localhost:9200/customer/_doc/2?pretty
elastic.putSomething(indexName, id, customer).then(function() {});
//=============================================================================
