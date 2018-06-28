//=============================================================================
https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-get.html
//=============================================================================
By default, the get API is real time, and is not affected by the refresh rate
of the index (when data will become visible for search). If a document has been
updated but is not yet refreshed, the get API will issue a refresh call in-place
to make the document visible. This will also make other documents changed since
the last refresh visible. In order to disable real time GET, one can set the
real time parameter to false.
//=============================================================================
You can use the version parameter to retrieve the document only if its current
version is equal to the specified one. This behavior is the same for all
version types with the exception of version type FORCE which always retrieves
the document. Note that FORCE version type is deprecated.

Internally, Elasticsearch has marked the old document as deleted and added an
entirely new document. The old version of the document doesn’t disappear
immediately, although you won’t be able to access it. Elasticsearch cleans up
deleted documents in the background as you continue to index more data.
//=============================================================================
