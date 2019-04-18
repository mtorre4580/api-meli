const autocannon = require('autocannon');
const PORT = process.env.PORT || '5000';

// Performance HTTP benchmarking tool 
autocannon({
  url: `http://localhost:${PORT}/api/items?q=iphone`,
  connections: 10,
  pipelining: 1,
  duration: 10 
}, console.info)
