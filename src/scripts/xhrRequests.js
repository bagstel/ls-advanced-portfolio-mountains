import axios from 'axios';

axios.defaults.baseURL = 'https://webdev-api.loftschool.com/';

export default function (method, url, data) {
    return axios({
      method: method,
      url: url,
      data: data
    })
      .then(({ data }) => data)
}