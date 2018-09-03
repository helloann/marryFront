<template>
  <div class="title">
    <h1>{{msg}}</h1>
    <router-link to="/detail">Go to detail</router-link>
  </div>
</template>
<script>
export default {
  name: 'MainList',
  data () {
    return {
      msg: 'Welcome to mainList'
    }
  }
}
</script>
<style lang="scss" src="./mainList.scss">
</style>
