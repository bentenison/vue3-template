import { createRouter, createWebHashHistory } from "vue-router";

function loadView(view) {
  return () =>
    import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`);
}

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: loadView("Applayout"),
      children: [
        {
          path: "/",
          name: "home",
          component: loadView("Home"),
          meta: { title: "Home", lang: "en", icon: "mdi mdi-home-outline" },
        },
        {
          path: "/about",
          name: "about",
          component: loadView("About"),
          meta: {
            title: "About",
            lang: "en",
            icon: "mdi mdi-information-variant",
          },
        },
        {
          path: "/test",
          name: "componettest",
          component: loadView("ComponetTest"),
        },
      ],
    },
    {
      path: "/components",
      name: "components",
      component: loadView("Components"),
      meta: { title: "Registration", lang: "mr", icon: "mdi mdi-account-edit" },
    },
    {
      path: "/error",
      name: "Error",
      component: loadView("Error"),
      meta: { title: "Registration", lang: "mr", icon: "mdi mdi-account-edit" },
    },
    {
      path: "/access-denied",
      name: "Access Denied",
      component: loadView("Auth"),
      meta: { title: "Registration", lang: "mr", icon: "mdi mdi-account-edit" },
    },
    {
      path: "/not-found",
      name: "Not Found",
      component: loadView("NotFound"),
      meta: { title: "Registration", lang: "mr", icon: "mdi mdi-account-edit" },
    },
    {
      path: "/login",
      name: "login",
      component: loadView("Login"),
      meta: { title: "Login", lang: "mr", icon: "mdi mdi-account" },
    },
    {
      path: "/registration",
      name: "registration",
      component: loadView("Registration"),
      meta: {
        title: "Registration",
        lang: "mr",
        icon: "mdi mdi-account-edit",
      },
    },
  ],
});
