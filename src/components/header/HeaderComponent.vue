<template>
  <div class="container">
    <el-container>
      <el-header height="70px">
        <div class="header-left">
          <div class="header-icon-left">
            <span class="el-icon-s-fold"></span>
            <!-- <span class="el-icon-bell"></span> -->
            <span class="icon-m"></span>
          </div>
          后台管理系统
        </div>
        <div class="header-right">
          <span class="el-icon-bell"></span>
          <el-avatar :size="50"></el-avatar>
          <span class="header-right-name">用户名</span>
        </div>
      </el-header>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>

<style lang="stylus" scoped>
.header-right >>> .el-avatar
  margin .2rem .2rem .2rem 0
.el-header
  box-shadow 1px 1px 5px #666
  background-color: #fff;
  line-height: 1.4rem;
  .header-right
    margin-right .4rem
    display flex
    flex-direction row
    height 100%
    float right
    text-align center
    font-size .48rem
    .el-icon-bell
      line-height 1.4rem
      margin-right .2rem
    .header-right-name
      font-size .32rem
  .header-left
   float left
   font-size .48rem
   color #666
   .header-icon-left
    position relative
    display inline-block
    width 1.28rem
    height 100%
    text-align center
    cursor pointer
    .icon-m
      position absolute
      left 0
      top 0
      display inline-block
      width 100%
      height 100%
      background rgba(0, 0, 0, .1)
      visibility visible
    .icon-m:hover
      visibility hidden
</style>
