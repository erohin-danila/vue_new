import PosterService from "@/services/PosterService"

export default {
    namespaced: true,
    state: () => ({
        poster: null,
        posters: [],

        // posterCat: null,
        // postersCat: []

        // posterDate: null,
        // postersDate: [],

    }),
    actions: {
        async getAll(ctx) {
            const posters = await PosterService.getAll()
            ctx.commit('setPosters', posters.data)
            return posters.data;
        },
        // async getAll(ctx) {
        //     const postersCat = await PosterService.getAll()
        //     ctx.commit('setPosters', postersCat.data)
        //     return postersCat.data;
        // },

        // async getAll(ctx) {
        //     const posters = await PosterService.getDatePost()
        //     ctx.commit('setPosters', postersDate.data)
        //     return postersDate.data;
        // },
     
    },
    mutations: {
        setPosters: (state, payload) => state.posters = payload,
        setPoster: (state, payload) => state.poster = payload,

        // setPostersCat: (state, payload) => state.postersCat = payload,
        // setPosterCat: (state, payload) => state.posterCat = payload,

        // setPosters: (state, payload) => stateDate.posters = payload,
        // setPoster: (state, payload) => stateDate.poster = payload,
    },
    getters: {
        getPosters: state => state.posters,
        getPoster: state => state.poster,

        // getPostersCat: state => state.postersCat,
        // getPosterCat: state => state.posterCat

        // getPosters: state => state.postersDate,
        // getPoster: state => state.posterDate,
    }

}
