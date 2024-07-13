<template>
  <div class="app-layout">
    <header class="topbar">
      <Appbar />
    </header>
    <AppSidebar />
    <main class="content">
      <div class="">
        <p
          class="text-left text-gray-700"
          style="font-size: 1.2rem; font-weight: bold"
          v-if="$route.name"
        >
          {{ $route.name.toUpperCase() }}
        </p>
      </div>
      <router-view :key="$route.fullPath" />
    </main>

    <footer class="footer">
      <!-- Footer content goes here -->
      <AppFooter></AppFooter>
    </footer>
  </div>
</template>

<script>
import AppFooter from "../components/common/Footer.vue";
import Appbar from "../components/common/Appbar.vue";
import AppSidebar from "../components/common/AppSidebar.vue";
import { main } from "../store/index";
export default {
  components: {
    AppFooter,
    AppSidebar,
    Appbar,
  },
  data() {
    return {
      showSidebar: true,
      mainStore: main(),
    };
  },
  methods: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    },
  },
};
</script>

<style scoped>

.app-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  .topbar {
    color: #fff;
    padding: 10px;
    text-align: center;
  }
  
  .sidebar {
    width: 200px;
    overflow: scroll;
    margin-top: 60px;
    background-color: grey;
    padding: 10px;
    transition: transform 0.3s;
    overflow-y: auto;
  }
  
  .sidebar-hidden {
    transform: translateX(-100%);
  }
  
  .content {
    flex: 1;
    overflow-y: hidden;
    display: flex;
    flex-direction: column;
    margin-left: 4rem;
    padding: 2rem;
  }
  
  .footer {
    position: fixed;
    width: 100%;
    bottom: 0;
    text-align: center;
    margin-top: auto;
  }
</style>