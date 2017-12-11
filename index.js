var signalhub = require('signalhub')
var secureWebrtcSwarm = require('secure-webrtc-swarm')


ClientComm = function() {
  
  var hub = signalhub('ClientComm', ['https://signalhub-jccqtwhdwc.now.sh'])
  var key = 'MyApplicationSpecificKey'
  var swarm = new secureWebrtcSwarm(hub, {
    keys: [key]
  })
 
  var statusArea = document.getElementById('status')
  var log = function(msg) {
  	statusArea.value += '\n'+msg
  }

  var parseMessage = function(data) {
    log(data)
  }

  window.addEventListener('unload', function(event) {
    swarm.close()
  });

  swarm.on('peer', function (peer, id) {
    log('connected to a new peer: '+id+'\ntotal peers: '+swarm.peers.length)
    peer.on('data', parseMessage)
  })
  
  swarm.on('disconnect', function (peer, id) {
    log('peer disconnect: '+id+'\ntotal peers: '+swarm.peers.length)
  })


  log("ClientComm Loaded...")
}
