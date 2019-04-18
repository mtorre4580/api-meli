import * as dnscache from 'dnscache';

const CACHE_TTL = 300;
const CACHE_SIZE = 1000;

/** Better performance module dnscache
 * The goal of this module is to cache the most used/most recent dns calls, 
 * to avoid the network delay and improve the performance.
 */
export default function cacheDNS() {
  dnscache({
    enable: true,
    ttl: CACHE_TTL,
    cachesize: CACHE_SIZE
  });
}
