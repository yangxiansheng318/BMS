<template>
  <div class="container">
    <login-component  @changeCon="changeShowLR" v-show="showLR"></login-component>
    <register-component  @changeCon="changeShowLR" v-show="!showLR"></register-component>
    <img src="../../../static/images/login-bg.jpg" class="login-bg">
  </div>
</template>

<script>
import LoginComponent from '@/components/login/LoginComponent'
import RegisterComponent from '@/components/login/RegisterComponent'
export default {
  name: 'Login',
  data () {
    return {
      showLR: true
    }
  },
  components: {
    LoginComponent,
    RegisterComponent
  },
  methods: {
    changeShowLR (value) {
      this.showLR = value
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  height 975px
  .login-bg
    width 100%
    height 100%
</style>
