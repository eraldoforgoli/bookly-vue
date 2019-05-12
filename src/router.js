import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Book from "./views/Book.vue";
import Upload from "./views/Upload.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/book/:bookID",
      name: "Book",
      component: Book,
      props: true
    },
    {
      path: "/upload",
      name: "upload",
      component: Upload
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
