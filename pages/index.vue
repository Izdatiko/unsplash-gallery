<template>
  <div>
    <Banner @search="search" />
    <Gallery :photos="photos" />
    <Additional />
  </div>
</template>

<script setup>
let photos = ref([]);
const { getPhotos, searchPhoto } = useHttp();

photos.value = await getPhotos();

async function search(e) {
  photos.value = await searchPhoto(e);
}
</script>