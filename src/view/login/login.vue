<template>
  <div class="loginWrapper">
    <section class="logo">
      <img src="./logo.png">
    </section>
    <section class="inputList">
      <x-input placeholder="请输入您的账号"></x-input>
      <x-input placeholder="请输入密码"></x-input>
    </section>
    <section class="footer">
      <router-link to="/user_info" tag="button" class="btn-login">登录</router-link>
    </section>
  </div>
</template>
<script>
import { XInput } from 'vux'
export default {
  components: {
    XInput
  }
}
</script>
<style lang="scss" scoped>
@import 'src/sass/variable.scss';

.loginWrapper {

  background: #fff;
  .logo {
    margin: 2.25rem 0;
    text-align: center;
    img {
      width: 4.8rem;
      height: 4.4rem;
    }
  }
  .inputList {
    font-size: .7rem;
    padding: 0 .5rem;

    .weui-cell {
      padding: .5rem 0;
      background-color: transparent;
      &::before {
        content: none;
      }

      &::after {
        content: " ";
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        height: 1px;
        border-bottom: 1px solid #333;
        color: #D9D9D9;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
      }
    }
  }
  .footer {
    margin-top: 2rem;
    padding: 0 .5rem;
    .btn-login {
      width: 100%;
      height: 2.5rem;
      color: #fff;
      background: $color-theme;
      border: none;
      border-radius: 4px;
      font-size: .9rem;
    }
  }
}
</style>

