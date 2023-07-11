<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
    <div class="login-form">
        <q-icon name="account_circle" size="1.3em"/>
    <q-input class="input-field" standout v-model = " text "  label = " id "/>
    <q-input class="input-field" standout v-model = " text "  label = " pw "/>
      <span class="log-qcon">
        <router-link to="/page1" class="route">
          <q-icon
          name = "send"
          size="2em"/></router-link>
      </span>
    </div>

  </q-page>

  <router-view></router-view>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>

<style>
.route{
  color: black;
  text-decoration: none;
}
.login-form{
  margin: 15px;
}
.input-field{
  margin-bottom: 10px;
  padding: 5px;
}
.log-qcon{
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
