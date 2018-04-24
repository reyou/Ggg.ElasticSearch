//=============================================================================
// Modifying Your Data
// https://www.elastic.co/guide/en/elasticsearch/reference/current/_updating_documents.html
// http://localhost:9200/customer/_doc/1/_update?pretty
//=============================================================================
const elastic = require("../GggElastic");
//=============================================================================
var indexName = "customer";
var id = "1";
var customer1 = {
  name: "Jane Doe",
  age: 20
};
var customer2 = {
  script: "ctx._source.age += 5"
};

/*In the above example, ctx._source refers to the current source document 
that is about to be updated. */
// http://localhost:9200/customer/_doc/1?pretty
elastic.putSomething(indexName, id, customer1).then(function () {
  console.log("=====================");
  elastic.postSomething(indexName, id, customer2).then(function () {
    console.log("=====================");
    elastic.getSomething(indexName, id).then(function () { });
  });
});

//=============================================================================
