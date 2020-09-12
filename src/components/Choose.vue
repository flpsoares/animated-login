<template>
  <div class="flex flex-row relative bg-darken-500" style="width: 80%; height: 400px;">
    <div class="flex flex-col px-32 items-center justify-center w-1/2 h-full">
      <InfoChoose header="Don't Have an account?" content="Banjo tote bag bicycle rights, High Life santorial cray craft beer whatever street art fap." button="SIGN UP" />
    </div>
    <div class="flex flex-col px-32 w-1/2 items-center justify-center h-full">
      <InfoChoose header="Have an account?" content="Banjo tote bag bicycle rights, High Life santorial cray craft beer whatever street art fap." button="LOGIN" />
    </div>
    <Login />
  </div>
</template>

<script>
import InfoChoose from './InfoChoose'
import Login from './Login'
export default {
  name: 'Choose',
  components:{
    InfoChoose,
    Login
  }
};
</script>

<style>
</style>