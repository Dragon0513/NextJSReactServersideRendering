import React from 'react'
import Layout from '../components/MyLayout.js'
const axios = require('axios')

class Guestbook extends React.Component {
  static async getInitialProps () {
    const res = await axios.get('/api/guestbook');
    const posts = await res.data

    return { posts }
  }

  constructor (props) {
    super(props)
  }

  componentWillMount() {
    this.setState({
      posts: this.props.posts
    })
  }

  render () {
    const { posts } = this.props

    return (
      <div>
        {
          <Layout>
            <div>
            <div className="guestbook-container">
              {posts.length > 0 && posts.map((post, i) => (
                <div key={i} className="guest-message-row">
                  <div style={{marginBottom: '5px'}}>{post.fullname}</div>
                  <span style={{fontWeight: 'bold'}}>Message:</span> <br />
                  <div style={{margin: '5px'}}>{post.message}</div>
                </div>
              ))}
              {posts.length === 0 && <div className="no-entries">No entries exist</div>}
            </div>
            </div>
          </Layout>
        }
        <style jsx>{`
          .no-entries {
            margin: 10px;
            font-family: arial;
          }

          .guestbook-container {
            margin-top: 10px;
            border-radius: 5px;
            background-color: #f2f2f2;
            padding: 20px;
            width: '100%',
            marginTop: '10px'
          }

          .guest-message-row {
            font-family: arial;
            border-bottom: 1px solid black;
            margin-bottom: 5px;
            width: 50%;
          }

          h2 {
            font-family: arial
          }

        `}</style>
      </div>
    )
  }
}

export default Guestbook