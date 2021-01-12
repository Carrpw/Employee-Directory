import axios from "axios";
const BASEURL = "https://randomuser.me/api/";
const APIKEY = "VBJV-QT4T-G228-3DHT";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};