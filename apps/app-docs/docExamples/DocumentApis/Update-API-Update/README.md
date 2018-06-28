//=============================================================================
Update API
The update API allows to update a document based on a script provided.
The operation gets the document (collocated with the shard) from the index,
runs the script (with optional script language and parameters), and index back
the result (also allows to delete, or ignore the operation). It uses versioning
to make sure no updates have happened during the "get" and "reindex".
//=============================================================================
https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-update.html
//=============================================================================
Note, this operation still means full reindex of the document, it just removes
some network roundtrips and reduces chances of version conflicts between the
get and the index. The \_source field needs to be enabled for this feature
to work.
//=============================================================================
