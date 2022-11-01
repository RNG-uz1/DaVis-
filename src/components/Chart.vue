<template style="width: 100%">
    <div>
        <div class="title" style="margin-top: 30px">{{ title }}</div>
        <el-divider></el-divider>
        <el-row>
            <el-col :span="8" v-for="(item) in type" >
                <el-card :body-style="{ padding: '0px' }" shadow="never" @click.native="toPrint(item.path)">
                    <img :src=item.cover class="image" >
                    <div style="padding: 14px; text-align: center">
                        <span>{{ item.name }}</span>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import img1 from "@/assets/area-basic.png"
import img2 from "@/assets/line-simple.png"
import img3 from "@/assets/line-smooth.png"
import img4 from "@/assets/line-stack.png"

export default {
    naem: "Chart",
    props: ['title', 'type'],
    data() {
        return {
            Table: [
                {
                    name: "基础折线图",
                    path: img1,
                },
                {
                    name: "基础平滑折线图",
                    path: img2,
                },
                {
                    name: "基础面积图",
                    path: img3,
                },
                {
                    name: "折线堆叠图",
                    path: img4,
                },
            ],
        }
    },
    methods: {
        toPrint(path) {
            this.$router.push(path)
            console.log(path)
        }
    }
}
</script>

<style>
.title {
    text-align: left;
    font-size: 1.5rem;
    font-weight: 100;
    margin-left: 100px;
    color: rgb(22, 24, 24);
}
.el-row {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}

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
    margin-bottom: 40px;
    box-shadow: 2px 2px 3px rgba(39, 38, 38, 0.208);
}

.el-card:hover {
    box-shadow: 8px 8px 15px rgba(39, 38, 38, 0.388);
}
</style>