<template>
  <div class="container">
    <div class="gridCard">     
      <div v-for="(card, index) in cardData" :key="index">
        <Card :icon="card.icon" :cardsData="card"></Card>
      </div>
    </div>
    <div class="backgroundCard">

      <img class="shadow-lg" :src="`../assets/images/分離模式.svg`" alt="SVG Image"  />
      <h1 class="backgroundCard-Title">{{ $t("cardList.title") }}</h1>
    </div>
  </div>
</template>


<script>
// import { reactive } from 'vue';
// import { useI18n } from 'vue-i18n';
import { computed, provide, ref } from 'vue';
import { useI18n } from 'vue-i18n';

export default {
  setup() {
    // const { t } = useI18n();
    // const cardData = ref([]);
    // watchEffect(() => { cardData.value = [{ title: t("cardList.securityTitle"), content: t("cardList.securityContent"), icon: "shield" }, { title: t("cardList.deviceTitle"), content: t("cardList.deviceContent"), icon: "star" }, { title: t("cardList.windowDefenderTitle"), content: t("cardList.windowDefenderContent"), icon: "wrench" }]; });
    // return { cardData }
    const { t } = useI18n();
    const cardData = computed(() => [
      {
        title: t("cardList.securityTitle"),
        content: t("cardList.securityContent"),
        icon: "shield"
      },
      {
        title: t("cardList.deviceTitle"),
        content: t("cardList.deviceContent"),
        icon: "star"
      },
      {
        title: t("cardList.windowDefenderTitle"),
        content: t("cardList.windowDefenderContent"),
        icon: "wrench"
      }
    ]);

    provide('$t', t); // 提供 $t 方法

    return {
      cardData
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  margin: auto;
}

.gridCard {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px 0px;
  align-items: center;
  height: 45rem;
  padding-top: 15rem;

}

.backgroundCard {
  align-items: center;
  position: absolute;
  top: -3rem;
  z-index: -1;
  display: flex;

  &-Title {
    color: rgba(33, 106, 174, 0.94);
    font-size: 48px;
    position: absolute;
    top: 14rem;
    left: 26rem;
    width: 300%;
  }
}
</style>