
docker exec solr /opt/solr/bin/solr create_core -c hello.world
docker exec solr cp /tmp/solr/managed-schema /opt/solr/server/solr/hello.world/conf/managed-schema
curl "http://localhost:8983/solr/admin/cores?core=hello.world&action=RELOAD"
