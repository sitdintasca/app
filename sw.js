'use strict';

importScripts('/app/sw-toolbox.js');

toolbox.precache(["/app/index.html","style/style.css"]);

toolbox.router.get('/assets/*', toolbox.cacheFirst);

toolbox.router.get('/*', toolbox.networkFirst, {
  networkTimeoutSeconds: 5
});
