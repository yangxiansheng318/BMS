<template>
  <div class="container">
    <el-container  style="height: 100%; border: 1px solid #eee">
      <el-aside style="width:240px;">
        <el-menu default-active="1">
          <div v-for="item of dataList" :key="item.id">
            <el-menu-item :index="item.id" v-if="!item.childer">
              <i class="el-icon-user"></i>
              <span slot="title">{{item.title}}</span>
            </el-menu-item>
            <el-submenu :index="item.id" v-else>
              <template slot="title"><i class="el-icon-user"></i>{{item.title}}</template>
              <el-menu-item-group>
                <el-menu-item :index="cofirmIndex(item.id, childerItem.id)" v-for="childerItem of item.childer" :key="childerItem.id">
                  <i class="el-icon-user"></i>
                  <span slot="title">{{ childerItem.title }}</span>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </div>
        </el-menu>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'AsideComponent',
  data () {
    return {
      dataList: [
        {
          id: '1',
          title: '个人中心'
        },
        {
          id: '2',
          title: '用户管理',
          childer: [
            {
              id: '1',
              title: '人员管理'
            },
            {
              id: '2',
              title: '意见管理'
            }
          ]
        },
        {
          id: '3',
          title: '订单管理',
          childer: [
            {
              id: '1',
              title: '课程订单管理'
            },
            {
              id: '2',
              title: '礼包订单管理'
            }
          ]
        },
        {
          id: '4',
          title: '业务管理',
          childer: [
            {
              id: '1',
              title: '考证课程管理'
            },
            {
              id: '2',
              title: '礼包管理'
            }
          ]
        },
        {
          id: '5',
          title: '其它管理'
        }
      ]
    }
  },
  computed: {
    cofirmIndex () {
      return function (value1, value2) {
        return value1 + '-' + value2
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  height 100%
  background #fff
</style>
