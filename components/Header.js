import Link from 'next/link'
import React from 'react'

const Header = () => (
  <div>
    <Link href="/">
      <a>Add a Guest</a>
    </Link>
    <Link href="/guestbook">
      <a>Guestbook</a>
    </Link>
    <style jsx>{`
      input[type=text], select {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
      }

      input[type=submit] {
        width: 100%;
        background-color: #4CAF50;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }

      input[type=submit]:hover {
        background-color: #45a049;
      }

      div {
        border-radius: 5px;
        background-color: #f2f2f2;
        padding: 20px;
      }

      h1, a {
        font-family: "Arial";
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        margin-right: 15px
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </div>
)

export default Header