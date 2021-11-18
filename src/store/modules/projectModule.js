
export const projectModule = {
    state: () => ({
        projects: [],
    }),

    mutations: {
        setProjects(state, projects) {
            state.projects = projects
        },

        setProject(state, project) {
            state.projects.push(project);
        },

        setAction(state, action) {
            state.projects.forEach(project => {
                if(project.id === action.projectId) {
                    let _action = {
                        id: action.id,
                        title: action.title,
                        isCompleted: action.isCompleted
                    }
                    project.actions.push(_action);
                }
            })
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

        initProjects({state, commit}, projects) {
            commit('setProjects', projects);
        },

        addAction({state, commit}, action) {
            commit('setAction', action);
        }
        

        // deleteProject({state, commit}, actionId) {
        //     commit('setActions', state.actions.filter(action => action.id !== actionId));
        // } 
    },

    namespaced: true
}