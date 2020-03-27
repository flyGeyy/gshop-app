<template>
    <header class="header">
        <slot name="left"></slot>
        <span class="header-title ellipsis">昌平区北七家修正昌平区北七家修正</span>
        <slot name="right"></slot>
    </header>
</template>
<script>
export default {
    
}
</script>
<style lang="less">
.header{
    width: 100%;
    height: 45px;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    z-index: 100;
    background-color: #02a774;
    .header-sousuo{
        position: absolute;
        top: 50%;
        left: 15px;
        width: 10%;
        height: 50%;
        transform: translateY(-50%);
        .iconfont{
        font-size: 25px;
        color: #fff;
        }
    }
    .header-title{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 50%;
        font-size: 20px;
        color: #ffffff;
    }
    .header-login{
        position: absolute;
        top: 50%;
        right: 15px;
        transform: translateY(-50%);
        .header-login-text{
          font-size: 14px;
          color: #ffffff  
        }
    }
}
</style>