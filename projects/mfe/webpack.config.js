const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfe',
  library: { type: "module" },
  exposes: {
    './Component': './projects/mfe/src/app/app.component.ts',
    './Module': './projects/mfe/src/app/panel/panel.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
