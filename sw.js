'use strict';

importScripts('/app/sw-toolbox.js');

toolbox.precache(["/app/index2.html","style/style.css"]);

toolbox.router.get('/app/assets/*', toolbox.cacheFirst);

toolbox.router.get('/app/*', toolbox.networkFirst, {
  networkTimeoutSeconds: 5
});
