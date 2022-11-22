<template>
    <el-container style="height:100%">
        <el-header>
            <Header></Header>
        </el-header>
        <el-container class="main">
            <el-main>
                <div class="center" style="margin: 0 15px">
                    <h2 style="text-align: center; color: #408aca;">账户管理</h2>
                    <div class="avatar">
                        <div style="font-size:20px; color: #408aca">更换头像</div>
                        <el-divider></el-divider>
                        <div class="avatars">
                            <img src="@/assets/avatar/kedaya.png" alt="" class="avatarItem">
                            <img src="@/assets/avatar/jienigui.png" alt="" class="avatarItem">
                            <img src="@/assets/avatar/xiaohuolong.png" alt="" class="avatarItem">
                        </div>
                        <el-button type="primary" round
                            style="float: right; margin-top: 20px; background-color: #62a7e3;">确认</el-button>
                    </div>
                    <div class="changeName">
                        <div style="font-size:20px; color: #408aca; margin-top: 70px;">修改昵称</div>
                        <el-divider></el-divider>
                        <el-form class="nameItem" :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
                            <el-form-item label="名称" style="width: 400px; margin-bottom: 0;">
                                <el-input v-model="formLabelAlign.name" style="width: 200px"></el-input>
                            </el-form-item>
                            <el-button type="primary" round
                                style="float: right;background-color: #62a7e3;">确认</el-button>
                        </el-form>

                    </div>
                    <div class="changePass">
                        <div style="font-size:20px; color: #408aca">修改密码</div>
                        <el-divider></el-divider>
                        <div class="passFrom">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px"
                                class="demo-ruleForm">
                                <el-form-item label="旧密码" prop="pass" style="width: 400px">
                                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="新密码" prop="pass" style="width: 400px">
                                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="确认密码" prop="checkPass" style="width: 400px">
                                    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off">
                                    </el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                                </el-form-item>
                            </el-form>
                        </div>
                    </div>
                </div>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import Header from '@/views/sys/Header.vue'

export default {
    name: "UserCenter",
    components: {
        Header
    },
    data() {
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (this.ruleForm.checkPass !== '') {
                    this.$refs.ruleForm.validateField('checkPass');
                }
                callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.ruleForm.pass) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        return {
            labelPosition: 'right',
            formLabelAlign: {
                name: '',
                region: '',
                type: ''
            },
            ruleForm: {
                pass: '',
                checkPass: '',
            },
            rules: {
                pass: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                checkPass: [
                    { validator: validatePass2, trigger: 'blur' }
                ],
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}
</script>

<style>
.el-main {
    padding: 0 !important;
    display: flex !important;
    flex-direction: column;
    align-items: center;
}

.center {
    padding: 40px;
    width: 800px;
    background-color: #fff;
    height: 100%;
}

.avatarItem {
    border-radius: 50%;
    border: 3px solid #93918f;
    margin: 0 30px;
}

.changePass {
    margin-top: 90px;

}

.passFrom {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.nameItem {
    display: flex;
    flex-direction: row;
    align-items: center;
}
</style>