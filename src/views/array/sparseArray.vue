<template>
  <div style="display: flex; align-items: center;">
    <div>
      <h2>原数组</h2>
      <div v-for="i in arr" class="item-row">
        <div v-for="item in i" class="item">
          {{ item }}
        </div>
      </div>
    </div>
    <el-button type="primary" @click="generateSparseArr" style="margin: 0 50px;">转换为稀疏数组</el-button>
    <div v-if="sparseArr.length > 0">
      <h2>稀疏数组</h2>
      <div v-for="i in sparseArr" class="item-row">
        <div v-for="item in i" class="item">
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { reactive } from 'vue'
  let arr = reactive(new Array(6).fill(0).map(() => new Array(6).fill(0)));
  arr[0][0] = 1;
  arr[1][1] = 2;
  // 定义一个二维数组类型
  type TwoDArray<T> = T[][];
  let sparseArr:TwoDArray<number> = reactive([]);
  const generateSparseArr = () => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
      for(let j = 0; j < arr[i].length; j++) {
        if (arr[i][j]) {
          sum++;
        }
      }
    }
    sparseArr = Object.assign(sparseArr, new Array(sum + 1).fill(0).map(() => new Array(3).fill(0)));
    sparseArr[0][0] = arr.length;
    sparseArr[0][1] = arr[0].length;
    sparseArr[0][2] = sum;
    let count = 1;
    for(let i = 0; i < arr.length; i++) {
      for(let j = 0; j < arr[i].length; j++) {
        if (arr[i][j]) {
          sparseArr[count][0] = i;
          sparseArr[count][1] = j;
          sparseArr[count][2] = arr[i][j];
          count++;
        }
      }
    }
    reduction()
  }
  const reduction = () => {
    const originalArr:TwoDArray<number> = reactive(new Array(sparseArr[0][0]).fill(0).map(() => new Array(sparseArr[0][1]).fill(0)));
    for(let i = 1; i < sparseArr.length; i++) {
      let row = sparseArr[i][0];
      let col = sparseArr[i][1];
      let data = sparseArr[i][2];
      originalArr[row][col] = data;
    }
    console.log(originalArr)
  }
</script>

<style lang='scss' scoped>
.item-row {
  display: flex;
  .item {
    font-size: 14px;
    width: 36px;
    height: 36px;
    text-align: center;
    line-height: 36px;
    border: 1px solid #ccc;
    margin: 0 -1px -1px 0;
  }
}
</style>