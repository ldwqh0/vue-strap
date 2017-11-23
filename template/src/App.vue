<template>
  <div id="app">
    <tabs>
      <tab>{{title}}</tab>
      <tab>Tab content 1.111</tab>
      <tab>Tab content 2.11</tab>
    </tabs>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'app',
    components: {},
    data () {
      return {text1: 's'}
    },
    computed: {
      ...mapState({
        title: state => state.title
      })
    }
  }
</script>

<style lang="less">
  @import '~bootstrap/less/bootstrap.less';
</style>
