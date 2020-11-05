<template>
  <div class="container">
    <body-component>
      <header-component slot="body-header-component"></header-component>
      <aside-component slot="body-aside-component"></aside-component>
    </body-component>
  </div>
</template>

<script>
import BodyComponent from '@/components/body/BodyComponent'
import HeaderComponent from '@/components/header/HeaderComponent'
import AsideComponent from '@/components/aside/AsideComponent'
export default {
  name: 'Home',
  components: {
    HeaderComponent,
    AsideComponent,
    BodyComponent
  }
}
</script>

<style lang="stylus" scoped>
.container
  width 100%
</style>
