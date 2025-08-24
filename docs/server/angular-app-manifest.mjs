
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 11833, hash: '4d51adec1b81d8d45aaf7f6116f4d06e7a7dc3bec3ca6658315c8d3b1f10e614', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7356, hash: '01111ffb8f772ecc19bd8f6d4e435d47ab99ae9321433aefaaeb1a5abee69b9e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 79120, hash: '045606f2486967f96507a2bc9dc7214aff1a0ce2b06dcf333aa90bc177ecbbe9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-GMYQX2Z5.css': {size: 305023, hash: 'GVMKEV25yCE', text: () => import('./assets-chunks/styles-GMYQX2Z5_css.mjs').then(m => m.default)}
  },
};
