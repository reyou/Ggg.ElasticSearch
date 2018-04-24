//=============================================================================
// https://www.elastic.co/guide/en/elasticsearch/reference/current/_deleting_documents.html
//=============================================================================
const elastic = require("../GggElastic");
//=============================================================================
var indexName = "customer";
var id = 789;
var customer = {
  name: "John Doe"
};
elastic.putSomething(indexName, id, customer).then(function() {
  console.log("=============================");
  elastic.deleteDocument(indexName, id);
});

//=============================================================================
