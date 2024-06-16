<template>

    <div style="display: flex;">

        <div style="flex: 1;">
            <el-card style="max-width: 300px" shadow="hover">
                <template #header>
                    <div class="card-header">
                        <span>空调</span>
                    </div>
                </template>
                <p>
                    <el-switch v-model="value1" />
                </p>

            </el-card>
        </div>

        <div style="flex: 1;">
            <el-card style="max-width: 300px" shadow="hover">
                <template #header>
                    <div class="card-header">
                        <span>本周耗能总数(kw.h)</span>
                    </div>
                </template>
                <p>200kw</p>
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
</template>

<script  setup>

import { ref } from 'vue'

const value1 = ref(true)

</script>