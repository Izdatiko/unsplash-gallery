<template>
  <div class="additional">
    <div class="additional-loader">
      <IconLoader />
    </div>
    <div class="toTop">
      <nuxt-link v-if="showToTop" to="#header">
        <IconToTop />
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
let showToTop = ref(false);

const handleScroll = () => {
  if (window.scrollY < 200) {
    showToTop.value = false;
  } else {
    showToTop.value = true;
  }
};

window.addEventListener("scroll", handleScroll);

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>