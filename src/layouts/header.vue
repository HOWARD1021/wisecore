<template>
  <header class="header">

    <img class="background" src="../assets/images/background.png" />
    <div class='headerTitle'>

      <div class="titleFlex">
        <div
          class="flex items-center text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
          <img class="icon" src="../assets/images/icon.png" />
          <img class="icon-title" src="../assets/images/WiseCore.png" />

        </div>
        <div class="buttonFlex">
          <div>{{ $t('headers.home') }}</div>
          <div>{{ $t('headers.login') }}</div>
          <ButtonWhiteStyle>{{ $t('button.freeTrial') }}</ButtonWhiteStyle>
          <LanguageSelect></LanguageSelect>
        </div>
      </div>
      <div class="gridHeder">

        <div class="device-title">
          {{ $t('headers.title') }}
          <br>
          {{ $t('headers.secondTitle') }}
          <!-- <p v-html="$t('headers.title')"></p> -->
          <p class="device-content">
            {{ $t('headers.content') }}
          </p>
          <Button>{{ $t('button.freeTrial') }}</Button>
        </div>

        <img class="icon" src="../assets/images/banner_img.png" />

      </div>
    </div>

  </header>
</template>

<script>

</script>

<style lang="scss">
.background {
  position: relative;
  z-index: 1;
}

.headerTitle {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
}

.titleFlex {
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-around;
  padding-left: 1rem;
  margin-bottom: 2rem;
  padding-right: 1rem;
}



.buttonFlex {
  display: flex;
  align-items: center;
  color: white;

  &-language {
    margin-left: 1rem;
    // @apply ml-10;
  }

  >div {
    @apply mx-4;
    // font-size: 24px;
  }



  .buttonPadding {
    padding-right: 1rem;
  }
}

.gridHeder {
  color: white;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px 40px;
  margin: 0 20rem;
}

.icon {
  max-width: 128%;
  &-title {
    margin-left: 12px;
    height: 50%;
  }
}

.device {
  &-title {
    font-size: 30px;
  }

  &-content {
    font-size: 20px;
  }
}


@media screen and (max-width: 1440px) {

  // 圖片大小
  .gridHeder {
    margin: 0 10rem;
  }
}
</style>