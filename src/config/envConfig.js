import dotenv from 'dotenv'

dotenv.config()

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  starWarsApiAddress: process.env.REACT_APP_STAR_WARS_API
}