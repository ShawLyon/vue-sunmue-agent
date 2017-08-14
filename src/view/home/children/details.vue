<template>
  <div class="details">
    <tab :line-width="1" custom-bar-width="60px" active-color='#4478ac'>
      <tab-item selected @click.native="showActive = 0">全部</tab-item>
      <tab-item @click.native="showActive = 1">收益</tab-item>
      <tab-item @click.native="showActive = 2">提现</tab-item>
    </tab>
    <!--全部  -->
    <section class="all" v-show="showActive == 0">
      <ul>
        <li class="item" v-for="(item,index) in items">
          <div class="title">
            <h3>{{item.type}}</h3>
            <span v-if="item.type == '收益'">
              <strong class="title-income">+{{item.value}}</strong>元</span>
            <span v-else>
              <strong class="title-withdraw">-{{item.value}}</strong>元</span>
          </div>
          <div class="bottom">
            <span>余额: {{item.over}}</span>
            <span>{{item.date}}</span>
          </div>
        </li>
      </ul>
    </section>
    <!--收益  -->
    <section class="income" v-show="showActive == 1">
      <ul>
        <li class="item" v-for="(item,index) in items" v-show="item.type=='收益'">
          <div class="title">
            <h3>{{item.type}}</h3>
            <span v-if="item.type == '收益'">
              <strong class="title-income">+{{item.value}}</strong>元</span>
            <span v-else>
              <strong class="title-withdraw">-{{item.value}}</strong>元</span>
          </div>
          <div class="bottom">
            <span>余额: {{item.over}}</span>
            <span>{{item.date}}</span>
          </div>
        </li>
      </ul>
    </section>
    <!--提现  -->
    <section class="withdraw" v-show="showActive == 2">
      <ul>
        <li class="item" v-for="(item,index) in items" v-show="item.type=='提现'">
          <div class="title">
            <h3>{{item.type}}</h3>
            <span v-if="item.type == '收益'">
              <strong class="title-income">+{{item.value}}</strong>元</span>
            <span v-else>
              <strong class="title-withdraw">-{{item.value}}</strong>元</span>
          </div>
          <div class="bottom">
            <span>余额: {{item.over}}</span>
            <span>{{item.date}}</span>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
import { Tab, TabItem } from 'vux'
export default {
  components: {
    Tab,
    TabItem
  },
  data() {
    return {
      showActive: 0,
      items: [
        {
          type: '收益',
          over: 1200,
          value: 1.6,
          date: '2017-02-12 10:00'
        },
        {
          type: '提现',
          over: 0.32,
          value: 1200,
          date: '2017-02-12 10:00'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import 'src/sass/mixin.scss';
.details {
  @include childZindex;
  .item {
    background: #fff;
    padding: .5rem;
    margin-top: .75rem;
    .title {
      display: flex;
      justify-content: space-between;
      h3 {
        font-size: .85rem;
      }
      span {
        font-size: .6rem;
        strong.title-income {
          color: #f17052;
          font-size: 1rem;
        }
        strong.title-withdraw {
          color: #333;
          font-size: 1rem;
        }
      }
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      span {
        font-size: .7rem;
        color: #666;
        margin-top: .5rem;
      }
    }
  }
}
</style>

