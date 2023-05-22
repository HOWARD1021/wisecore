<template>
    <div>
        <h1 class="searchTitle">易师傅的详细页面</h1>

        <h2>title 1 {{ testArr }}</h2>
        <p>内容 1</p>

        <h2>title 2</h2>

        <p>内容 2</p>

        <h2>title 3</h2>

        <p>内容 3</p>

        <h2>title 4</h2>

        <p>内容 4</p>
    </div>
</template>
  

<script  setup>
const param1 = ref('value1')
const { data, pending, error, refresh } = await useFetch('https://api.nuxtjs.dev/mountains', {
    query: { param1, param2: 'value2' }
})
const testArr = data
// console.log(data.value[0].continent, 'data')
</script>

<style lang="scss" scoped>
.searchTitle {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 1rem 0 1rem 0;
}
</style>