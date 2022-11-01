<template>
  <el-container style="height:100%">
    <el-header>
      <Header></Header>
    </el-header>
    <el-container>
      <Aside></Aside>
      <el-main>
        <div style="width: 90%">
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Aside from "../views/sys/Aside.vue"
import Header from "../views/sys/Header.vue"

export default {
  name: 'HomeView',
  components: {
    Aside,Header
  }
}
</script>

<style>
.el-header {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 60px;
  box-shadow: 0 10px 5px rgba(176, 177, 179, 0.1);
  z-index: 1;
}



.el-main {
  background-color: #f3f4fa;
  color: #333;
  /* text-align: center;
  line-height: 160px; */
}

body>.el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>