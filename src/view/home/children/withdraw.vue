<template>
  <div class="withdraw">
    <div class="cardInfoWrapper">
      <section class="cardInfo">
        <span class="cardNum">****&nbsp;****&nbsp;****&nbsp;
          <strong>9443</strong>
        </span>
      </section>
    </div>
    <section class="moneyInput">
      <h2>提现金额</h2>
      <x-input title="￥" :placeholder="holder" label-width="2rem" @focus="haha()"></x-input>
    </section>
    <section class="submit">
      <p>提现手续费0.8%：0.00元</p>
      <router-link to="/home/withdraw/withdrawReview" class="btn-submit" tag="button">提现</router-link>
    </section>
    <section class="tips">
      <h3>温馨提示：</h3>
      <p>1.资金将在24小时没到账</p>
      <p>2.资金将在24小时没到账</p>
      <p>3.资金将在24小时没到账</p>
    </section>
    <!--孙路由  -->
    <transition name="router-slid" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import { XInput } from 'vux'
export default {
  components: {
    XInput
  },
  data() {
    return {
      value: 100,
      holder: '这里是input提示信息'
    }
  },
  methods: {
    haha() {
      this.holder = ''
    }
  }
}
</script>
<style lang="scss" scoped>
@import 'src/sass/mixin.scss';
@import 'src/sass/variable.scss';
.withdraw {
  @include childZindex;
  .cardInfoWrapper {
    margin: .75rem .5rem 1.5rem .5rem;
  }
  .cardInfo {
    position: relative;
    width: 100%;
    height: 7.5rem;
    background: url(./card-1.png) no-repeat;
    background-size: 100% 100%;
    .cardNum {
      position: absolute;
      right: 0.85rem;
      bottom: 1rem;
      color: #fff;
      strong {
        font-size: 1.5rem;
      }
    }
  }
  .moneyInput {
    padding: .75rem .5rem;
    background: #fff; // border-bottom: 1px solid #999;
    h2 {
      font-size: .8rem;
    }
    span {
      font-size: 1.8rem;
      strong {
        font-size: .8rem;
      }
    }
  }
  .submit {
    padding: .5rem;
    p {
      font-size: .6rem;
      color: #999;
    }
    .btn-submit {
      width: 100%;
      height: 2.5rem;
      border-radius: 99px;
      border: none;
      background: $color-theme;
      color: #fff;
      font-size: .9rem;
      margin-top: 1rem;
    }
  }
  .tips {
    padding: .5rem;
    font-size: .6rem;
    color: #666;
    h3 {
      font-size: .7rem;
      margin-bottom: .4rem;
    }
    p {
      line-height: 1rem;
    }
  }
}
</style>
<style lang="scss">
.withdraw {
  .weui-cell:before {
    content: none;
  }
  .weui-cell {
    padding: 1rem 0;
    border-bottom: 1px solid #999;
  }
  .weui-label {
    font-size: 1.8rem;
  }
  .weui-input {
    font-size: .8rem;
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


