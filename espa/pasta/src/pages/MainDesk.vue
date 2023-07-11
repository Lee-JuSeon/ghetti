<template>
  <q-header v-if="showHDrawer" ></q-header>
  <q-layout>

  </q-layout>
  <router-view></router-view>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "MainDesk",
    data(){
    return{
      showHDrawer: true
    }
  }
})
</script>

<!--<style scoped>-->

<!--</style>-->
