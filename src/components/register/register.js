import { mapActions, mapGetters } from 'vuex'
export default {
    data() {
        var checkUsername = async (rule, value, callback) => {
            if (value === '') {
                return callback(new Error('用户名不能为空'));
            } else if (!value.match(/^.{2,12}$/)) {
                return callback(new Error('请输入2-12位用户名'));
            } else {
                let result = await this.$api.register.checkUsername(value)
                if (result == 1) {
                    callback();
                } else {
                    return callback(new Error('用户名已存在'));
                }

            }
        };
        var checkStuNum = async (rule, value, callback) => {
            if (value === '') {
                return callback(new Error('学号不能为空'));
            } else {
                let result = await this.$api.register.checkId(value)
                if (result == 1) {
                    callback();
                } else {
                    return callback(new Error('学号已经注册'));
                }
            }
        };
        var checkStuName = (rule, value, callback) => {
            if (value === '') {
                return callback(new Error('姓名不能为空'));
            } else {
                callback();
            }
        };
        var checkPassword = (rule, value, callback) => {
            if (value === '') {
                return callback(new Error('密码不能为空'));
            } else if (!value.match(/^[0-9,a-z,A-Z]{6,18}$/)) {
                return callback(new Error('请输入6-18位密码'));
            } else {
                if (this.ruleForm.rePassword !== '') {
                    this.$refs.ruleForm.validateField('rePassword');
                }
                callback();
            }
        };
        var checkPassword2 = (rule, value, callback) => {
            if (value === '') {
                return callback(new Error('密码不能为空'));
            } else if (value !== this.ruleForm.pwd) {
                return callback(new Error('两次输入密码不一致'));
            } else {
                callback();
            }
        }
        var checkPhone = (rule, value, callback) => {
            if (value === '') {
                return callback(new Error('手机号码不能为空'));
            } else {
                callback();
            }
        };
        return {
            ruleForm: {
                username: '',
                stuNum: '',
                stuName: '',
                sex: '男',
                pwd: '',
                rePassword: '',
                phone: ''
            },
            rules: {
                username: [
                    { validator: checkUsername, trigger: 'blur' }
                ],
                stuNum: [
                    { validator: checkStuNum, trigger: 'blur' }
                ],
                stuName: [
                    { validator: checkStuName, trigger: 'blur' }
                ],
                pwd: [
                    { validator: checkPassword, trigger: 'blur' }
                ],
                rePassword: [
                    { validator: checkPassword2, trigger: 'blur' }
                ],
                phone: [
                    { validator: checkPhone, trigger: 'blur' }
                ],
            },
            resource: ''
        };
    },
    computed: {
        ...mapGetters({
            userid: 'getUserId'
        })
    },
    methods: {
        ...mapActions(['login','getUserInfo']),
        submitForm(formName) {
            this.$refs[formName].validate(async (valid) => {
                if (valid) {
                    let params = {
                        'id': this.ruleForm.stuNum,
                        'name': this.ruleForm.stuName,
                        'username': this.ruleForm.username,
                        'password': this.ruleForm.pwd,
                        'sex': this.ruleForm.sex,
                        'phone': this.ruleForm.phone
                    }
                    let result = await this.$api.register.userRegister(params)
                    if (result) {
                        this.$message.success('注册成功')
                        let ruleForm = {
                            password: this.ruleForm.pwd,
                            username: this.ruleForm.username,
                            type: 'student'
                        }
                        await this.login(ruleForm);
                        let params = {
                            userid: this.userid,
                            type: 'student'
                        }
                        await this.getUserInfo(params);
                        this.$router.push({ path: '/student' });
                    } else {
                        this.$message.info('注册失败')
                    }
                } else {
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}