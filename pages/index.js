import Layout from '../components/MyLayout.js'
import Basic from '../components/GuestForm'
import React from 'react'
const axios = require('axios')

async function handleSubmit(values) {
  let data = values;

  await axios.post('/api/guestbook', data)
  .then(async function (response) {
    console.log(response)
    return await response
  })
  .catch(function (error) {
    return error
  });
}

export default () => (
  <Layout>
    <Basic handleSubmit={handleSubmit} />
  </Layout>
)
