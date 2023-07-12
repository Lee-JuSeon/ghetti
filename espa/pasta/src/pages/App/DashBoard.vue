<template>
  <div class="drag-container" draggable="true">
  <router-link to="/page2" class="main-clock">
    <h3>현재 시간은 {{ currentTime }} 입니다.</h3>
    <h1>반갑습니다, {사용자}님</h1>
    <h1>좋은 {{goodtime}} 입니다.</h1>
  </router-link>
  </div>
  <q-page-container>
    <router-view></router-view>
  </q-page-container>
</template>

<style>
.drag-container {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s;
}
.drag-container:active {
  transform: scale(1.1);
}
.main-clock{
  text-decoration: none;
  color: black;
  padding-top: 10%;
  text-align: center;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s;
}
.main-clock:hover {
  transform: scale(1.1);
}
body {
  background-image: url("src/assets/back.jpg");
  background-size: cover;

}
body::before {
  content: "";
  position: fixed;
  width: 100%;
  height: 100%;
  opacity: 0.8;
  background-size: cover;
  background-color: white;
  z-index: -1;
}

</style>

<script>
import {defineComponent} from 'vue';
export default defineComponent({
  name:'DashBoard',
  data(){
    return{
      currentTime: '',
      goodtime: '',
    }
  },
  mounted() {
    this.updateTime();
    setInterval(this.updateTime, 1000);
    this.TimeOfDay();
  },
  methods: {
    updateTime() {
      const now = new Date();
      const Day = now.getDate().toString();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      this.currentTime = `${hours}:${minutes}:${seconds}`;
      console.log(Day);
    },
    TimeOfDay() {
        let timeOfDay;
        const date = new Date();
        const hours = date.getHours();

        if (hours >= 5 && hours < 11) {
          timeOfDay = '오전';
        } else if (hours >= 11 && hours < 14) {
          timeOfDay = '점심';
        } else if (hours >= 14 && hours < 18) {
          timeOfDay = '오후';
        } else if (hours >= 18 && hours < 24) {
          timeOfDay = '밤';
        } else {
          timeOfDay = '새벽';
        }
      this.goodtime = `${timeOfDay}`;
      }

  },
  setup(){}
})
</script>
