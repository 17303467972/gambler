<template>

    <div style="display: flex;">

        <div style="flex: 1;">
    <el-card style="max-width: 300px" shadow="hover">
      <template #header>
        <div class="card-header">
          <span>设备数量(个)</span>
        </div>
      </template>
      <p >3个</p>
     
    </el-card>
</div>

<div style="flex: 1;">
    <el-card style="max-width: 300px" shadow="hover">
      <template #header>
        <div class="card-header">
          <span>本周耗能总数(kw.h)</span>
        </div>
      </template>
      <p >200kw</p>
    </el-card>

</div>

<div style="flex: 1;">
    <el-card style="max-width: 300px" shadow="hover">
      <template #header>
        <div class="card-header">
          <span>预留位置</span>
        </div>
      </template>
      <p v-for="o in 1" :key="o" class="text item">{{ 'List item ' + o }}</p>
     
    </el-card>

</div>

    </div>


   <div class="container">
    <section class="itemChart">
      <itemChart>


      </itemChart>




    </section>

   </div>
    
    
  </template>


  <script setup>

import itemChart from "../../components/MainBox/itemChart.vue"



</script>

<style lang="scss" scoped>

.container{
height: inherit;
width: inherit;
margin-top: 30px;
padding: 10px 20px ;
background-color: gray;

}


</style>