$dir = Get-Location
$lib = "$($dir.Path)\support\solr\lib"
$lib

docker run --rm -v "$($lib):/tmp/solr" -p 8983:8983 --name solr solr:7.6.0
