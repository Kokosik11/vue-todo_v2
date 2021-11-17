
export const actionModule = {
    state: () => ({
        actions: [],
    }),

    mutations: {
        setActions(state, actions) {
            state.actions = actions
        },

        setAction(state, action) {
            state.actions.push(action);
        }

    },

    actions: {
        addAction({state, commit}, action) {
            commit('setAction', action);
        },

        deleteAction({state, commit}, actionId) {
            commit('setActions', state.actions.filter(action => action.id !== actionId));
        } 
    },

    namespaced: true
}