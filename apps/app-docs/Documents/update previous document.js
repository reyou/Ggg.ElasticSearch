//=============================================================================
// Modifying Your Data
// https://www.elastic.co/guide/en/elasticsearch/reference/current/_updating_documents.html
//=============================================================================
const elastic = require("../GggElastic");
//=============================================================================
var indexName = "customer";
var id = "1";
var customer = {
  doc: { name: "Jane Doe", age: 20 }
};

/*Note though that Elasticsearch does not actually do in-place updates under the hood. 
Whenever we do an update, Elasticsearch deletes the old document and then indexes 
a new document with the update applied to it in one shot. */
// http://localhost:9200/customer/_doc/1?pretty
elastic.postSomething(indexName, id, customer).then(function() {
  console.log("=====================");
  elastic.getSomething(indexName, id).then(function() {});
});
//=============================================================================
