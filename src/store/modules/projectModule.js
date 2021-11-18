
export const projectModule = {
    state: () => ({
        projects: [],
    }),

    mutations: {
        setProjects(state, projects) {
            state.projects = actions
        },

        setProject(state, project) {
            state.projects.push(project);
        }
    },

    getters: {
        getProjectById: state => id => {
            return state.projects.find(project => project.id === id);
        }
    },

    actions: {
        addProject({state, commit}, project) {
            commit('setProject', project);
        },

        // deleteProject({state, commit}, actionId) {
        //     commit('setActions', state.actions.filter(action => action.id !== actionId));
        // } 
    },

    namespaced: true
}