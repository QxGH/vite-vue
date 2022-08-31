<script setup>
  import Aside from './components/aside.vue'
  import Header from './components/header.vue'
</script>

<template>
  <div class="layout">
    <el-container>
      <el-aside width="200px">
        <Aside />
      </el-aside>
      <el-container>
        <el-header>
          <Header />
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss">
@import './index.scss';
</style>