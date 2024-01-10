<template>
  <div class="photo">
    <img :src="photo.urls.regular" class="photo-bg" alt="" />
    <div class="container">
      <div class="photo-content">
        <div class="photo-content__items">
          <div class="photo-content__left">
            <img
              :src="photo.user.profile_image.medium"
              class="photo-content__user"
              alt=""
            />
            <div class="photo-content__info">
              <p>{{ photo.user.username }}</p>
              <p v-if="photo.user.instagram_username">
                <span>Inst: @{{ photo.user.instagram_username }}</span>
              </p>
            </div>
          </div>
          <div class="photo-content__right">
            <button
              @click="favorites.addFavorite(photo)"
              class="photo-content__favorite"
            >
              <IconHeart class="photo-content__heart active" />
            </button>
            <nuxt-link :to="photo.urls.regular" download>
              <IconDownload class="photo-content__download" />
              <p><span>Downloand</span></p>
            </nuxt-link>
          </div>
        </div>
        <div class="photo-content__img">
          <img :src="photo.urls.regular" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
let photo = ref([]);
const { getPhotoById } = useHttp();
const favorites = useFavorites();

photo.value = await getPhotoById(route.params.id);
</script>