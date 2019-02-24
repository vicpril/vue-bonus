import Vue from "vue";
import App from "./App.vue";
import axios from "axios";

import router from "./router";
import store from "./store";

axios.defaults.baseURL = "https://vue-bonus-42301.firebaseio.com";
// axios.defaults.headers.common["Authorization"] = "wqeasd";
axios.defaults.headers.get["Accepts"] = "application/json";

const reqInterceptor = axios.interceptors.request.use(config => {
   console.log("Request Interceptor", config);
   return config;
});
const resInterceptor = axios.interceptors.response.use(res => {
   console.log("Response Interceptor", res);
   return res;
});

//for remove
axios.interceptors.request.eject(reqInterceptor);
axios.interceptors.response.eject(resInterceptor);

new Vue({
   el: "#app",
   router,
   store,
   render: h => h(App)
});
