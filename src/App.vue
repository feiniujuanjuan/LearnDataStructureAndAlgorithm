<template>
  <div class="common-layout">
    <el-container style="height: 100vh;overflow: auto;">
      <el-header style="display: flex; align-items: center; background-color: #c6e2ff;">
        <h2>数据结构学习</h2>
      </el-header>
      <el-container class="layout-main" style="overflow: auto;">
        <el-aside width="200px" style="background-color: #545c64;overflow: auto;">
          <Aside />
        </el-aside>
        <el-main style="background-color: #ecf5ff;">
          <RouterView></RouterView>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import Aside from './components/container/Aside';
</script>

<style lang="scss">
</style>