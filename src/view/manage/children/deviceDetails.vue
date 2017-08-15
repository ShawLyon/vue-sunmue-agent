<template>
  <div class="deviceDetails">
    <section class="group group_first">
      <h3 class="title">深圳市龙华新区充电站1</h3>
      <p>设备号: 2430439029502</p>
      <p>充电类型: 慢充</p>
    </section>
    <section class="group group_second">
      <p class="address">深圳市龙华新区观澜桂花路235号</p>
      <p class="agent_info">
        <span>所属代理商: 唐黎明</span>
        <span class="tel_phone">
           <icon name="tel" scale="2" class="icon_tel"></icon> 
          <b>0755-2656-2563</b>
        </span>
      </p>
    </section>
    <section class="group group_third">
      <p class="portNum">
        <span>充电桩总端口数</span>
        <span>10</span>
      </p>
      <p class="usedNum">
        <span>充电桩已用总端口数</span>
        <span>2</span>
      </p>
    </section>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
@import 'src/sass/mixin.scss';
.deviceDetails {
  @include childZindex;
  .group {
    background: #fff;
    padding: .75rem .5rem;
    margin-top: .75rem;
  }
  .group_first {
    margin-top: 0;
    .title {
      font-size: .9rem;
    }
    p {
      font-size: .7rem;
      margin-top: .75rem;
    }
  }
  .group_second {
    .address {
      font-size: .7rem;
      border-bottom: 1px solid #999;
      padding-bottom: .35rem;
    }
    .agent_info {
      font-size: .65rem;
      margin-top: .4rem;
      display: flex;
      justify-content: space-between;
      .tel_phone {
        .icon_tel {
          vertical-align: bottom;
        }
      }
    }
  }
  .group_third {
    font-size: .7rem;
    .portNum,
    .usedNum {
      display: flex;
      justify-content: space-between;
    }
    .portNum {
      padding-bottom: .35rem;
      border-bottom: 1px solid #999;
    }
    .usedNum {
      margin-top: .4rem;
    }
  }
}
</style>

