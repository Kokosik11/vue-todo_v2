<template>
  <div class="home">
    <div class="project-list">
      <button @click="showDialog" class="home_create-project">
        <div>+</div>
        <div>Create project</div>
      </button>

      <div v-if="projects.length > 0" v-for="project in projects">
        <div @click="$router.push('/project/'+project.id)" class="project">
          {{project.title}}

        </div>
      </div>
    
    </div>
    
    <my-dialog v-model:show="dialogVisible">
      <create-project-popup @closeDialog="closeDialog" />
    </my-dialog>
  </div>
</template>

<script>
import CreateProjectPopup from '../components/CreateProjectPopup.vue'
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex';

export default {
  name: 'Home',
  components: {
    CreateProjectPopup
  },
  
  data() {
    return {
      dialogVisible: false,
    }
  },

  methods: {
    showDialog() {
      this.dialogVisible = true;
    },
    closeDialog() {
      this.dialogVisible = false; 
    }
  },
  computed: {
    ...mapState({
      projects: state => state.project.projects,
    })
  }
}
</script>

<style scoped>
  .home_create-project {
    border: none;
    background-color: #fff;
    outline: none;
    width: 250px;
    height: 250px;
    border-radius: 20px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
    transition: .3s;
  }

  .home_create-project:hover {
    cursor: pointer;
    box-shadow: 0 8px 28px rgba(0, 0, 0, 0.25);
  }

  .home_create-project div:first-child {
    font-size: 130px;
    color: #cecece;
  }

  .home_create-project div:last-child {
    font-size: 18px;
    font-weight: 500;
    color: rgb(80, 80, 80);
  }

  .project-list {
    display: flex;
    flex-wrap: wrap;
  }

  .project {
    border: none;
    background-color: #fff;
    outline: none;
    width: 250px;
    height: 250px;
    border-radius: 20px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
    transition: .3s;
    margin-left: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }

  .project:hover {
    cursor: pointer;
    box-shadow: 0 8px 28px rgba(0, 0, 0, 0.25);
  }

</style>