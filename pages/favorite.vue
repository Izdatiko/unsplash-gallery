<template>
  <div class="gallery">
    <div class="container">
      <h2>Избранное</h2>
      <div v-if="favorites.favorites.length > 0" class="gallery-content">
        <NuxtLink
          :to="'/photo/' + photo.id"
          v-for="photo in favorites.favorites"
          :key="photo"
          class="gallery-content__photo"
        >
          <img :src="photo.urls.regular" alt="" />
        </NuxtLink>
      </div>
      <div class="gallery-empty" v-else>
        <h3>Ваши избранные пусты</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
const favorites = useFavorites();
</script>