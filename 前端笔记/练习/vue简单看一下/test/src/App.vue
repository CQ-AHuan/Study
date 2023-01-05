<script setup>
  import { ref } from 'vue';

  const data = ref([
    { name: 'zs', age: 18 },
    { name: 'ls', age: 16 },
    { name: 'ww', age: 19 },
  ]);

  // 数据驱动DOM
  data.value.push({ name: 'll', age: 17 });

</script>

<template>
  <ol>
    <!-- 显示所有大于等于18岁的 -->
    <li v-for="item in data.filter(d => d.age >= 18)">
      {{ item.name }}
    </li>

  </ol>
</template>

<style scoped>

</style>
