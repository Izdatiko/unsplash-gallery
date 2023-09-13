<template>
  <div class="gallery">
    <div class="container">
      <div class="gallery-content">
        <NuxtLink
          :to="'/photo/' + photo.id"
          v-for="photo in photos.slice(0, 9)"
          :key="photo.id"
          class="gallery-content__photo"
        >
          <img :src="photo.urls.regular" alt="" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  photos: {
    type: Object,
    required: true,
  },
});
</script>