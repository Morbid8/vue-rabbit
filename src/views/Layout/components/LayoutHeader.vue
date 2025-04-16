<script setup>
// import LayoutHeaderUl from './LayoutHeaderUl.vue'
import HeaderCart from './HeaderCart.vue'
import { getCategoryAPI } from '@/apis/layout'
import {onMounted,ref} from 'vue'

// const categoryList = ref([])
// const getCategory = async ()=>{
//   const res = await getCategoryAPI()
//   console.log(res)
//   categoryList.value =res.result
// }

// onMounted(()=>{
//   getCategory()
// })
// 使用pinia中的数据
import { useCategoryStore } from '@/stores/categoryStore'
const categoryStore = useCategoryStore()
console.log(categoryStore);

onMounted(() => {
  categoryStore.categoryList.forEach(item => {
    console.log('导航文字:', item.name)
  })
})


</script>

<template>
  <header class='app-header'>
    <div class="container">
      <h1 class="logo">
        <RouterLink to="/">小兔鲜</RouterLink>
      </h1>
      <!-- 头部导航 -->
      <ul class="app-header-nav">
        <!-- 首页 -->
        <li class="home">
          <router-link exact-active-class="active" to="/">首页</router-link>
        </li>
        <!-- 分类导航 -->
        <li class="home" v-for="item in categoryStore.categoryList" :key="item.id">
          <router-link active-class="active" :to="`/category/${item.id}`">{{ item.name }}</router-link>
        </li>
      </ul>
      <LayoutHeaderUl />
      <div class="search">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="搜一搜">
      </div>
      <!-- 头部购物车 -->
      <HeaderCart />
    </div>
</header>
</template>


<style scoped lang='scss'>
.app-header {
  background: #fff;

  .container {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 200px;

    a {
      display: block;
      height: 132px;
      width: 100%;
      text-indent: -9999px;
      background: url('@/assets/images/logo.png') no-repeat center 18px / contain;
    }
  }


  .search {
    width: 170px;
    height: 32px;
    position: relative;
    border-bottom: 1px solid #e7e7e7;
    line-height: 32px;

    .icon-search {
      font-size: 18px;
      margin-left: 5px;
    }

    input {
      width: 140px;
      padding-left: 5px;
      color: #666;
    }
  }
  .app-header-nav {
    // border: 1px solid red;
    width: 820px;
    display: flex;
    padding-left: 40px;
    position: relative;
    z-index:998;

    li{
      margin-right: 40px;
      width: 38px;
      text-align: center;

      a{
        font-size: 16px;
        line-height: 32px;
        height: 32px;
        display: inline-block;

        &:hover{
          color: $xtxColor;
          border-bottom: 1px solid $xtxColor;
        }
      }
      .active{
        color: $xtxColor;
        border-bottom: 1px solid $xtxColor;
      }
    }

  .cart {
    width: 50px;

    .curr {
      height: 32px;
      line-height: 32px;
      text-align: center;
      position: relative;
      display: block;

      .icon-cart {
        font-size: 22px;
      }

      em {
        font-style: normal;
        position: absolute;
        right: 0;
        top: 0;
        padding: 1px 6px;
        line-height: 1;
        background: $helpColor;
        color: #fff;
        font-size: 12px;
        border-radius: 10px;
        font-family: Arial;
      }
    }
  }
}
}
</style>
