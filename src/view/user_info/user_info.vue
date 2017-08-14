<template>
  <div class="user_info">
    <section class="tabbar">
      <router-link to="/user_info/home" tag="div" class="tab-item">
        <icon class="tab-icon" name="home" scale="2.5"></icon>
        <span class="tab-txt">首页</span>
      </router-link>
      <router-link to="/user_info/manage" tag="div" class="tab-item">
        <icon class="tab-icon" name="manage" scale="2.5"></icon>
        <span class="tab-txt">设备管理</span>
      </router-link>
      <router-link to="/user_info/order" tag="div" class="tab-item">
        <icon class="tab-icon" name="order" scale="2.5"></icon>
        <span class="tab-txt">订单查看</span>
      </router-link>
    </section>
    <router-view></router-view>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
@import 'src/sass/mixin.scss';
@import 'src/sass/variable.scss';
// @import '~vux/src/styles/reset.less';
body {
  background-color: #f3f3f3;
}

.tabbar {
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
  .tab-item {
    // text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .tab-txt,
  .tab-icon {
    display: inline-block;
  }
  .tab-txt {
    margin-top: .3rem;
  }
}
.router-link-active {
  color: $color-theme;
}
</style>
