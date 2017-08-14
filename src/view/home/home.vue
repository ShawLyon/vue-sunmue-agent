<template>
  <div class="home">
    <section class="headerWrapper">
      <header class="header">
        <div class="hd-left">
          <icon name="user" scale="4"></icon>
          <span class="username">HI,{{username}}</span>
        </div>
        <router-link to="/home/news" class="hd-right" tag="div">
          <icon name="tongzhi" scale="3"></icon>
          <badge text="1"></badge>
        </router-link>
      </header>
    </section>
    <section class="today-income">
      <section class="today-income-top">
        <h2>今日收益(元)</h2>
        <span>{{value}}</span>
      </section>
      <section class="today-income-bottom">
        <div class="item">
          <h3>线上收益</h3>
          <span>40</span>
        </div>
        <div class="item">
          <h3>刷卡收入</h3>
          <span>40</span>
        </div>
        <div class="item">
          <h3>投币
            <b>(不作收入)</b>
          </h3>
          <span>40</span>
        </div>
      </section>
    </section>
    <section class="total-income">
      <div class="title">
        <h2>收益(元)</h2>
        <router-link to="/home/details" tag="span">明细</router-link>
      </div>
      <div class="amount">
        <span>1200.32</span>
        <router-link to="/user_info/home/withdraw" tag="button">提现</router-link>
      </div>
      <div class="details">
        <span>为提现: 1200.00</span>
        <span>已提现: 0.00</span>
      </div>
    </section>
    <!-- 子路由  -->
    <transition name="router-slid" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import { Badge } from 'vux'
export default {
  components: {
    Badge
  },
  data() {
    return {
      username: '110110110',
      value: 45
    }
  }
}
</script>
<style lang="scss" scoped>
@import 'src/sass/variable.scss';
@import 'src/sass/mixin.scss';
.home {
  .headerWrapper,
  .today-income,
  .total-income {
    padding: 0 .5rem;
    background: #fff;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e8e8e8;
    padding: .75rem 0;
  }
  .hd-left {
    display: flex;
    align-items: center;
    .username {
      margin-left: .75rem;
      font-size: .75rem;
    }
  }
  .hd-right {
    display: flex;
    align-items: flex-start;
  }
  .today-income span {
    color: #c93e3e;
  }
  .today-income-top {
    padding: .75rem 0;
    h2 {
      font-size: 0.850rem;
      font-weight: bold;
    }
    span {
      display: block;
      font-size: 1.2rem;
      font-weight: bold;
      margin: 1rem 0;
    }
  }
  .today-income-bottom {
    display: flex;
    justify-content: space-around;
    text-align: center;
    border-top: 1px solid #e8e8e8;
    padding: .75rem 0;
    h3 {
      font-size: 0.850rem;
      >b {
        font-size: .5rem;
        color: #999;
      }
    }
    span {
      display: block;
      font-size: 1.2rem;
      margin-top: 1rem;
    }
  }
  .total-income {
    margin-top: .75rem;
    padding-top: .75rem;
    padding-bottom: .75rem;
    .title {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      h2 {
        font-size: 0.850rem;
      }
      span {
        font-size: 0.7rem;
        color: #999;
      }
    }
    .amount {
      overflow: auto;
      margin-top: 1rem;
      span {
        float: left;
        font-size: 1.2rem;
        font-weight: bold;
        color: #c93e3e;
      }
      button {
        float: right;
        background: $color-theme;
        color: #fff;
        border: none;
        padding: .5rem 1rem;
        border-radius: 4px;
        font-size: .7rem;
      }
    }
    .details {
      span {
        display: block;
        font-size: .7rem;
        color: #666;
      }
      span:nth-child(2) {
        margin-top: .5rem;
      }
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

