<template>
    <Chart :title="title" :type="type"></Chart>
</template>





<script>

import Chart from '@/components/Chart.vue'

export default {
    name: "LineChart",
    components: {
        Chart
    },
    data() {
        return {
            title: '折线图',
            type: [
                {
                    name: '基础折线图',
                    cover: require('@/assets/cover/LineChart/line-simple.png'),
                    path: '',
                },
                {
                    name: '基础平滑折线图',
                    cover: require('@/assets/cover/LineChart/line-simple.png'),
                    path: '',
                },
                {
                    name: '基础平滑折线图',
                    cover: require('@/assets/cover/LineChart/line-simple.png'),
                    path: '',
                },
                {
                    name: '基础平滑折线图',
                    cover: require('@/assets/cover/LineChart/line-simple.png'),
                    path: '',
                }
            ]
        }
    }
}
</script>

<style>

</style>