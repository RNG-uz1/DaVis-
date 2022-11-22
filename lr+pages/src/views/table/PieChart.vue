<template>
    <div style="width: 100%">
        <Chart :title="title" :type="type"></Chart>
    </div>
</template>



<script>

import Chart from '@/components/Chart.vue'

export default {
    name: "PieChart",
    components: {
        Chart
    },
    data() {
        return {
            //大类名称
            title: '饼状图',

            //大类下对应的小类（基础柱状图、**柱状图、等）
            type: [
                {
                    name: '基础柱状图',
                    //卡片封面
                    cover: require('@/assets/cover/PieChart/pie-area-basic.png'),
                    //点击卡片后跳转的路由
                    path: '/print/pieAreaBasic',
                },
            ]
        }
    }
}
</script>

<style>

</style>