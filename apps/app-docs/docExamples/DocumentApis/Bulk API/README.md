//=============================================================================
Elasticsearch Reference [6.3] » Document APIs » Bulk API
//=============================================================================
https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-bulk.html
//=============================================================================
The bulk API makes it possible to perform many index/delete operations in a
single API call. This can greatly increase the indexing speed.
//=============================================================================
The REST API endpoint is /\_bulk, and it expects the following newline delimited
JSON (NDJSON) structure:

action_and_meta_data\n
optional_source\n
action_and_meta_data\n
optional_source\n
....
action_and_meta_data\n
optional_source\n
//=============================================================================
The endpoints are /\_bulk,
/{index}/\_bulk, and
{index}/{type}/\_bulk.
When the index or the index/type are provided, they will be used by default on
bulk items that don’t provide them explicitly.

A note on the format. The idea here is to make processing of this as fast as
possible. As some of the actions will be redirected to other shards on other
nodes, only action_meta_data is parsed on the receiving node side.

Client libraries using this protocol should try and strive to do something
similar on the client side, and reduce buffering as much as possible.

The response to a bulk action is a large JSON structure with the individual
results of each action that was performed. The failure of a single action
does not affect the remaining actions.

There is no "correct" number of actions to perform in a single bulk call.
You should experiment with different settings to find the optimum size for
your particular workload.

If using the HTTP API, make sure that the client does not send HTTP chunks,
as this will slow things down.
//=============================================================================
