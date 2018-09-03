<template>
  <div id="app">
    <el-container>
      <el-header><v-header></v-header></el-header>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer><v-footer></v-footer></el-footer>
    </el-container>
  </div>
</template>

<script>
import header from '@/components/header.vue'
import footer from '@/components/footer.vue'
export default {
  name: 'App',
  components: {
    'v-header': header,
    'v-footer': footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
