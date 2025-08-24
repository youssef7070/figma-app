
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: './',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 11834, hash: '015651299e8d78ffddacf090caf60cbd2f77937bb5c798832edc47394ef102a0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7357, hash: 'b4c28af440ca47f49ea856e22dd5fac5420629c9810f654deb8e00667fc819f9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 79121, hash: '379c2e5484d2a570b8906222152a89bae5709ae1241aaa627d1056315550c4dd', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-GMYQX2Z5.css': {size: 305023, hash: 'GVMKEV25yCE', text: () => import('./assets-chunks/styles-GMYQX2Z5_css.mjs').then(m => m.default)}
  },
};
