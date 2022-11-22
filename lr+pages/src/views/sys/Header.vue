<template>
    <div class="head">
        <!-- "require('@/assets/logo2.png')" -->
        <div class="logo" style="margin-left: 10px">
            <img src="@/assets/logo2.png" alt="" style="height: 100%">
        </div>
        <el-menu :default-active="$route.name" text-color="#1989FA" active-text-color="#1989FA" class="el-menu-demo"
            mode="horizontal">
            <el-menu-item index="LineChart">
                <router-link to="/home/lineChart" style="padding: 0 20px" class="menu">首页</router-link>
            </el-menu-item>
            <el-menu-item index="ChartLibrary">
                <router-link to="/chartLibrary" style="padding: 0 20px" class="menu">个人图表库</router-link>
            </el-menu-item>
        </el-menu>
        <div class="header-avatar">
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            <el-dropdown style="cursor: pointer;">
                <div class="dropdown">
                    测试用户<i class="el-icon-arrow-down el-icon--right"></i>
                </div>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>
                        <router-link to="/userCenter">个人中心</router-link>
                    </el-dropdown-item>
                    <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: '1',
            defaultActive: "this.$route.name"
        };
    },
    computed: {
        
    },
    created: function () {
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        logout() {
            this.$router.push('/login')
        },
        create() {
            console.log(123,this.$route.name)
            
        }
    }
}
</script>

<style>
.head {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;  
}

.logo {
    height: 80%;
}

.el-menu-item {
    padding: 0 !important;
}

.menu{
    height: 100%;
}

.menu:hover {
    background-color: rgba(242, 242, 242, 0.454);
}

.header-avatar {
    position: absolute;
    width: 140px;
    height: 100%;
    right: 0;
    float: right;
    line-height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}

.el-icon-arrow-down {
    font-size: 12px;
}
</style>