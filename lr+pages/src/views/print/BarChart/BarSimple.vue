<template>
    <el-row :gutter="2" style="width: 100%; height: 100%">
        <el-col :span="10">
            <div class="inputBox">
                <div class="printTitle">基础柱状图</div>
                <div style="color: #688aca">
                    表名：<input class="titleInput" v-model="title" style="margin-right: 10px">
                </div>
                <div>
                    <el-button type="primary" size="small" style="margin: 20px" @click.native="addItem">增加数据</el-button>
                    <el-button type="primary" size="small" style="margin: 20px" @click.native="drawLine">生成图表
                    </el-button>
                </div>
                <div class="scroll">
                    <div class="input" v-for="item, index in arr">
                        {{ index + 1 }}.
                        名称：<el-input v-model="arr[index].name" style="margin-right: 10px"></el-input>
                        值：<el-input v-model="arr[index].value"></el-input>
                        <el-button @click.native="deleteItem(index)" type="primary" icon="el-icon-delete" size="small"
                            circle style="margin-left: 30px">
                        </el-button>
                    </div>
                </div>
            </div>
        </el-col>
        <el-col :span="14">
            <div class="drawBox">
                <div class="draw">
                    <div id="chart" :style="{ width: '800px', height: '580px' }"></div>
                </div>
                <div class="battons">
                    <button class="saveButton" @click="downloadFile">保存到本地</button>
                    <button class="saveButton">保存到图表库</button>
                </div>
            </div>
        </el-col>
    </el-row>
</template>

<script>
export default {
    naem: "BarSimple",
    data() {
        return {
            title: '',
            arr: [
                {
                    name: '',
                    value: '',
                },

            ]
        }
    },
    mounted() {
        this.drawLine();
    },
    methods: {
        drawLine() {
            var newXAxis = []
            var newYAxis = []
            var chartTitle = this.title
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('chart'))

            //将页面数据转化为echarts能用的数据
            console.log(this.arr.length)
            for (let i = 0; i < this.arr.length; i++) {
                newXAxis.push(this.arr[i].name)
                newYAxis.push(this.arr[i].value)
            }


            // 绘制图表
            myChart.setOption({
                title: { text: chartTitle },
                tooltip: {},
                xAxis: {
                    data: newXAxis
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: newYAxis
                }]
            });
        },

        // 点击保存下载图片
        downloadFile() {
            let aLink = document.createElement('a');
            let blob = this.base64ToBlob();
            let evt = document.createEvent('HTMLEvents');
            evt.initEvent('click', true, true);
            if (this.title == '') {
                aLink.download = this.randomString(16);
            } else {
                aLink.download =this.title
            }
            aLink.download = this.title; //下载图片的名称
            aLink.href = URL.createObjectURL(blob);
            aLink.click();
        },
        exportImg() { //echart返回一个 base64 的 URL
            let myChart = this.$echarts.init(
                document.getElementById('chart')
            );
            return myChart.getDataURL({
                type: 'png',
                pixelRatio: 1,
                backgroundColor: '#fff'
            })
        },
        base64ToBlob() { //将base64转换blob
            let img = this.exportImg();
            let parts = img.split(';base64,');
            let contentType = parts[0].split(':')[1];
            let raw = window.atob(parts[1]);
            let rawLength = raw.length;
            let uInt8Array = new Uint8Array(rawLength);
            for (let i = 0; i < rawLength; ++i) {
                uInt8Array[i] = raw.charCodeAt(i);
            }
            return new Blob([uInt8Array], {
                type: contentType
            });
        },


        //增加按钮
        addItem() {
            var dataItem = {
                naem: '',
                valu: '',
            }
            this.arr.push(dataItem)
            console.log("增加了1")
        },

        //删除按钮
        deleteItem(index) {
            this.arr.splice(index, 1)
            console.log("删除了1")
            console.log(this.arr)
        },

        //生成随机字符串用来命名
        randomString(len) {
            len = len || 32;
            var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
            var maxPos = $chars.length;
            var pwd = '';
            for (let i = 0; i < len; i++) {
                pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
            }
            return pwd;
        }
    }
}
</script>

<style>
.drawBox {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #f2f3f9;
}

.draw {
    margin-top: 15px;
    border-radius: 9px;
    box-shadow: 4px 4px 4px rgba(39, 38, 38, 0.144);
    width: 95%;
    height: 90%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.scroll {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 400px;
    width: 100%;
    overflow: auto;
}

.battons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.saveButton {
    margin: 10px;
    color: #fff;
    background-color: #688aca;
    font-size: 10px;
    width: 100px;
    height: 30px;
    border: 1px solid rgb(162, 168, 174);
    border-radius: 8px;
    text-align: center;
    box-shadow: 4px 4px 4px rgba(39, 38, 38, 0.144);
}

.inputBox {
    width: 95%;
    border-right: 1px solid rgb(239, 236, 236);
    height: 100%;
    background-color: rgb(254, 254, 254);
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    overflow: hidden;
}

.el-input {
    width: 120px;
}

.printTitle {
    font-size: 30px;
    margin: 20px;
}

.input {
    font-size: 17px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.titleInput {
    font-size: 20px;
    outline: none;
    border: none;
    width: 200px;
    border-bottom: #688aca 2px solid;
    margin: 20px;
}
</style>