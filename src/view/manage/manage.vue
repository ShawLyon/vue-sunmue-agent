<template>
  <div class="manageWrapper">
    <header class="header">
      <selector v-model="selected" :options="list" @on-change="onChange"></selector>
    </header>
    <section class="list">
      <!-- <a href="" v-show="listShow == '快充'">1</a>
            <a href="" v-show="listShow == '慢充'">2</a>
            <a href="" v-show="listShow == '控电插座'">3</a> -->
  
      <!--筛选 快充  -->
      <ul v-show="listShow == '快充'">
        <router-link to="/user_info/manage/deviceDetails" tag="li" class="item" v-for="item in items" :key="item.id" v-show="item.type == '快充'">
          <div class="item_top">
            <span>充电设备: {{item.device}}</span>
            <span>正在充电数: {{item.chargeing}}</span>
          </div>
          <div class="item_bottom">
            <span>{{item.BillingType}}</span>
            <span>总端口数:{{item.portNum}}</span>
          </div>
        </router-link>
      </ul>
      <!--筛选 慢充 -->
      <ul v-show="listShow == '慢充'">
        <router-link to="/user_info/manage/deviceDetails" tag="li" class="item" v-for="item in items" :key="item.id" v-show="item.type == '慢充'">
          <div class="item_top">
            <span>充电设备: {{item.device}}</span>
            <span>正在充电数: {{item.chargeing}}</span>
          </div>
          <div class="item_bottom">
            <span>{{item.BillingType}}</span>
            <span>总端口数:{{item.portNum}}</span>
          </div>
        </router-link>
      </ul>
      <!--筛选 控电插座 -->
      <ul v-show="listShow == '控电插座'">
        <router-link to="/user_info/manage/deviceDetails" tag="li" class="item" v-for="item in items" :key="item.id" v-show="item.type == '控电插座'">
          <div class="item_top">
            <span>充电设备: {{item.device}}</span>
            <span>正在充电数: {{item.chargeing}}</span>
          </div>
          <div class="item_bottom">
            <span>{{item.BillingType}}</span>
            <span>总端口数:{{item.portNum}}</span>
          </div>
        </router-link>
      </ul>
  
      <!--筛选 交流电 -->
      <ul v-show="listShow == '交流电'">
        <router-link to="/user_info/manage/deviceDetails" tag="li" class="item" v-for="item in items" :key="item.id" v-show="item.type == '交流电'">
          <div class="item_top">
            <span>充电设备: {{item.device}}</span>
            <span>正在充电数: {{item.chargeing}}</span>
          </div>
          <div class="item_bottom">
            <span>{{item.BillingType}}</span>
            <span>总端口数:{{item.portNum}}</span>
          </div>
        </router-link>
      </ul>
      <!--筛选 直流电 -->
      <ul v-show="listShow == '直流电'">
        <router-link to="/user_info/manage/deviceDetails" tag="li" class="item" v-for="item in items" :key="item.id" v-show="item.type == '直流电'">
          <div class="item_top">
            <span>充电设备: {{item.device}}</span>
            <span>正在充电数: {{item.chargeing}}</span>
          </div>
          <div class="item_bottom">
            <span>{{item.BillingType}}</span>
            <span>总端口数:{{item.portNum}}</span>
          </div>
        </router-link>
      </ul>
    </section>
    <transition name="router-slid" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import { Selector } from 'vux'
export default {
  data() {
    return {
      listShow: '慢充', // 列表显示
      selected: '慢充', // 选项显示
      title: 'name',
      list: ['快充', '慢充', '控电插座', '交流电', '直流电'],
      items: [
        {
          id: 'asdsa654654sdd',
          type: '慢充',
          device: '06654654656666666',
          chargeing: 1,
          BillingType: '按时计费',
          portNum: 10
        },
        {
          id: 'asd2f1g1f5hfg4f5g',
          type: '慢充',
          device: '0665465465555555',
          chargeing: 3,
          BillingType: '按量计费',
          portNum: 5
        },
        {
          id: '5s4d5as4da5s4d6',
          type: '快充',
          device: '06654654654444',
          chargeing: 1,
          BillingType: '按时计费',
          portNum: 10
        },
        {
          id: 'fd5ggh5fg5gf4h54g',
          type: '控电插座',
          device: '06654654653333',
          chargeing: 1,
          BillingType: '按时计费',
          portNum: 10
        },
        {
          id: 'dasfew334gf',
          type: '交流电',
          device: '06654654652222',
          chargeing: 1,
          BillingType: '按时计费',
          portNum: 10
        },
        {
          id:'kasjoj4ki4hj',
          type: '直流电',
          device: '06654654651111',
          chargeing: 1,
          BillingType: '按时计费',
          portNum: 10
        }
      ]
    }
  },
  components: {
    Selector
  },
  methods: {
    onChange(val) {
      console.log(val);
      this.listShow = val;
    }
  },
  computed:{
    selectType(){
      
    }
  }
}
</script>
<style lang="scss" scoped>
.manageWrapper {
  .header {
    background: #fff;
  }
  .list {
    .item {
      background: #fff;
      margin-top: .75rem;
      padding: .75rem .5rem;
    }
    .item_top,
    .item_bottom {
      display: flex;
      justify-content: space-between;
      font-size: .7rem;
    }
    .item_top {}
    .item_bottom {
      margin-top: .75rem;
    }
  }
}

.router-slid-enter-active,
.router-slid-leave-active {
  transition: all .4s;
}

.router-slid-enter,
.router-slid-leave-active {
  transform: translate3d(2rem, 0, 0);
  opacity: 0;
}
</style>


