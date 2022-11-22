import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ChartLibrary from "../views/ChartLibrary.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import UserCenter from "../views/UserCenter.vue";

Vue.use(VueRouter);

const VueRouterPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch((err) => err);
};

const routes = [
  {
    path: "/home",
    name: "home",
    component: HomeView,
    children: [
      {
        path: "lineChart",
        name: "LineChart",
        component: () => import("../views/table/LineChart.vue"),
      },
      {
        path: "barChart",
        name: "BarChart",
        component: () => import("../views/table/BarChart.vue"),
        children: [],
      },
      {
        path: "pieChart",
        name: "PieChart",
        component: () => import("../views/table/PieChart.vue"),
      },
      {
        path: "radarChart",
        name: "RadarChart",
        component: () => import("../views/table/RadarChart.vue"),
      },
      {
        path: "scatterPlot",
        name: "ScatterPlot",
        component: () => import("../views/table/ScatterPlot.vue"),
      },
      {
        path: "candlestickChart",
        name: "CandlestickChart",
        component: () => import("../views/table/CandlestickChart.vue"),
      },
      {
        path: "heatMap",
        name: "HeatMap",
        component: () => import("../views/table/HeatMap.vue"),
      },
      {
        path: "treeGraph",
        name: "TreeGraph",
        component: () => import("../views/table/TreeGraph.vue"),
      },
    ],
  },

  {
    path: "/chartLibrary",
    name: "ChartLibrary",
    component: ChartLibrary,
  },

  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/userCenter",
    name: "UserCenter",
    component: UserCenter,
  },
  {
    path: "/print",
    naem: "Print",
    component: () => import("../views/print/print.vue"),
    children: [
      {path: "barSimple",    component: () => import("../views/print/BarChart/BarSimple.vue"),},
      {path: "pieAreaBasic", component: () => import("../views/print/PieChat/PieAreaBasic.vue"),},  // src\views\print\PieChat   CandlestickSimple
      {path: "scatterSimple", component: () => import("../views/print/ScatterPlot/ScatterSimple.vue"),},  // src\views\print\PieChat
      {path: "candlestickSimple", component: () => import("../views/print/CandlestickChat/CandlestickSimple.vue"),}, 
    ],
    
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
