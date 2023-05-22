<template>
  <div class="securityGrid">

    <div class="securityGrid-Title">
      {{ $t(
        "management.title"
      ) }}
      <p class="securityGrid-Content">
        {{ $t(
          "management.content"
        ) }}
      </p>
    </div>
    <img class="icon" src="../assets/images/網站app.png" />
  </div>
</template>
  
<script>

</script>
  
<style lang="scss" scoped>
.securityGrid {
  @apply items-center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px 40px;
  padding: 0rem 10rem;
  margin-top: 2.5rem;
  margin-bottom: 35.5rem;

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