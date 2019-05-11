export const state = () => ({
  user: null,
  loginStatus: false,
  avatar: '',
  username: '',
  guilds: [],
  categories: [],
});

export const actions = {
  setUser(conetext, user) {
    context.commit('setUser', user);
  },
  setAvatar(context, avatarURL) {
    context.commit('setAvatar', avatarURL);
  },
  setLoginStatus(context, status) {
    context.commit('setLoginStatus', status);
  },
  setUsername(context, name) {
    context.commit('setUsername', name);
  },
  logout(context) {
    context.commit('logout');
  },
  setGuilds(context, guilds) {
    context.commit('setGuilds', guilds);
  },
  setCategories(context, categories) {
    context.commit('setCategories', categories);
  },
};

export const getters = {};

export const strict = process.env.NODE_ENV !== 'production';

export const mutations = {
  setUser(state, user) {
    state.user = user;
  },
  setLoginStatus(state, status) {
    state.loginStatus = status;
  },
  setAvatar(state, url) {
    state.avatar = url;
  },
  setUsername(state, name) {
    state.username = name;
  },
  logout(state) {
    //delete session
    state.user = null;
    state.username = '';
    state.loginStatus = false;
    state.avatar = '';
    state.guilds = [];
    state.categories = [];
  },
  setGuilds(state, guilds) {
    state.guilds = guilds;
  },
  setCategories(state, categories) {
    state.categories = categories;
  },
};
