<template>
    <div class="popup">
        <form class="form">
            <label for="projectName">Project name</label>
            <input v-model="projectTitle" type="text" id="projectName" placeholder="My To do List">

            <label for="projectDescription">Project description</label>
            <input v-model="projectDescription" type="text" id="projectDescription" placeholder="Description...">

            <div class="action-list">
                <div class="action-content">
                    <div v-if="actions.length > 0" class="action-item" v-for="action in actions" :key="action.id">
                        <div>{{action.title}}</div>
                        <button @submit.prevent @click="deleteAction(action.id)">X</button>
                    </div>
                    <div class="action-item create">
                        <input v-model="actionTitle" type="text" placeholder="Action title...">
                        <div class="action-completed">
                            <input v-model="isCompleted" type="checkbox" id="isCompleted">
                            <label for="isCompleted">completed</label>
                        </div>
                    </div>
                    
                    
                </div>
                <button @click="onAddActionClick" class="action-add">Add</button>
            </div>

            <div class="btns">
                <button @click="onAddProjectClick" class="save">Save</button>
                <button @click="onCancelClick" class="cancel">Cancel</button>
            </div>
        </form>
    </div>
</template>

<script>
    import {mapState, mapGetters, mapActions, mapMutations} from 'vuex';
    import shortid from 'shortid';

    export default {
        data() {
            return {
                actionTitle: "",
                isCompleted: false,
                projectTitle: "",
                projectDescription: "",
            }
        },
        methods: {
            ...mapActions({
                addAction: 'action/addAction',
                deleteAction: 'action/deleteAction',
                addProject: 'project/addProject',
            }),

            ...mapMutations({
                setAction: 'action/setAction',
                setActions: 'action/setActions',
            }),

            onAddActionClick(e) {
                e.preventDefault();
                console.log("clicked")
                let action = {
                    id: shortid.generate(),
                    title: this.actionTitle,
                    isCompleted: this.isCompleted
                }

                this.actionTitle = "";
                this.isCompleted = false;

                this.addAction(action);
            },

            onAddProjectClick(e) {
                e.preventDefault();
                console.log("clicked")
                let project = {
                    id: shortid.generate(),
                    title: this.projectTitle,
                    description: this.projectDescription,
                    actions: this.actions
                }

                this.projectTitle = "";
                this.projectDescription = "";

                this.addProject(project);
                this.setActions([]);
                this.$emit("closeDialog");
            }, 

            onCancelClick(e) {
                e.preventDefault();
                this.$emit("closeDialog");
            }
        },
        computed: { 
            ...mapState({
                actions: state => state.action.actions,
                projects: state => state.project.projects
            })
        }, 
    }
</script>

<style scoped>
    .popup {
        width: 500px;
        height: 500px;
        background-color: #fff;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        padding: 50px 30px;
    }

    .popup .form {
        display: flex;
        flex-direction: column;
    }

    .form input[type="text"] {
        border: none;
        outline: none;
        background-color: #f3f3f3;
        height: 45px;
        padding: 0 20px;
        border-radius: 20px;
        margin: 10px 0 15px;
    }

    .action-item {
        justify-content: space-between;
    }

    .action-item, .action-completed {
        display: flex;
        align-items: center;
    }

    .action-completed, .action-completed label {
        margin-left: 10px;
    }

    .action-add {
        border: none;
        outline: none;
        background-color: rgb(167, 224, 167);
        width: 100px;
        height: 35px;
        border-radius: 20px;
        transition: .25s;
    }

    .action-add:hover {
        cursor: pointer;
        background-color: rgb(197, 236, 197);
    }

    .action-list {
        height: 200px;
        overflow-y: auto;
    }

    .btns {
        display: flex;
    }

    .btns button {
        width: 50%;
        height: 35px;
        border: none;
        outline: none;
        transition: .25s;
    }

    .btns button:first-child {
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        background-color: rgb(224, 255, 224);
    }

    .btns button:last-child {
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
    }

    .btns button:hover {
        opacity: 0.7;
        cursor: pointer;
    }
</style>