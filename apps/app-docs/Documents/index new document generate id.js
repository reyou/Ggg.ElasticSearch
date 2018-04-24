//=============================================================================
// Modifying Your Data
// https://www.elastic.co/guide/en/elasticsearch/reference/current/_modifying_your_data.html
//=============================================================================
const elastic = require("../GggElastic");
//=============================================================================
var indexName = "customer";
var id = null;
var customer = {
  name: "Jane Doe"
};

// http://localhost:9200/customer/_doc/IMMBi2EB8e_ReSVQL7-4?pretty
// Note that in the above case, we are using the POST verb instead of
// PUT since we didn’t specify an ID.
elastic.postSomething(indexName, id, customer).then(function() {});
//=============================================================================
