<template>
  <div class="backgroundFooter">
    <div>
      <img src="../assets/images/footer.png" />
    </div>
    <div>
      <div class='FooterTitle'>
        <div class="dashboard-title">
          <img src="../assets/images/dashboardList.png" />
        </div>

        <div class="dashboard-content">
          <div class="content">
            <h2 class="content-title">{{ $t(
              "dashboard.title"
            ) }}</h2>
            <p class="content-content">
              {{ $t(
                "dashboard.content"
              ) }} </p>
            <ButtonGround>{{ $t("button.freeTrial") }}</ButtonGround>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>

</script>
  
<style lang="scss" scoped>
.backgroundFooter {
  position: relative;
}

.FooterTitle {
  position: absolute;
  top: -32rem;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
}

.dashboard {
  &-title {
    @apply items-center;
    display: grid;
    place-items: center;
  }

  &-content {
    @apply items-center;
    display: grid;
    place-items: center;

    .content {
      display: grid;
      width: 50%;
      color: white;
      justify-items: center;

      &-title {
        font-size: 48px;
      }

      color:white;
    }
  }
}

.content {

  &-title {
    @apply mt-10;

  }

  &-content {
    @apply my-10;
    width: 72%;
  }
}
</style>