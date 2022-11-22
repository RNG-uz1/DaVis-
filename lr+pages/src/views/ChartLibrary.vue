<template>
  <el-container style="height:100%">
    <el-header>
      <Header></Header>
    </el-header>
    <el-container>
      <el-main>
        <h2 class="title" style="margin-top: 15px">个人图表库</h2>
     
        <div class="centerBox">
          <el-row style="margin-top: 15px">
            <el-col :span="8" v-for="(item) in Table">
              <el-card :body-style="{ padding: '0px' }" shadow="never">
                <img :src="item.path" class="image">
                <div class="des-text">
                  <span style="margin: 5px 0">{{ item.name }}</span>
                  <span style="margin: 5px 0; font-size: 14px; color: darkgray;">{{ item.time }}</span>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Header from "../views/sys/Header.vue"
import img1 from "@/assets/cover/LineChart/area-basic.png"
import img2 from "@/assets/cover/LineChart/line-simple.png"
import img3 from "@/assets/cover/LineChart/line-smooth.png"
import img4 from "@/assets/cover/LineChart/line-stack.png"

export default {
  name: "ChartLibarary",
  components: {
    Header,
  },
  data() {
    return {
      currentDate: new Date(),
      a: 123,
      Table: [
        {
          name: "基础折线图",
          time: '2022年10月29日',
          path: img1,
        },
        {
          name: "基础平滑折线图",
          time: '2022年10月29日',
          path: img2,
        },
        {
          name: "基础面积图",
          time: '2022年10月29日',
          path: img3,
        },
        {
          name: "折线堆叠图",
          time: '2022年10月29日',
          path: img4,
        },
      ],
    }
  }
}
</script>

<style>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.el-card {
  width: 300px;
  margin-right: 0;
  margin-bottom: 40px;
  box-shadow: 2px 2px 3px rgba(39, 38, 38, 0.208);
}

.el-card:hover {
  box-shadow: 8px 8px 15px rgba(39, 38, 38, 0.388);
}

.el-row {
  display: flex;
  flex-wrap: wrap;
}

.centerBox {
  display: flex;
  transform: translateX(50px);
}

.des-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.title {
  margin-bottom: 10px;
  color: #408aca !important;
}
</style>