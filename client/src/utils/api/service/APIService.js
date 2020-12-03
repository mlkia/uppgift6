import http from '../API'

const getAllUseres = () => {
  return http.get ('/user')
}

const createNewUser = (credentials) => {
  return http.post ('/user',credentials)
}

const getUserById = (credentials) => {
  return http.get ('/user',credentials)
}

export default {
  getAllUseres,
  createNewUser,
  getUserById
}
