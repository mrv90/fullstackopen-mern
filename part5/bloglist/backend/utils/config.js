require('dotenv').config()

let PORT = process.env.PORT
let MONGODB_URI = process.env.MONGODB_URI

if (process.env.NODE_ENV === 'test') {
  MONGODB_URI = process.env.LOCAL_MONGODB_URI
} else if (process.env.NODE_ENV === 'development') {
  MONGODB_URI = process.env.LOCAL_MONGODB_URI
} else if (process.env.NODE_ENV === 'production') {
  MONGODB_URI = process.env.CLOUD_MONGODB_URI
}

module.exports = {
  MONGODB_URI,
  PORT
}