<template>
  <div id="app">
    <router-view></router-view>
    <section class="tabbar">
      <router-link to="/home" tag="div" class="tab-item">
        <icon class="tab-icon" name="home" scale="2.5"></icon>
        <span class="tab-txt">首页</span>
      </router-link>
      <router-link to="/manage" tag="div" class="tab-item">
        <icon class="tab-icon" name="manage" scale="2.5"></icon>
        <span class="tab-txt">设备管理</span>
      </router-link>
      <router-link to="/order" tag="div" class="tab-item">
        <icon class="tab-icon" name="order" scale="2.5"></icon>
        <span class="tab-txt">订单查看</span>
      </router-link>
    </section>
  </div>
</template>

<script>
export default {
  // name: 'app',
}
</script>

<style lang="scss">
@import './sass/mixin.scss';
@import './sass/variable.scss';
// @import '~vux/src/styles/reset.less';
body {
  background-color: #f3f3f3;

}
.tabbar{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 2.5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #fff;
    font-size: .5rem;
    .tab-item{
      // text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .tab-txt,.tab-icon{
      display: inline-block;
      // color: red;
      // width: 100px;
    }
    .tab-txt{
      margin-top: .3rem;
    }
  }
  .router-link-active {
    color: $color-theme;
    .tab-icon{
      color: $color-theme;
    }
  }
</style>
