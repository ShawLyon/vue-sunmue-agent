<template>
  <div id="app">
    <router-view></router-view>
    <loading v-model="isLoading"></loading>
  </div>
</template>

<script>
import { Loading } from 'vux'
import { mapState } from 'vuex'
export default {
  name: 'app',
  components: {
    Loading
  },
  computed: {
    ...mapState({
      isLoading: state => state.lyon.isLoading
    })
  }
}
</script>

<style lang="scss">
body {
  // background-color: #f3f3f3;
}
</style>
