
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 11833, hash: 'f6410a3a785ca56883d451578a6b78bc8079583bd08855f6cec2cbcc21914e7b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7356, hash: '01cd24267cb4b3de5dc3e512f682282f3fcafb09f47a83a5701323610f54ff95', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-GMYQX2Z5.css': {size: 305023, hash: 'GVMKEV25yCE', text: () => import('./assets-chunks/styles-GMYQX2Z5_css.mjs').then(m => m.default)}
  },
};
