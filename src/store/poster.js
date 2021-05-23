import PosterService from "@/services/PosterService"

export default {
    namespaced: true,
    state: () => ({
        poster: null,
        posters: [],

        posterCat: null,
        postersCat: [],

        posterDate: null,
        postersDate: [],

        posterSort: null,
        postersSort: [],

    }),
    actions: {
        async getAll(ctx) {
            const posters = await PosterService.getAll()
            ctx.commit('setPosters', posters.data)
            return posters.data;
        },
        async getCat(ctx) {
            const postersCat = await PosterService.getCat()
            ctx.commit('setPostersCat', postersCat.data)
            return postersCat.data;
        },

        async getDate(ctx) {
            const postersDate = await PosterService.getDate()
            ctx.commit('setPostersDate', postersDate.data)
            return postersDate.data;
        },

        async getSort(ctx) {
            const postersSort = await PosterService.getSort()
            ctx.commit('setPostersSort', postersSort.data)
            return postersSort.data;
        },

    },
    mutations: {
        setPosters: (state, payload) => state.posters = payload,
        setPoster: (state, payload) => state.poster = payload,

        setPostersCat: (state, payload) => state.postersCat = payload,
        setPosterCat: (state, payload) => state.posterCat = payload,

        setPostersDate: (state, payload) => state.postersDate = payload,
        setPosterDate: (state, payload) => state.posterDate = payload,

        setPostersSort: (state, payload) => state.postersSort = payload,
        setPosterSort: (state, payload) => state.posterSort = payload,
    },
    getters: {
        getPosters: state => state.posters,
        getPoster: state => state.poster,

        getPostersCat: state => state.postersCat,
        getPosterCat: state => state.posterCat,

        getPostersDate: state => state.postersDate,
        getPosterDate: state => state.posterDate,

        getPostersSort: state => state.postersDate,
        getPosterSort: state => state.posterDate,
    }

}
