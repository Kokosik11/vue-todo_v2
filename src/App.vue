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
  export default {
    components: { MyHeader }
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
