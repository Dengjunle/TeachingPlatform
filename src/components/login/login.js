import { mapActions, mapGetters } from 'vuex'
export default {
    data() {
        var checkUsername = (rule, value, callback) => {
            if (value === '') {
                return callback(new Error('用户名不能为空'));
            } else {
                callback();
            }
        };
        var checkPassword = (rule, value, callback) => {
            if (value === '') {
                return callback(new Error('密码不能为空'));
            } else {
                callback();
            }
        };
        return {
            ruleForm: {
                password: '',
                username: '',
                type: 'teacher'
            },
            rules: {
                password: [
                    { validator: checkPassword, trigger: 'blur' }
                ],
                username: [
                    { validator: checkUsername, trigger: 'blur' }
                ]
            }
        };
    },
    computed: {
        ...mapGetters({
            userid: 'getUserId'
        })
    },
    methods: {
        ...mapActions(['login', 'getUserInfo']),
        submitForm(formName) {
            this.$refs[formName].validate(async (valid) => {
                if (valid) {
                    //登录接口以及保存信息到本地和vuex
                    await this.login(this.ruleForm);
                    if (this.userid) {
                        let params = {
                            userid: this.userid,
                            type: this.ruleForm.type
                        }
                        await this.getUserInfo(params);
                        if (this.ruleForm.type == 'teacher') {
                            this.$router.push({ path: '/teacher' });
                        } else if (this.ruleForm.type == 'student') {
                            this.$router.push({ path: '/student' });
                        }
                    } else {
                        this.$message.info('用户名或者密码错误')
                    }
                } else {
                    // console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}