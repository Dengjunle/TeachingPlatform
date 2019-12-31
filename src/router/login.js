import login from '@/components/login'
import register from '@/components/register'

const logins = {
    path: "/login",
    name: "login",
    value:"登录页",
    component: login
}

const registers = {
    path: "/register",
    name: "register",
    value:"注册页",
    component: register
}
export default [logins,registers];