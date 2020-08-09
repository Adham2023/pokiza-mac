const state = {
    currentComponent: 'changeViews',
}
const mutations = {
    SET_COMPONENT(state, component) {
        state.currentComponent = component
    }
}
const actions = {
    SET_COMPONENT({commit}, component) {
        commit('SET_COMPONENT', component);
    }
}
const getters = {}

export default {
    namespaced: true,
    state, 
    mutations,
    actions,
    getters
}