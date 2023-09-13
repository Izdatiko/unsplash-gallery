<template>
  <div id="header" class="header">
    <div class="container">
      <div class="header-content">
        <div class="header-content__logo">
          <nuxt-link to="/">
            <IconLogo />
          </nuxt-link>
        </div>
        <div class="header-content__item">
          <nuxt-link to="/favorite">
            <IconHeart />
            <p>Избранное</p>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>