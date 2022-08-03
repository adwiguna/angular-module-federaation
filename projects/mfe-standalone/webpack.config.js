const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfe-standalone',

  exposes: {
    './Component': './projects/mfe-standalone/src/app/standalone-panel/standalone-panel.component.ts',
    // './Component': './projects/mfe-standalone/src/app/app.component.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
