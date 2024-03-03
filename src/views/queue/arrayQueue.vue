<template>
  <label for="queueLength">队列长度</label>
  <el-input id="queueLength" v-model.number="maxsize" style="width: 240px" placeholder="请输入队列长度" />
  <el-button type="primary" @click="createQueue">创建一个队列</el-button>
  <div v-if="queue" v-for="item in queue.showQueue()">{{ item.toString() }}</div>
  <el-button type="primary" @click="addQueue">入队</el-button>
  <el-button type="primary" @click="getQueue">出队</el-button>
</template>

<script lang="ts" setup>
import { ref, reactive, onUpdated } from 'vue';
class Queue {
  private maxsize: number;// 队列长度
  private front: number;// 队首指针
  private rear: number;// 队尾指针
  private arr: Array<number>;// 队列数组

  public constructor(n: number) {
    this.maxsize = n;
    this.front = -1;
    this.rear = -1;
    this.arr = new Array(n).fill(0);
  }

  // 判断队列是否为空
  public isEmpty() {
    return this.front === this.rear;
  }

  // 判断队列是否满了
  public isFull() {
    return this.rear === this.maxsize - 1;
  }

  // 入队
  public addQueue(q: number) {
    if (this.isFull()) {
      throw new Error('队列满了');
    }
    this.rear++;
    this.arr[this.rear] = q;
  }

  // 出队
  public getQueue() {
    if (this.isEmpty()) {
      throw new Error('队列已空');
    }
    this.front++;
    this.arr[this.front] = 0;
  }

  // 显示队列
  public showQueue() {
    if (this.isEmpty()) {
      throw new Error('队列为空');
    }
    return this.arr;
  }
}
let maxsize = ref(0);
let queue = ref();
function createQueue() {
  queue.value =  new Queue(maxsize.value);
}
function addQueue() {
  queue.value.addQueue(1)
}
function getQueue() {
  queue.value.getQueue()
}
onUpdated(() => {
  console.log('触发更新')
})
</script>

<style scoped></style>