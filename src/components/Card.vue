<template>
    <div class="card  ">

        <div class="cardStyle">
            <div class=" imgStyle rounded-full">
                <img class="icon  w-24 h-24 mb-3  shadow-lg" :src="`../assets/images/${icon}.png`" alt="Shield" width="150"
                    height="150" />
            </div>
            <h5 class=" mb-1 text-xl font-medium text-gray-900 dark:text-black">{{ cardsData.title }}</h5>
            <span class="  text-sm text-gray-500 dark:text-gray-400">{{ cardsData.content }}</span>

        </div>
    </div>
</template>

<script  setup>
const props = defineProps({
    title: {
        type: String,
    },
    content: {
        type: String,
    },
    icon: {
        type: String,
    },
    cardsData: {
        type: Object
    }
})
const param1 = reactive([])
const { content, title, icon } = props

</script>


<style lang="scss" scoped>
.cardStyle {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 2.5rem;
    margin: 0rem 2rem;
    max-width: 30rem;
    border-radius: 15px;
}

.imgStyle {
    @apply w-24 h-24;
    position: relative;
    top: -3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1676BF;

}

.icon {
    @apply w-12 h-12;

}

.card {
    @apply max-w-sm bg-white border border-gray-200 rounded-lg shadow;
    width: 363px;

}
</style>