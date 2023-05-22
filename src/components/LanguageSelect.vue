<template>
   
    <select id="countries" v-model="locale" class="ButtonStyle">
        <option value="EN">EN</option>
        <option value="CN">CN</option>
    </select>
</template>

<script setup>
import { useI18n, useLocalePath } from '#imports'
const { locale } = useI18n()

</script>

<style lang="scss" scoped>
.ButtonStyle {
    margin-left: 4rem;
    display: flex;
    align-items: center;
    border: 2px solid #FFFFFF;
    border-radius: 50%;
    font-family: "Inter";
    color: white;
    width: 46px;
    height: 46px;
    justify-content: center;
    background: transparent;
}
</style>