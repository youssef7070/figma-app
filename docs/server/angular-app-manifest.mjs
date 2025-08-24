
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/figma-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/figma-app"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 11843, hash: '901a19f8fcbfafdd0f92e56d3edbc008af90bb537da7d2e8fa1babaf77f3bfc4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7366, hash: '0fdd0e91daf055ddaac55c46c0204cf4880abe018226fc3d1545ef68ea4fe29b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 79130, hash: 'e7a987e56e93275c703a8e6efbbc86c59c2ba8396fbbcb25b95ee2226e7c79dc', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-GMYQX2Z5.css': {size: 305023, hash: 'GVMKEV25yCE', text: () => import('./assets-chunks/styles-GMYQX2Z5_css.mjs').then(m => m.default)}
  },
};
