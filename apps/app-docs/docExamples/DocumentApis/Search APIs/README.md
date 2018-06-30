//=============================================================================
Elasticsearch Reference [6.3] » Search APIs
//=============================================================================
https://www.elastic.co/guide/en/elasticsearch/reference/current/search.html
//=============================================================================
When sorting, the relevant sorted field values are loaded into memory.
This means that per shard, there should be enough memory to contain them.
For string based types, the field sorted on should not be analyzed / tokenized.
For numeric types, if possible, it is recommended to explicitly set the type
to narrower types (like short, integer and float).
//=============================================================================
