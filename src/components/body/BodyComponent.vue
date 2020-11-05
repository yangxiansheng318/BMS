<template>
  <div class="container">
      <div class="body-header">
        <slot name="body-header-component"></slot>
      </div>
      <div class="body-content">
        <div class="body-aside">
          <slot name="body-aside-component"></slot>
        </div>
        <div class="body-main">
          <div class="body-main-search">
            <slot name="body-main-search-component"></slot>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'BodyComponent'
}
</script>

<style lang="stylus" scoped>
.container
  overflow hidden
  height 19.4rem
  .body-header
    width 100%
    height 1.4rem
  .body-content
    display flex
    flex-direction row
    width 100%
    .body-aside
      margin .4rem 0 0 .4rem
      box-shadow 1px 1px 5px #666
      width 4.8rem
      height 17.2rem
    .body-main
      margin .4rem .4rem 0 .4rem
      width 100%
      height 17.2rem
      border-radius .2rem
      .body-main-search
        width 100%
        height 1.4rem
        border-radius .2rem
        box-shadow 1px 1px 5px #666
</style>
