//=============================================================================
Elasticsearch Reference [6.3] » Document APIs » Multi Get API
//=============================================================================
https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-multi-get.html
//=============================================================================
Multi GET API allows to get multiple documents based on an index, type
(optional) and id (and possibly routing). The response includes a docs array
with all the fetched documents in order corresponding to the original multi-get
request (if there was a failure for a specific get, an object containing this
error is included in place in the response instead).
The structure of a successful get is similar in structure to a document
provided by the get API.
//=============================================================================

//=============================================================================
