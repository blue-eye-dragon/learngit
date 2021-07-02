const key = 'newapp'
const getUser = () => {
  return JSON.parse(window.sessionStorage.getItem(key) || {})
}
const setUser = (user) => {
  return window.sessionStorage.setItem(key, JSON.stringify(user))
}
const delUser = () => {
  window.sessionStorage.removeItem(key)
}
export default {
  getUser, setUser, delUser
}