<template>
    <div class="project">
        <div class="project-content">
            <div class="project-header">
                <div class="project-info">
                    <h2>{{ project.title }}</h2>
                    <div>{{ project.description }}</div>
                </div>

                <div class="project-progress">
                    <div class="project-progress_content">
                        <div class="project-progress_bg">
                            <div class="project-progress_line" v-bind:style="{ width: progressLine + '%' }"></div>
                        </div>
                        <div>{{ progressLine }}%</div>
                    </div>
                    <div class="project-count">{{countCompletedActions}}/{{countActions}}</div>
                </div>
                
            </div>

            <div class="action-list">
                <div v-if="!isCreate" @click="showInputs" class="action add">+</div>
                <div v-if="isCreate" class="action create-form">
                    <input v-model="actionTitle" type="text" class="action-title" placeholder="Action title">

                    <div class="add-checkbox">
                        <input v-model="actionCompleted" type="checkbox" id="action-check" class="action-check">
                        <label for="action-check"> completed</label>
                    </div>

                    <div class="btns">
                        <button @click="addActionToStore">Add</button>
                        <button @click="hideInputs">Cancel</button>
                    </div>
                    
                </div>
                <div class="action ceil" v-for="action in project.actions" :key="action.id">
                    <div>{{ action.title }}</div>
                    <input type="checkbox" v-model="action.isCompleted" >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import shortid from "shortid";
import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            project: {},
            isCreate: false,
            actionTitle: '',
            actionCompleted: false,
            countActions: 0,
            countCompletedActions: 0,
        }
    },
    methods: {
        setProject() {
            this.project = this.getProjectById(this.$route.params.id);
        },

        showInputs() {
            this.isCreate = true;
        },

        hideInputs() {
            this.isCreate = false;
        },

        addActionToStore() {
            let action = {
                id: shortid.generate(),
                title: this.actionTitle,
                isCompleted: this.actionCompleted 
            }

            if(action.title) this.addAction({ projectId: this.project.id, ...action } );

            this.actionTitle = '';
            this.actionCompleted = false;
        },

        ...mapActions({
            addAction: 'project/addAction',
        }),

        getCountActions() {
            let actions = this.project.actions;
            this.countActions = actions.length;
            this.countCompletedActions = 0;
            actions.forEach(action => action.isCompleted ? this.countCompletedActions++ : false)
        }
    },
    mounted() {
        this.setProject();
        this.getCountActions();
    },
    watch: {
        project: {
            handler: function(val) {
                this.getCountActions();
            },
            deep: true
        }
    },
    computed: { 
        ...mapGetters({
            getProjectById: 'project/getProjectById',
        }),

        progressLine: function() {
            if(this.countActions === 0) return 0;
            return Math.round((this.countCompletedActions / this.countActions) * 100);
        }
    }, 
}
</script>

<style scoped>
    .project {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .project-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 1200px;
        width: 100%;
    }
    
    .project-header {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 50px;
        width: 100%;
        height: 300px;
        background-color: #fff;
        border-radius: 20px;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
        padding: 50px;
    }

    .project-header h2 {
        font-size: 36px;
        color: #237451;
        margin-bottom: 10px;
    }

    .action-list {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        width: 100%;
        margin-left: 40px;
        margin-top: 50px;
    }

    .add {
        font-size: 120px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: rgb(135, 135, 243);
    }

    .action:hover {
        cursor: pointer;
        box-shadow: 0 8px 28px rgba(0, 0, 0, 0.25);
    }

    .action {
        width: 150px;
        height: 150px;
        background-color: #fff;
        border-radius: 20px;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
        padding: 20px;
        margin-right: 40px;
        margin-bottom: 40px;
        transition: .3s;
    }

    .action.ceil {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .ceil div {
        margin-bottom: 10px;
    }

    .create-form {
        display: flex;
        flex-direction: column;
    }

    .create-form input[type="text"] {
        height: 35px;
        background-color: #f3f3f3;
        border: none;
        outline: none;
        border-radius: 20px;
        padding: 10px;
    }

    .add-checkbox {
        margin: 10px 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .create-form .btns {
        display: flex;
        margin: 10px 0 0;
    } 

    .create-form .btns button {
        height: 35px;
        width: 50%;
        background-color: #f3f3f3;
        border: none;
        outline: none;
    }

    .create-form .btns button:first-child {
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        background-color: rgb(213, 255, 213);
    }

    .create-form .btns button:last-child {
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
    }

    .project-progress {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .project-progress_content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    .project-progress_bg {
        width: 95%;
        height: 20px;
        background-color: #f3f3f3;
        border-radius: 20px;
        position: relative;
    }

    .project-progress_line {
        position: absolute;
        top: 0;
        left: 0;
        background-color: #41B783;
        height: 100%;
        width: 0;
        border-radius: 20px;
        transition: .5s;
    }

    .project-count {
        margin-top: 15px;
    }
</style>