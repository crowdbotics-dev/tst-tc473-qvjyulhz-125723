import axios from "axios"
import {
  TST_TC473_QVJYULHZPW_PASSWORD,
  TST_TC473_QVJYULHZPW_USERNAME
} from "react-native-dotenv"
const tSTTCqvjyulhzpw = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC473_QVJYULHZPW_PASSWORD,
    password: TST_TC473_QVJYULHZPW_USERNAME
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function tsttc473qvjyulhzpw_get_getUserDetails_read(payload) {
  return tSTTCqvjyulhzpw.get(`/getUser${payload.Details}`)
}
export const apiService = { tsttc473qvjyulhzpw_get_getUserDetails_read }
