<template>
    <div class="msite">
        <header-top>
            <router-link class="header-sousuo" slot="left" to="/search"><i class="iconfont icon-sousuo"></i></router-link>
            <span class="header-login" slot="right">
                <router-link  to="/login"><span class="header-login-text">登录|注册</span></router-link> 
            </span>
        </header-top>
        <div class="msite-nav"></div>
        <div class="msite-shop"></div>
    </div>
</template>
<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop'
    export default {
        components:{
            HeaderTop
        }

    }
</script>

<style lang='less'>



</style>
