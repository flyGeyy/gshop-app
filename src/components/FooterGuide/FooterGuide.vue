<template>
    <div>
        <div class="footer-guide border-top-1px clearFix">
           <span class="guide-item" :class="{on:'/msite'===$route.path}" @click="goTo('/msite')">
                <i class="iconfont icon-waimai"></i>
                <span>外卖</span>
            </span>
            <span class="guide-item" :class="{on:'/search'===$route.path}" @click="goTo('/search')">
                <i class="iconfont icon-search"></i>
                <span>搜索</span>
            </span>
            <span class="guide-item" :class="{on:'/order'===$route.path}" @click="goTo('/order')">
                <i class="iconfont icon-dingdan"></i>
                <span>订单</span>
            </span>
            <span class="guide-item" :class="{on:'/profile'===$route.path}" @click="goTo('/profile')">
                <i class="iconfont icon-geren"></i>
                <span>我的</span> 
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "",
        methods:{
            goTo(path){
                this.$router.replace(path)

            }
        }
    }
</script>

<style lang="less">
@import "../../common/less/mixins.less";
.footer-guide{
    height: 50px;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    .guide-item{
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content:center;
        align-items: center;
    //    text-align: center; 
       height: 50px;
       padding-top: 6px;
       color: #999;
       box-sizing: border-box;

       i{
           display: block;
           font-size: 22px;
       }
       span{
           font-size: 12px;
           margin-top: 5px;

       }
       &.on{
        color: #02a774;
       }

    }

}

</style>
