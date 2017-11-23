<template>
  <div id="app">
    <tabs>
      <tab>{{title}}</tab>
      <tab>
        <dropdown class="form-group">
          <div class="input-group">
            <input class="form-control" type="text" v-model="date">
            <div class="input-group-btn">
              <btn class="dropdown-toggle"><i class="glyphicon glyphicon-calendar"></i></btn>
            </div>
          </div>
          <template slot="dropdown">
            <li>
              <date-picker v-model="date" format="yyyy/MM/dd"/>
            </li>
          </template>
        </dropdown>
      </tab>
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
      return {
        text1: 's',
        date: new Date()
      }
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
