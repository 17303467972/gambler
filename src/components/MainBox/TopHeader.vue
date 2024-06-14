

<template>
  <div>

  </div>
    <el-header>
        <el-menu
    :default-active="route.fullPath"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    :router="true"
  >

  <template v-for="data in datalist" :key="data.path">
    <el-sub-menu :index="data.path" v-if="data.children.length &&checkAuth(data.path)">
      <template #title>

        <span>{{ data.title }}</span>

      </template>
      <template  v-for="item in data.children" :key="item.path">

      <el-menu-item :index="item.path" v-if="item.path">
        <span>
        {{ item.title }}
      </span>
        </el-menu-item>
      
      </template>
      
    </el-sub-menu>

    <el-menu-item :index="data.path" v-else-if="checkAuth(data)" >

      <span>{{ data.title }}</span>
    </el-menu-item>


  </template>
  <span style="position: absolute;right: 70px;margin-top: 20px;margin-bottom: 20px;">欢迎{{user.username}}回来</span>

  <el-dropdown style="position: absolute;right: 10px;margin-top: 10px;margin-bottom: 10px;">
    <el-avatar :size="40" :src="circleUrl" />
    <span class="el-dropdown-link">
      Dropdown List
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>{{ user.role.roleName }}</el-dropdown-item>
        <el-dropdown-item @click="handleExit">退出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>

   
    

  </el-menu>

        
    </el-header>
</template>

<script setup>
import {useUserStore} from '../../store/useUserStore'

import {useRouterStore} from '../../store/useRouterStore'
import {useRouter} from 'vue-router'
import { useRoute } from 'vue-router';

import { onMounted } from 'vue';
import axios from 'axios'

import { ref } from 'vue'

import { ArrowDown } from '@element-plus/icons-vue'

const route =useRoute()


const circleUrl = "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"


const datalist =ref([])

onMounted(
    ()=>{
      handleSelect()
    }
)
const handleSelect = async ()=>{

    var res = await axios.get("/right.json")
    console.log(res.date)
    datalist.value =res.data                                                                                                                                  


}

const {changeUser,user}= useUserStore()
const {changeRouter}= useRouterStore()
const router = useRouter()

const handleExit = ()=>{

    changeUser({})
    changeRouter(false)

    router.push("/login")


}
const checkAuth = (path)=>{
  return true
}

</script>

<style lang="scss" scoped>



</style>