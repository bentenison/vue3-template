<template>
  <div id="app">
    <div id="app-loader" v-if="mainStore.isPageBlocked">
      <ProgressSpinner></ProgressSpinner>
    </div>
    <app-config />
    <div
      style="min-height: 100vh"
      :class="
        $route.path === '/'
          ? ''
          : 'flex align-items-center justify-content-center'
      "
    >
      <router-view />
    </div>

    <ConfirmDialog></ConfirmDialog>
  </div>
</template>

<script>
import ProgressSpinner from "primevue/progressspinner";
import { useMeta } from "vue-meta";
import scrollPanel from "primevue/scrollpanel";
import { main } from "./store/index";
import AppConfig from "./components/AppConfig.vue";
export default {
  name: "App",
  components: {
    ProgressSpinner,
    scrollPanel,

    AppConfig,
  },
  data() {
    return {
      mainStore: main(),
    };
  },
  created() {
    console.log(this.$route.path);
  },
};
</script>

<style lang="scss" scoped>
#app-loader {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.8);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
