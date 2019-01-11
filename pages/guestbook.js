import React from 'react'
import Layout from '../components/MyLayout.js'
import Router from 'next/router'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

class Guestbook extends React.Component {
  static async getInitialProps () {
    const res = await fetch('http://localhost:3000/api/guestbook')
    const posts = await res.json()
    return { posts }
  }

  constructor (props) {
    super(props)
    //this.onKeyDown = this.onKeyDown.bind(this)
  }

  componentWillMount() {
    this.setState({
      posts: this.props.posts
    })
  }

  render () {
    const { posts } = this.props

    return (
      <div className='list'>
        {
          <Layout>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <Link as={`/p/${post.id}`} href={`/post?id=${post.id}`}>
                  <a>{post.name}</a>
                </Link>
              </li>
            ))}
          </ul>
          </Layout>

        }
        <style jsx>{`
          // .list {
          //   padding: 50px;
          //   text-align: center;
          // }

          .photo {
            display: inline-block;
          }

          .photoLink {
            color: #333;
            verticalAlign: middle;
            cursor: pointer;
            background: #eee;
            display: inline-block;
            width: 250px;
            height: 250px;
            line-height: 250px;
            margin: 10px;
            border: 2px solid transparent;
          }

          .photoLink:hover {
            borderColor: blue;
          }
        `}</style>
      </div>
    )
  }
}

export default Guestbook