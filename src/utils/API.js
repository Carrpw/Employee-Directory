import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=25";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    search: function (query) {
        return axios.get(BASEURL + query);
    }
};