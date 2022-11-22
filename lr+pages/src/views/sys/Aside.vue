<template>
    <el-aside width="200px">
        <el-menu default-active="1" class="el-menu-vertical-demo">
            <router-link :to="`/home/${item.path}`" v-for="item in Menu">
                <el-menu-item :index="item.index">
                    <div slot="title" class="des">
                        <img :src="item.icon" alt="" >
                        <span style="position:relative">
                            {{ item.title }}
                            <!-- <span style="right: 0; position: absolute;">></span> -->
                        </span>
                    </div>
                </el-menu-item>
            </router-link>
        </el-menu>
    </el-aside>
</template>
<script>
import zheXian from '@/assets/tableIcon/图表-折线图.png'
import zhuZhuang from '@/assets/tableIcon/图表-柱状图.png'
import bingTu from '@/assets/tableIcon/图表-饼图.png'
import sanDian from '@/assets/tableIcon/散点图.png'
import kXian from '@/assets/tableIcon/K线图.png'
import leiDa from '@/assets/tableIcon/雷达图2.png'
import reLi from '@/assets/tableIcon/热力图.png'
import shuTu from '@/assets/tableIcon/树图.png'

export default {
    name: 'Aside',
    data() {
        return {
            Menu: [
                {
                    title: '折线图',
                    index: '1',
                    path: 'lineChart',
                    icon: zheXian
                },
                {
                    title: '柱状图',
                    index: '2',
                    path: 'barChart',
                    icon: zhuZhuang
                },
                {
                    title: '饼图',
                    index: '3',
                    path: 'pieChart',
                    icon: bingTu
                }, {
                    title: '散点图',
                    index: '4',
                    path: 'scatterPlot',
                    icon: sanDian
                },
                {
                    title: 'K线图',
                    index: '5',
                    path: 'candlestickChart',
                    icon: kXian
                },
                {
                    title: '雷达图',
                    index: '6',
                    path: 'radarChart',
                    icon: leiDa
                },
                {
                    title: '热力图',
                    index: '7',
                    path: 'heatMap',
                    icon: reLi
                },
                {
                    title: '树图',
                    index: '8',
                    path: 'treeGraph',
                    icon: shuTu
                },
            ]
        }
    }
}
</script>

<style>
.el-aside {
    background-color: #ffffff;
    color: #333;
    text-align: center;
    line-height: 200px;
}

.el-menu-item {
    display: flex;
    margin-left: 0px;
    flex-direction: row;
    align-items: center;
}

.des {
    margin-left: 20px;
}
</style>