//=============================================================================
Elasticsearch Reference [6.3] » Search APIs » Request Body Search » Search After
//=============================================================================
https://www.elastic.co/guide/en/elasticsearch/reference/current/search-request-search-after.html
//=============================================================================
Pagination of results can be done by using the from and size but the cost
becomes prohibitive when the deep pagination is reached. The index.max_result_window
which defaults to 10,000 is a safeguard, search requests take heap memory and time
proportional to from + size. The Scroll api is recommended for efficient deep
scrolling but scroll contexts are costly and it is not recommended to use it
for real time user requests. The search_after parameter circumvents this problem
by providing a live cursor. The idea is to use the results from the previous
page to help the retrieval of the next page.
//=============================================================================
