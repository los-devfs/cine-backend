import dotenv from 'dotenv';

dotenv.config();

export default {
  server: {
    port: process.env.PORT || 3000,
  },
  database: {
    uri: process.env.URI || 'mongodb://localhost/cine',
  },
  email: {
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_AUTH_USER,
      pass: process.env.EMAIL_AUTH_PASS,
    },
    from: process.env.EMAIL_FROM,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};
