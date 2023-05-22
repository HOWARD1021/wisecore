<template>
    <div>
        <button type="button" class="ButtonStyle">
            <slot></slot>
        </button>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.ButtonStyle {
    @apply text-white font-bold py-2 px-4 rounded;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 23px;
    background: #EEC122;
    width: 261px;
}
</style>