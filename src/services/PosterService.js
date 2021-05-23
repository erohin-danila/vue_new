import {api} from "@/helpers/api"

 class PosterService {

     async getAll() {
         // eslint-disable-next-line no-useless-catch
         try {
             //const res = await api.get('/api/posters/')
             const res = await api.get('/posters')
             return res
         } catch (e) {throw e}
     }

     async getCat() {
        // eslint-disable-next-line no-useless-catch
        try {
            //const res = await api.get('/api/posters/')
            const res = await api.get('/categories')
            return res
        } catch (e) {throw e}
    }

    async getDate() {
         // eslint-disable-next-line no-useless-catch
         try {
             //const res = await api.get('/api/posters/')
             const res = await api.get('/sort_in_ascending_order_of_date')
             return res
         } catch (e) {throw e}
     }
     async getSort() {
         // eslint-disable-next-line no-useless-catch
         try {
             //const res = await api.get('/api/posters/')
             const res = await api.get('/sort_in_ascending_order_of_date')
             return res
         } catch (e) {throw e}
     }

 }

 export default new PosterService()
