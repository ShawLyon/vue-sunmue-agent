<template>
  <div class="news">
    <ul>
      <li class="item">
        <div class="point"></div>
        <div class="content">
          <div class="title">
            <h2>系统消息</h2>
            <span>今天 8:00</span>
          </div>
          <div class="txt">
            平台系统将于今晚8:00进行引荐升级 平台系统将于今晚8:00进行引荐升级 平台系统将于今晚8:00进行引荐升级
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default{

}
</script>
<style lang="scss" scoped>
@import 'src/sass/mixin.scss';
.news{
  @include childZindex;
  .item{
    padding: .5rem;
    background: #fff;
    .point{
      display: inline-block;
      width: .5rem;
      height: .5rem;
      background: #f17052;
      border-radius: 50%;
      vertical-align: top;
      margin-top: .1rem;
    }
    .content{
      display: inline-block;
      width: 92%;
      .title{
        display: flex;
        justify-content: space-between;
        h2{
          font-size: .8rem;
        }
        span{
          font-size: .6rem;
          color: #999;
        }
      }
      .txt{
        font-size: .7rem;
        margin-top: .6rem;
      }
    }
  }

}
</style>

