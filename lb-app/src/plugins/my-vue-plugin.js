const MyPlugin = {
  install(Vue) {
    // We call Vue.mixin() here to inject functionality into all components.
    Vue.mixin({
        // Anything added to a mixin will be injected into all components.
        // In this case, the mounted() method runs when the component is added to the DOM.
      mounted() {
          /* eslint-disable no-console */
        console.log('Mounted!');
          /* eslint-enable no-console */
      },
    });
  },
};

export default MyPlugin;
