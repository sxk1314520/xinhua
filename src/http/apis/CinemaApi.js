import myAxios from "../MyAxios.js";
import BASEURL from "../BaseUrl.js";

const cinemaApi = {


  /**
   * 删除电影院接口
   * @param {Object} params {id:4}
   */
  delete(params){
    return myAxios.post(BASEURL + "/cinema/del", params)
  },

  /**
   * 添加电影院接口
   * @param {Object} params 详见接口文档
   */
  add(params) {
    return myAxios.post(BASEURL + "/cinema/add", params);
  },

  /**
   * 查询所有电影院
   */
  list(){
    return myAxios.get(BASEURL + "/cinemas")
  },

  /**
   * 查询所有影院标签
   */
  queryAllTags() {
    return myAxios.get(BASEURL + "/cinema/tags");
  },

  /**
   * 查询通过ID查询电影院
   * @param:
   *   params: 存放影院ID的对象  {id:2}
   */
  queryById(params) {
    return myAxios.get(BASEURL + "/cinema/query", params);
  },

  /**
   * 通过id修改影院信息
   * @param {Object} params 详情参考接口文档
   */
  update(params){
    return myAxios.post(BASEURL + "/cinema/update", params);
  },

};

export default cinemaApi;
