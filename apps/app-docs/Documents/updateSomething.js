//=============================================================================
// Modifying Your Data
// https://www.elastic.co/guide/en/elasticsearch/reference/current/_modifying_your_data.html
//=============================================================================
const elastic = require("../GggElastic");
//=============================================================================
var indexName = "customer";
var id = 1;
var customer = {
    "name": "John Doe"
}
var customer2 = {
    "name": "Jane Doe"
}
// http://localhost:9200/customer/_doc/1?pretty
elastic.putSomething(indexName, id, customer).then(function () {
    elastic.putSomething(indexName, id, customer2);
});
//=============================================================================