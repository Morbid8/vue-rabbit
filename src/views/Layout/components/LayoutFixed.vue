<script setup>
import LayoutHeaderUl from './LayoutHeaderUl.vue'
// vueUse
import { useScroll } from '@vueuse/core'
const { y } = useScroll(window)

// 使用pinia中的数据
import { useCategoryStore } from '@/stores/categoryStore'
const categoryStore = useCategoryStore()

</script>

<template>
  <div class="app-header-sticky" :class="{ show: y > 78 }">
    <!-- {{ y }} -->
    <div class="container">
      <RouterLink class="logo" to="/" />
      <!-- 导航区域 -->
      <!-- <ul class="app-header-nav">
        <li class="home">
          <RouterLink to="/">首页</RouterLink>
        </li>
        <li>
          <RouterLink to="/">居家</RouterLink>
        </li>
        <li class="home">
          <RouterLink to="/">美食</RouterLink>
        </li>
        <li>
          <RouterLink to="/">服饰</RouterLink>
        </li>
        <li class="home">
          <RouterLink to="/">母婴</RouterLink>
        </li>
        <li>
          <RouterLink to="/">个护</RouterLink>
        </li>
        <li class="home">
          <RouterLink to="/">严选</RouterLink>
        </li>
        <li>
          <RouterLink to="/">数码</RouterLink>
        </li>
        <li class="home">
          <RouterLink to="/">运动</RouterLink>
        </li>
        <li>
          <RouterLink to="/">杂项</RouterLink>
        </li>
      </ul> -->
      <ul class="app-header-nav">
        <li class="home">
          <router-link exact-active-class="active" to="/">首页</router-link>
        </li>
        <li class="home" v-for="item in categoryStore.categoryList" :key="item.id">
          <router-link :to="`/category/${item.id}`">{{ item.name }}</router-link>
        </li>
      </ul>
      <!-- <LayoutHeaderUl /> -->
      <div class="right">
        <RouterLink to="/">品牌</RouterLink>
        <RouterLink to="/">专题</RouterLink>
      </div>
    </div>
  </div>
</template>


<style scoped lang='scss'>
.app-header-sticky {
  width: 100%;
  height: 80px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
  // 此处为关键样式!!!
  // 状态一：往上平移自身高度 + 完全透明
  transform: translateY(-100%);
  opacity: 0;

  // 状态二：移除平移 + 完全不透明
  &.show {
    transition: all 0.3s linear;
    transform: none;
    opacity: 1;
  }

  .container {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 200px;
    height: 80px;
    background: url("@/assets/images/logo.png") no-repeat right 2px;
    background-size: 160px auto;
  }

  .right {
    width: 220px;
    display: flex;
    text-align: center;
    padding-left: 40px;
    border-left: 2px solid $xtxColor;

    a {
      width: 38px;
      margin-right: 40px;
      font-size: 16px;
      line-height: 1;

      &:hover {
        color: $xtxColor;
      }
    }
  }
}
</style>
