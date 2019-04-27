<template>
  <div class="header">
    <p class="title"
       v-for="(item, index) in headerList"
       :key="index"
       @click="toPage(index)">{{item}}</p>
  </div>
</template>
<script>
export default {
  data: () => ({
    headerList: [
      '主页',
      '零部件目录',
      '认证信息',
      '专用工具'
    ]
  }),
  methods: {
    toPage (index) {
      const routerArr = [
        'home',
        'lingbujian', // 旭姐 我真不会翻译啊 直接拼音了 哈哈哈
        'renzheng',
        'gongju'
      ]
      this.$router.push({
        path: `/${routerArr[index]}`
      })
    }
  }
}
</script>
<style lang="css" scoped>
.header {
  width: 1200px;
  height: 48px;
  line-height: 64px;
  background-color: #ddd;
  display: flex;
  margin: 0 auto;
}
.title {
  margin-right: 16px;
  cursor: pointer;
}
</style>
