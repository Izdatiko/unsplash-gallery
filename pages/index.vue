<template>
    <div>
        <Banner @search="search" />
        <Gallery :photos="photos" />
        <ClientOnly>

          
            <Additional />
        </ClientOnly>
    </div>
</template>

<script setup>
const lol = 'lol'

let photos = ref([])
const { getPhotos, searchPhoto } = useHttp()

photos.value = await getPhotos()

async function search(e) {
    photos.value = await searchPhoto(e)
}
</script>