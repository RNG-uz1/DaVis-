<template>
    <el-container style="height:100%">
        <el-header>
            <Header></Header>
        </el-header>
        <el-container>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import Header from '@/views/sys/Header.vue'

export default {
    name: "Print",
    components: {
        Header,
    },
    data() {
        return {

        }
    }
}
</script>

<style>
body {
    height: 100%;
}
</style>