<template>
  <div class="home">
    <div class="slider"></div>
    <div class="content">
      <div class="left-news">
        <p class="left-title">最新动态</p>
      </div>
      <div class="right-news">
        <p class="right-title"> 召回信息</p>
      </div>
    </div>
    <div class="solution">
      <div class="item" v-for="(item, index) in solutionTitleList" :key="index">
        <p class="item-title">{{item}}</p>
        <div class="item-content"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    solutionTitleList: ['销售商查询', '常用知识解读', '在线反馈']
  })
}
</script>

<style lang="css" scoped src="./Home.css" ></style>
