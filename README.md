# client-comm

> Form a p2p swarm of nodes around a topic and exchange messages.

## Background

This module provides a simple pubsub interface on top of an unstructured swarm
of peers interested in a common topic string. Distributed pubsub. It's meant to
be used as a primitive to build server-less applications without needing to have
a deeper understanding of distributed systems.

This module doesn't make guarantees about latencies, nor does it guarantee
delivery. Gossip isn't as fast as flooding, but it's a very robust means of
propogating data over an unstructured network. If the network is stable message
should reach eveyr node, but partitions can occur in the network and bridging
peers can drop out at any time.

Messages are cryptographically signed by their creator and given a unique
sequence number. This means that a. each incoming message can be verified that
it came from its claimed author, and that b. peers will not report duplicate
messages (e.g. if two different peers deliver them).


## Build

Use build.sh or
```
$ browserify index.js -o static/client-comm-bundle.js
```

Serve the static files with the include webserver
Or host them on your own web server
```
$ node server.js 
```

Open the sample.html page on 2 or more web browsers (do not use localhost / 127.0.0.1)
```
http://server/sample.html
```



## API

See [secure-pubsub-swarm](https://github.com/noffle/pubsub-swarm)


## License

MIT
