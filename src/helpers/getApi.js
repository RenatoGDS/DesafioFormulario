import axios from "axios";

export async function getApi(URL) {
  return axios.get(URL).then((response) => response.data);
}
