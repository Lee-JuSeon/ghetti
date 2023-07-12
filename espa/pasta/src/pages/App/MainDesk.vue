<template>
  <q-page-container>
    <router-view>
      <div class="drag-container" draggable="true">
        <h1>반갑습니다, {사용자}님</h1>
      </div>
    </router-view>
  </q-page-container>
</template>

<script>
import {defineComponent} from "vue";
export default defineComponent({
  name: "MainDesk",
  setup(){}
})
</script>

<style>
body {
background-color: #F2C037;
}
</style>
