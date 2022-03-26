<template>
  <div class="left-container"> 
    <ul class="social-Style">
        <li>
            <el-tooltip placement="right">
                <template #content>
                    <a href="https://github.com/zuxian" aria-label="GitHub" target="_blank" rel="noreferrer">
                       <span class="tooltip-box-item">GitHub: github.com/zuxian</span>
                    </a>
                </template>
                <a href="https://github.com/zuxian" aria-label="GitHub" target="_blank" rel="noreferrer">
                    <span class="iconfont icon-github"></span>
                </a>
            </el-tooltip>
        </li>
        <li>
            <el-tooltip placement="right">
                <template #content>
                    <a href="http://47.103.74.217" aria-label="博客" target="_blank" rel="noreferrer">
                       <span class="tooltip-box-item">博客: 47.103.74.217</span>
                    </a>
                </template>
                <a href="http://47.103.74.217" aria-label="博客" target="_blank" rel="noreferrer">
                    <span class="iconfont icon-blog"></span>
                </a>
            </el-tooltip>
        </li>
        <li>
            <el-tooltip placement="right">
                <template #content>
                    <a href="https://blog.csdn.net/image_fzx" aria-label="CSDN" target="_blank" rel="noreferrer">
                       <span class="tooltip-box-item">CSDN: blog.csdn.net/image_fzx</span>
                    </a>
                </template>
                <a href="https://blog.csdn.net/image_fzx" aria-label="CSDN" target="_blank" rel="noreferrer">
                    <span class="iconfont icon-csdn"></span>
                </a>
            </el-tooltip>
        </li>
        <li>
            <el-tooltip placement="right">
                <template #content>
                    <a href="mailto:zuxian_fu@163.com" aria-label="邮箱" target="_blank" rel="noreferrer">
                       <span class="tooltip-box-item">邮箱: zuxian_fu@163.com</span>
                    </a>
                </template>
                <a href="mailto:zuxian_fu@163.com" aria-label="邮箱" target="_blank" rel="noreferrer">
                    <span class="iconfont icon-youxiang"></span>
                </a>
            </el-tooltip>
        </li>
        <li>
            <el-tooltip placement="right">
                <template #content>
                    <img class="tooltip-img-item" src="../assets/images/weChat.jpg"  alt="WeChat-fzx" />
                </template>
                <span class="iconfont icon-weixin"></span>
            </el-tooltip>
        </li>
        <li>
            <el-tooltip placement="right">
                <template #content>
                    <img class="tooltip-img-item" src="../assets/images/video-fzx.png"  alt="video-fzx" />
                </template>
                <span class="iconfont icon-shipin"></span>
            </el-tooltip>
        </li>
        </ul>
    left
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.left-container{
    width: 40px;
    position: fixed;
    bottom: 0px;
    left: 40px;
    right: auto;
    z-index: 10;
}
.iconfont {
    font-size: 26px;
    color: aliceblue;
    &:hover{
        color: $imp-text-color;
    }
}
.tooltip-box-item{
    color: $imp-text-color;
}
.tooltip-img-item {
    width: 150px;
    height: 150px;
}
</style>