import myAxios from '../MyAxios.js'
import BASEURL from '../BaseUrl.js'

const directorApi = {

    /**
     * 添加导演接口
     * @param {Object} params {directorName:xxx, directorAvatar:xxxx}
     */
    add(params){
        return myAxios.post(BASEURL+'/movie-director/add', params)
    },

    /**
     * 通过导演ID删除导演接口
     * @param {Object} params   {id:1}
     */
    delete(params){
        return myAxios.post(BASEURL+'/movie-director/del', params)
    },

    /**
     * 查询导演列表接口
     * @param
     *   params: 封装了请求参数的对象： {page:1, pagesize:100}
     * @returns 
     */
    list(params){
        return myAxios.get(BASEURL+'/movie-directors', params)
    },

    /**
     * 通过姓名模糊查询导演列表
     * @param {Object} params {name: '马'}
     */
    listByName(params){
        return myAxios.post(BASEURL+'/movie-directors/name', params)
    }
}

export default directorApi;