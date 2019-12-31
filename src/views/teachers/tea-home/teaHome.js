import headers from '@/components/headers';
import footers from '@/components/footers';
import {mapGetters} from 'vuex';
export default {
    computed: {
        ...mapGetters({
            userinfo:"getUserInfo"//获取用户信息
        })
    },
    components:{
        headers,
        footers
    }
}