<template>
  <div class="flex flex-col p-12 text-blue-800" style="width: 550px; height: 500px;">
    <div class="">
      <span class="text-3xl font-bold">
        SIGN UP
      </span>
    </div>
    <div class="flex h-48 mt-10 justify-around flex-col">
      <Input name="Full name" icon="las la-user" />
      <Input name="Email" icon="las la-envelope" />
      <Input name="Password" icon="las la-lock" />
    </div>
    <div class="flex mt-10 justify-end">
      <button class="bg-blue-800 w-32 h-10 rounded-full text-white font-bold hover:bg-blue-900">
        SIGN UP
      </button>
    </div>
  </div>
</template>

<script>
import Input from './Input'
export default {
  name: 'Register',
  components: {
    Input
  }
}
</script>

<style>

</style>