import LogoImg from './assets/yungsnap.png'
import './App.css'

const links = [
  { name: 'YouTube', user: '@yungsnap', url: 'https://www.youtube.com/@yungsnap' },
  { name: 'YouTube', user: '@ss2nap', url: 'https://www.youtube.com/@ss2nap' },
  { name: 'TikTok', user: '@ss2nap', url: 'https://www.tiktok.com/@ss2nap' },
  { name: 'Instagram', user: '@ss2nap', url: 'https://www.instagram.com/ss2nap' },
]

export default function App() {
  return (
    <>
      {/* LOGO */}
      <section id="center">
        <img src={LogoImg} className="base" alt="logo" />
      </section>

      {/* LINKS */}
      <section id="next-steps">
        <h2>Social Media</h2>

        <ul className="links">
          {links.map((link, i) => (
            <li key={i}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                <span>{link.name}</span>
                <small>{link.user}</small>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}