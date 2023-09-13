export const useFavorites = definePiniaStore("favorites", {
    state: () => ({
        favorites: [],
    }),
    actions: {
        addFavorite(favorite) {
            if (!this.favorites.includes(favorite)) {
                console.log("Добавлено", this.favorites);
                this.favorites.push(favorite);
            }
        },
    },
    getters: {
        getCount: (state) => state.favorites,
    },
});
