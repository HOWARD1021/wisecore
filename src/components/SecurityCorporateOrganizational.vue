<template>
  <div class="securityGrid">
    <img class="icon" src="../assets/images/網站人物去背.png" />
    <div class="securityGrid-Title"> {{ $t(
      "security.title"
    ) }}
      <p class="securityGrid-Content">
        {{ $t(
          "security.content"
        ) }}
      </p>
    </div>
  </div>
</template>
  
<script>

</script>
  
<style lang="scss" scoped>
.securityGrid {
  @apply my-10 items-center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px 40px;
  background-color: #F9F9F9;
  padding: 0rem 3rem;

  &-Title {
    color: #1683CB;
    font-size: 40px;
    font-weight: 700;

    p {
      font-size: 20px;
      color: #616161;
      font-weight: 400;

    }
  }
}
</style>