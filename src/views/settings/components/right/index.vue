<template>
  <div>
    <component :is="currentComponent" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import changeViews from './modules/changeViews'
import changeTime from './modules/changeTime'
import chat from './modules/chat'
export default {
  components: {
    changeViews,
    changeTime,
    chat
  },
  computed: {
    ...mapState('settings', ['currentComponent'])
  }
}
</script>

<style>

</style>