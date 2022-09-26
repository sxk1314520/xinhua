import myAxios from '../MyAxios.js'
import BASEURL from '../BaseUrl.js'

const movieThumbApi = {

    /**
     * 添加剧照接口
     * @param {Object} params 详见接口文档
     */
    add(params){
        return myAxios.post(BASEURL+'/movie-thumb/add', params)
    },

    /**
     * 查询相应电影id下的所有剧照
     * @param {Object} params 详见接口文档 page,pagesize
     */
    listByMovieId(params){
        return myAxios.get(BASEURL+'/movie-thumbs/movieid', params)
    },

    /**
     * 删除相应ID的剧照
     * @param {Object} params  {id:1}
     */
     delete(params){
        return myAxios.post(BASEURL+'/movie-thumb/del', params)
    },

}

export default movieThumbApi;