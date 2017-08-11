<template>
  <div class="home">
    <section class="headerWrapper">
      <header class="header">
        <div class="hd-left">
          <icon name="user" scale="4"></icon>
          <span class="username">HI,{{username}}</span>
        </div>
        <div class="hd-right">
          <icon name="tongzhi" scale="3"></icon>
        </div>
      </header>
    </section>
    <section class=""></section>
  
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: '110110110',
      
    }
  }
}
</script>
<style lang="scss" scoped>
@import 'src/sass/variable.scss';
@import 'src/sass/mixin.scss';
.home {
  .headerWrapper{
    padding: 0 .5rem;
    background: #fff;
    // color: red;
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
 
}
</style>

