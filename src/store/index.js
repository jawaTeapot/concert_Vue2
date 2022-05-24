import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const API_URL = "https://jsonplaceholder.typicode.com";

export default new Vuex.Store({
  state: {
    users: [],
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
  },
  actions: {
    getUsers({ state, commit }) {
      if (state.users.length) return Promise.resolve(state.users);
      return axios.get(API_URL + "/users").then((res) => {
        commit("SET_USERS", res.data);
        return res.data;
      });
    },
    getUser({ commit }, id) {
      return axios.get(API_URL + "/users/" + id).then((res) => {
        return res.data;
      });
    },
    getPosts({ state, commit }, userId) {
      return axios
        .get(API_URL + "/posts", {
          params: {
            userId,
          },
        })
        .then((res) => {
          return res.data;
        });
    },
    getPost({ commit }, id) {
      return axios.get(API_URL + "/posts/" + id).then((res) => {
        return res.data;
      });
    },
    createComment({ commit }, payload) {
      return axios
        .post(API_URL + "/comments/", {
          postId: payload.postId,
          name: payload.name,
          email: payload.email,
          body: payload.comment,
        })
        .then((res) => {
          return res.data;
        });
    },
  },
  modules: {},
});
