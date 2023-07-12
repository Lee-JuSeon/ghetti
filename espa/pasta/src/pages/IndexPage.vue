<template>
  <q-layout>
  <q-page class="flex flex-center">
    <router-view>
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
    <div class="login-form">
      <q-icon name="account_circle" size="1.3em" @click="showDialog"/>
    <q-input class="input-field" standout v-model = " text[0] "  label = " id "/>
    <q-input class="input-field" standout v-model = " text[1] "  filled :type="isPwd ? 'password' : 'text'" label = " pw " hint="Password with toggle">
      <template v-slot:append>
        <q-icon
          :name="isPwd ? 'visibility_off' : 'visibility'"
          class="cursor-pointer"
          @click="isPwd = !isPwd"
        />
      </template>
    </q-input>
      <span class="log-qcon">
        <router-link to="/page1" class="route">
          <q-icon
          name = "send"
          size="2em"/></router-link>
      </span>
    </div>
    </router-view>
  </q-page>
  </q-layout>


</template>

<script>
import {defineComponent, ref} from 'vue'
import {useQuasar} from "quasar";

export default defineComponent({
  name: 'IndexPage',
  data(){
    return{
      text: ['', '']
    }
  },
  setup(){
    const $q = useQuasar()

    return {
      password: ref(''),
      isPwd: ref(true),
      showDialog () {
        $q.dialog({
          title: 'Test<em>!</em>',
          message: '<em>I can</em> <span class="text-red">use</span> <strong>HTML</strong>',
          html: true,
          persistent: true //trans modal
        }).onOk(() => {
          // console.log('OK')
        }).onCancel(() => {
          // console.log('Cancel')
        }).onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        })
      }
    }
  }
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
