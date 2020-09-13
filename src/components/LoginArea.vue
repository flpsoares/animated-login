<template>
  <div :class="`flex z-20 w-full px-12 absolute`">
    <div 
      class="flex flex-col items-center absolute justify-center rounded-sm shadow-2xl -mt-12 bg-white transition-all transform duration-700 ease-in-out-back" 
      :class="position == 'end' ? '-translate-x-full' : ''"
      :style="{
        width: '550px', 
        height: '500px',
        left: position == 'end' ? '95%' : '5%'
        }"
    >
      <div v-show="position == 'end'">
        <Login 
        class="h-full w-full absolute top-0 left-0" 
        />
      </div>
      <div v-show="position == 'start'">
        <Register 
      class="h-full w-full absolute top-0 left-0" 
      />
      </div>
    </div>
    <!-- <div class="flex flex-col items-center justify-center rounded-sm shadow-2xl -mt-12 bg-white" style="width: 550px; height: 500px;">
      <Register />
    </div> -->
  </div>
</template>

<script>
import Login from './Login'
import Register from './Register'
export default {
  name: 'LoginArea',
  components:{
    Login,
    Register
  },
  props: {
    position: String,
  },
  methods: {
    toggleLogin(){
      if(this.position == 'start'){
        this.position = 'end'
      }else{
        this.position = 'start'
      }
    }
  }
}
</script>

<style>

</style>