<template>
    <div class="project">
        <div class="project-header">
            <h2>{{ project.title }}</h2>
            <div>{{ project.description }}</div>
        </div>

        <div class="action-list">
            <div class="action" v-for="action in project.actions" :key="action.id">
                {{ action.title }}
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            project: {}
        }
    },
    methods: {
        setProject() {
            this.project = this.getProjectById(this.$route.params.id);
        }
    },
    mounted() {
        this.setProject()
    },
    computed: { 
        ...mapGetters({
            getProjectById: 'project/getProjectById',
        })
    }, 
}
</script>

<style scoped>
    .project {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 1200px;
    }
    
    .project-header {
        margin-top: 50px;
        width: 100%;
        height: 300px;
        background-color: #fff;
        border-radius: 20px;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
        padding: 50px;
    }

    .action-list {
        display: flex;
        width: 100%;
        margin-top: 50px;
    }

    .action {
        width: 150px;
        height: 150px;
        background-color: #fff;
        border-radius: 20px;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
        padding: 20px;
        margin-right: 40px;
    }
</style>