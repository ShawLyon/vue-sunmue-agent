<template>
  <div class="order">
    <section class="list">
      <ul>
        <li class="list_item" v-for="item in items">
          <div class="list_item_first">
            <span>{{item.date}}</span>
            <span class="list_item_first_status" :class="{ status_completed: item.status == '已完成', status_undone: item.status == '未完成'}">{{item.status}}</span>
          </div>
          <div class="list_item_second">
            <!-- <span>用户: {{item.user}}</span> -->
            <span>用户: {{'13265161094' | phoneSpace}}</span>
            <span>{{item.money}}(线上)</span>
          </div>
          <div class="list_item_third">
              <span>充电设备: {{item.device}}</span>  
             <!-- <span>充电设备: {{test | numSpace}} </span>  -->
            <button class="list_item_third_back" @click="showPlugin('top')">退单</button>
          </div>
        </li>
      </ul>
    </section>
    <!-- toast -->
    <toast v-model="showPositionValue" type="text" :time="800" is-show-mask text="退单成功" :position="position"></toast>
  </div>
</template>
<script>
import Vue from 'vue'
import { ConfirmPlugin,Toast } from 'vux'
Vue.use(ConfirmPlugin)

export default {
  components:{
    Toast
  },
  data() {
    return {
      position: 'default',
      showPositionValue: false,
      test:'1313131313',
      items: [
        {
          date: '2017-06-20 9:00',
          status: '未完成',
          user: '15033466625',
          money: '2.6元',
          device: '321313213213'
        },
        {
          date: '2017-06-20 9:00',
          status: '已完成',
          user: '15033466625',
          money: '2.6元',
          device: 321313213213
        },
        {
          date: '2017-06-20 9:00',
          status: '未完成',
          user: '15033466625',
          money: '2.6元',
          device: 321313213213
        }
      ]
    }
  },
  methods: {
    showPlugin(position) {
      // 显示
      const _this = this // 需要注意 onCancel 和 onConfirm 的 this 指向
      this.$vux.confirm.show({
        title: '您是否确定退单？',
        // 组件除show外的属性
        onCancel() {
          console.log(this) // 非当前 vm
          console.log(_this) // 当前 vm
          console.log('取消')
        },
        onConfirm(position) {
          console.log('确定')
          _this.position = position
          _this.showPositionValue = true
         }
      })
    }

  },
  computed:{
  
  }
}
</script>
<style lang="scss" scoped>
@import 'src/sass/variable.scss';
@import 'src/sass/mixin.scss';
.order {
  font-size: 1rem;
  .list_item {
    background: #fff;
    margin-top: .75rem;
    padding: .5rem;
    font-size: .7rem;
    line-height: 1.2rem;
  }
  .list_item_first,
  .list_item_second,
  .list_item_third {
    display: flex;
    justify-content: space-between;
  }
  .list_item_third_back {
    @include wh(3rem,1.5rem);
    border: none;
    border-radius: .2rem;
    background: $color-theme;
    color: #fff;
  }
  .status_completed {
    color: $color-theme;
  }
  .status_undone {
    color: $color-theme-tb;
  }
}
</style>

