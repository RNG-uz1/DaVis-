<template>
    <div id="page">
        <el-row>
            <el-col :span="16" class="left">
                <div class="logo" style="margin-left: 20px">
                    <img src="@/assets/logo2.png" alt="" style="height: 300%">
                </div>
            </el-col>
            <el-col :span="8" class="right">
                <div class="login">
                    <div style="font-size: 40px; margin: 30px 0; font-weight: 600; color: #488fce;">注册</div>
                    <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="80px" class="loginForm">
                        <el-form-item label="用户名" prop="username" class="cc">
                            <el-input class="input" v-model="loginForm.username" style="width: 170px;"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="password" class="cc">
                            <el-input class="input" v-model="loginForm.password" style="width: 200px"></el-input>
                        </el-form-item>
                        <div class="bb">
                            <el-form-item>
                            <el-button type="primary" @click="submitForm('loginForm')">注册</el-button>
                            <router-link to="/login"><div class="register">登录</div></router-link>
                            
                        </el-form-item>
                        </div>

                    </el-form>
                </div>
            </el-col>
        </el-row>
    </div>


</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            loginForm: {
                username: '',
                password: '',
                code: '',
                token: ''
            },
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },

                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'change' }
                ],
            },
            captchaImg: null,
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$axios.post('/login', this.loginForm).then(res => {

                        const jwt = res.headers['authorization']

                        this.$store.commit('SET_TOKEN', jwt)

                        this.$router.push("/")
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },

        getCaptcha() {
            this.$axios.get('/captcha').then(res => {
                console.log('/captcha')
                console.log(res.data)
                this.loginForm.token = res.data.data.token
                this.captchaImg = res.data.data.captchaImg
            })
        },
    },
    created() {
        this.getCaptcha()
    }
}
</script>

<style scoped>
.login {
    height: 450px;
    width: 350px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 5px 5px 20px rgba(83, 82, 82, 0.388);
    border-radius: 20px;
}

#page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #eae9ec;
    height: 100%;
    display: flex;
}

.el-row {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.left {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.cc /deep/ .el-form-item__content {
    transform: translate(20px);
}

.cc /deep/ .el-form-item__label {
    transform: translate(10px);
    font-size: large;
    padding: 0;
}

.cc /deep/ .el-form-item__label::before{
    content: '' !important;
}
.el-button {
    margin-left: 0 !important;
}

.logo {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 100px;
    transform: translate(70px);
}

.login {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.bb {
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}


.el-form-item {
    margin-bottom: 50px;
}

.input /deep/ .el-input__inner {
    border: 0;
    border-bottom: 2px solid #488fce;
    border-radius: 0;
    height: 20px;
    font-size: 20px;
    width: 170px;
}


.loginForm {
    width: 100%;
}

.el-button {
    background-color: #488fce;
    transform: translate(-50px);
    width: 130px;
    height: 50px;
    border-radius: 25px;
    margin-left: 100px;
}

.captchaImg {
    float: left;
    margin-left: 20px;
    border-radius: 4px;
}

.register {
    color: #000;
    cursor: pointer;
    text-decoration: underline;
}
</style>