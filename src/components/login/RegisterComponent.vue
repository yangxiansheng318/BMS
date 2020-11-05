<template>
  <div class="container">
    <p class="login-con-title border-bottom">后台管理系统</p>
    <div class="content">
      <el-form label-width="80px" ref="form" v-model="form">
        <el-form-item label="用户名:">
          <el-input v-model="form.loginName" placeholder="请输入用户名" type="text"></el-input>
        </el-form-item>
        <el-form-item label="密码:" >
          <el-input v-model="form.passWord" placeholder="请输入密码" type="password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码:" >
          <el-input v-model="form.confirmPassword" placeholder="请输入密码" type="password"></el-input>
        </el-form-item>
        <el-button type="primary" class="el-btn" @click="onRegister">立即注册</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterComponent',
  data () {
    return {
      form: {
        loginName: '',
        passWord: '',
        confirmPassword: ''
      }
    }
  },
  methods: {
    onRegister () {
      const formData = this.form
      // 用户名、密码、确认密码不能为空
      if (!formData.loginName || !formData.passWord || !formData.confirmPassword) {
        this.$message({
          type: 'error',
          message: '用户名或密码不能为空'
        })
        return
      }
      // 判断两次密码是否正确
      if (formData.passWord !== formData.confirmPassword) {
        this.$message({
          type: 'error',
          message: '两次密码不正确'
        })
      } else {
        // 假设用户成功注册，将触发事件给父组件，通知父组件将注册组件切换为登录组件，让用户进行登录
        this.$emit('changeCon', true)
        this.form = {}
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.container >>> .el-form
  width 100%
  height 100%
  box-sizing border-box
  padding-top .44rem
.container >>> .el-form-item__label
  color #fff
.container >>> .el-input__inner
  width 100%
.container
  width 8rem
  height 8rem
  background rgba(255, 255, 255, .6)
  position absolute
  left 50%
  top 50%
  margin -4rem 0px 0px -4rem
  .login-con-title
    height 1rem
    line-height 1rem
    text-align center
    font-size 0.48rem
    color #fff
  .content
    margin .4rem auto 0
    width 6rem
    height 6rem
    .el-btn
      width 100%
      margin-top .4rem
</style>
