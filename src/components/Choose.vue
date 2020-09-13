<template>
  <div class="flex flex-row relative bg-darken-500" style="width: 80%; height: 400px;">
    <div class="flex flex-col px-32 items-center justify-center w-1/2 h-full">
      <InfoChoose 
      :zindex="formConfig.zindexRegister"
      :opacity="formConfig.opacityRegister" 
      header="Don't Have an account?" 
      content="Banjo tote bag bicycle rights, High Life santorial cray craft beer whatever street art fap." 
      button="SIGN UP" 
      @toggle="toggle"
      />
    </div>
    <div class="flex flex-col px-32 w-1/2 items-center justify-center h-full">
      <InfoChoose 
      :zindex="formConfig.zindexLogin" 
      :opacity="formConfig.opacityLogin" 
      header="Have an account?" 
      content="Banjo tote bag bicycle rights, High Life santorial cray craft beer whatever street art fap." 
      button="LOGIN" 
      @toggle="toggle"/>
    </div>
    <LoginArea :position="formConfig.position" name="TOGGLE" />
  </div>
</template>

<script>
import InfoChoose from './InfoChoose'
import LoginArea from './LoginArea'
export default {
  name: 'Choose',
  data(){
    return {
      showLogin: false
    }
  },
  components:{
    InfoChoose,
    LoginArea
  },
  computed: {
    loginFormConfig(){
      return {
        zindexLogin: 10,
        position: 'end',
        zindexRegister: 30,
        opacityLogin: 0,
        opacityRegister: 100
      }
    },
    registerFormConfig(){
      return {
        zindexLogin: 30,
        position: 'start',
        zindexRegister: 10,
        opacityLogin: 100,
        opacityRegister: 0
      }
    },
    formConfig(){
      return this.showLogin 
        ? this.loginFormConfig 
        : this.registerFormConfig
    }
  },
  methods: {
    toggleRegister(){
      this.$store.commit('toggleRegister')
    },
    toggle(){
      this.showLogin = !this.showLogin
    },
  }
};
</script>

<style>
</style>