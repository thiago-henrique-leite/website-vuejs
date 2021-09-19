import axios from "axios";

const api = axios.create({
  baseURL:'https://raw.githubusercontent.com/thiago-henrique-leite/website-vuejs/master/api'
})

export default api;