<template>
  <div class="flex flex-col p-12 justify-around text-blue-800" style="width: 550px; height: 500px;">
    <div class="">
      <span class="text-3xl font-bold">
        LOG IN
      </span>
    </div>
    <div class="h-24 flex flex-col justify-betwee">
      <Input name="Email" icon="las la-envelope" />
      <Input name="Password" icon="las la-lock" />
    </div>
    <div class="flex flex-row justify-between">
      <button class="text-personalGray-400 hover:underline" style="font-weight: 1000">
        Forgot Password?
      </button>
      <button class="bg-blue-800 w-32 h-10 rounded-full text-white font-bold hover:bg-blue-900">
        LOG IN
      </button>
    </div>
  </div>
</template>

<script>
import Input from './Input'
export default {
  name: 'Login',
  components: {
    Input
  }
}
</script>

<style>

</style>