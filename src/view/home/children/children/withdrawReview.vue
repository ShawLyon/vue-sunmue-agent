<template>
  <div class="withdrawReview">
    <section class="main">
      <img src="./1.png" class="img">
      <h3>提现审核中</h3>
      <p>资金将子啊24小时内到账</p>
      <router-link to="/user_info/home" tag="span">首页>></router-link>
    </section>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
@import 'src/sass/mixin.scss';
@import 'src/sass/variable.scss';
.withdrawReview {
  @include childZindex;
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem 0;
    .img {
      width: 6.25rem;
      height: 6.25rem;
    }
    h3 {
      font-size: .8rem;
      margin-top: .9rem;
    }
    p,
    span {
      font-size: .6rem;
    }
    p{
      margin-top: .5rem;
      color: #666;
    }
    span{
      margin-top: 2rem;
    }
  }
}
</style>

