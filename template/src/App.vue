<template>
  <div id="app">
    <x-header>{{title}}</x-header>
    <router-view/>
    <tabbar>
      <tabbar-item link="/tab1">
        <div slot="label">第一页</div>
      </tabbar-item>
      <tabbar-item link="/tab2">
        <div slot="label">第二页</div>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem, XHeader } from 'vux'
  import { mapState } from 'vuex'

  export default {
    name: 'app',
    components: {
      TabbarItem,
      Tabbar,
      XHeader
    },
    computed: {
      ...mapState({
        title: state => state.title
      })
    }
  }
</script>

<style lang="less">

  html, body, #app {
    height: 100%;
  }
</style>
