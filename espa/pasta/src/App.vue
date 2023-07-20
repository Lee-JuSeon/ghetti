<template>
<!--  <router-view />-->
    <q-layout view="hHh lpR fFf">
      <q-header reveal elevated v-if="showHDrawer" class="bg-primary text-white" height-hint="98">
        <q-toolbar>
          <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
          <q-toolbar-title>
            <q-avatar>
              <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
            </q-avatar>
             AID-TECH
          </q-toolbar-title>
        </q-toolbar>
        <q-tabs align="left">
          <q-route-tab to="/page1" label="Page One" />
          <q-route-tab to="/page2" label="Page Two" />
          <q-route-tab to="/page3" label="Page Three" />
        </q-tabs>
      </q-header>

      <q-drawer v-if="showHDrawer" v-model="leftDrawerOpen" side="left" bordered>
        <!--show-if-above-->
        <div>
          <router-link to="/">Go to Page 1</router-link>
          <p>This is some text.</p>

        </div>
      </q-drawer>

      <q-page-container>
        <router-view></router-view>
      </q-page-container>

    </q-layout>
</template>


<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  data(){
    return{
      showHDrawer: true
    }
  },
  setup() {
    const leftDrawerOpen = ref(false)

    const toggleLeftDrawer = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }
    return {
      leftDrawerOpen,
      toggleLeftDrawer
    }
  }
})
</script>
