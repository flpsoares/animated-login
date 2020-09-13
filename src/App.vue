<template>
  <div id="app" class="bg flex justify-center items-center h-screen w-screen text-white">
    <Choose />
  </div>
</template>

<script>
  import Choose from './components/Choose'
  export default {
    name: 'App',
    components:{
      Choose,
    }
  }
</script>

<style>
@import 'assets/css/style.css';

*, *::before, *::after{
  outline: none !important;
  
}

.bg{
  background-image: url('assets/img/background.jpg');
  background-size: cover;
}
</style>