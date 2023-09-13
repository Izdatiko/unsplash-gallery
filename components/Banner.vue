<template>
  <div class="banner">
    <div class="container">
      <div class="banner-content">
        <form
          @submit.prevent="$emit('search', searchText)"
          class="banner-content__form"
          for="search"
        >
          <input v-model="searchText" type="text" placeholder="Поиск" />
          <button type="submit">
            <IconSearch />
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
let searchText = ref("");
</script>
