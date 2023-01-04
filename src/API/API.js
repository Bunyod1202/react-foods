import axios from "axios"

const BASE_URL = "http://localhost:5000"
export const api = {
  postProducts: (obj) => {
    axios.post(BASE_URL, {
      params: {
        food:"food"
      }

    },obj)
  }
}