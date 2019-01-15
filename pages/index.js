import Layout from '../components/MyLayout.js'
import Basic from '../components/GuestForm'
import React from 'react'
const axios = require('axios')

async function handleSubmit(values) {
  let data = values;

  const response = await axios.post('/api/guestbook', data)
  .then(function (response) {
    return response
  })
  .catch(function (error) {
    return error
  });

  return await response;
}

export default () => (
  <Layout>
    <Basic handleSubmit={handleSubmit} />
  </Layout>
)
