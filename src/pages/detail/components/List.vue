<template>
  <div>
    <div class="item" v-for="(item, index) of list" :key="index">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div v-if="item.children" class="item-children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .item-title-icon
    position relative
    left .06rem
    top .06rem
    display inline-block
    width .32rem
    height .32rem
    background url(https://img1.qunarzz.com/piao/fusion/1804/25/792e9929973a9902.png) no-repeat
    margin-right .1rem
    background-size .32rem .32rem
  .item-title
    line-height .8rem
    font-size .32rem
    padding 0 .2rem
  .item-children
    padding 0 .2rem
</style>
