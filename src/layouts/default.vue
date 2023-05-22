<template>
    <div>
        <NuxtLayout name="header" />
        
        <!-- <h1 class="text-3xl font-bold underline">这里是易师傅的默认模板，可以添加在所有页面，也可单独添加sss</h1> -->
        <slot />
        <NuxtLayout name="footer" />

    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>