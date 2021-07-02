<template>
  <div id="app">
    <el-container>
      <el-header>
        <topmenu style="float:right;margin-right:50px"></topmenu>
      </el-header>
      <el-container>
        <el-aside style="width:200px">
          <leftmenu></leftmenu>
        </el-aside>
        <el-main>
          <breadtip></breadtip>
          <router-view style="padding:20px;backgroundColor: #e9eef3;"/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import leftmenu from '@/components/leftMenu.vue'
import topmenu from '@/components/topMenu.vue'
import breadtip from '@/components/breadTip.vue'
export default {
  name: 'App',
  components: {
    leftmenu,
    topmenu,
    breadtip
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.el-header {
  background-color: #0085e3;
  color: #333;
  text-align: center;
  line-height: 80px;
}

.el-aside {
  /* background-color: #d3dce6; */
  color: #333;
  text-align: center;
  /* width: 200px; */
  /* line-height: 400px; */
}

.el-main {
  /* background-color: #e9eef3; */
  color: #333;
  text-align: center;
  line-height: 160px;
  padding: 0;
}

body > .el-container {
  margin-bottom: 40px;
}

</style>
