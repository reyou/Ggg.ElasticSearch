//=============================================================================
Elasticsearch Reference [6.3] » Document APIs » Reindex
//=============================================================================
https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-reindex.html
//=============================================================================
Reindex does not attempt to set up the destination index. It does not copy
the settings of the source index. You should set up the destination index
prior to running a \_reindex action, including setting up mappings, shard counts,
replicas, etc.
The most basic form of \_reindex just copies documents from one index to another.
This will copy documents from the twitter index into the new_twitter index:
//=============================================================================
