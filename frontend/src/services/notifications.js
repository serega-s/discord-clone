import axios from "axios"

export const sendNewInvitation = (to_user, to_server) => {
  const data = {
    to_user,
    to_server,
    notification_type: 1,
  }
  const promise = axios.post("api/notification/createinvitation/", data)
  const dataPromise = promise.then((response) => response.data)
  return dataPromise
}
