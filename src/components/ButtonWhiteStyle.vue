<template>
    <button type="button" class="ButtonStyle">
        <slot></slot>
    </button>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.ButtonStyle {

    @apply flex items-center text-sm px-5 py-2.5 text-center mr-4;
    background: rgba(255, 255, 255, 0.35);
    border: 2px solid #FFFFFF;
    border-radius: 10px;
    font-family: 'Inter';
    // font-size: 24px;
    color: white;

}
</style>