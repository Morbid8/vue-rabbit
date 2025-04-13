<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import HomeProduct from './components/HomeProduct.vue'
import HomePanel from './components/HomePanel.vue'

</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <HomeProduct />
  <!-- 测试面板组件 -->
  <HomePanel title="轻松好物" subTitle="测试面板副标题">
    <div>测试面板内容</div>
  </HomePanel>
  <HomePanel title="人气推荐" subTitle="测试面板副标题2">
    <div>测试面板内容2</div>
  </HomePanel>
</template>
