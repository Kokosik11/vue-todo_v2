<template>
  <div>
    <my-header :title="'Vue todo v2'" />
    <div class="app">
      <router-view/>
    </div>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue';
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex';
  export default {
    components: { MyHeader },
    computed: {
      ...mapState({
        projects: state => state.project.projects,
      })
    },
    methods: {
      ...mapActions({
        initProjects: 'project/initProjects',
      }),
    },
    watch: {
      projects: {
        handler: function(val) {
          localStorage.projects = JSON.stringify(val);
        },
        deep: true
      } 
    },
    created() {
      let data = localStorage.projects && JSON.parse(localStorage.projects) || [];
      this.initProjects(data);
    }
  }

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #f3f3f3;
}

.app {
  margin-top: 50px;
  widows: 100%;
  padding: 0 80px;
}

</style>
