import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/guestbook">
      <a style={linkStyle}>Guestbook</a>
    </Link>
  </div>
)

export default Header