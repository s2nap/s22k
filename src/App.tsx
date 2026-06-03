import LogoImg from './assets/yungsnap.png'
import ytIcon from './assets/icons/youtube.svg'
import ttIcon from './assets/icons/tiktok.svg'
import igIcon from './assets/icons/instagram.svg'
import './App.css'

const links = [
  { icon: ytIcon, user: '@yungsnap', url: 'https://www.youtube.com/@yungsnap' },
  { icon: ytIcon, user: '@s2nap', url: 'https://www.youtube.com/@s2nap' },
  { icon: ttIcon, user: '@ss2nap', url: 'https://www.tiktok.com/@ss2nap' },
  { icon: igIcon, user: '@ss2nap', url: 'https://www.instagram.com/ss2nap' },
]

export default function App() {
  return (
    <main className="wrapper">
      
      <div className="card">
  
        {/* LOGO */}
        <section id="center">
          <img src={LogoImg} className="base" alt="logo" />
        </section>

        {/* LINKS */}
        <section id="next-steps">
          <h2>طَقْ</h2>

        <ul className="links">
          {links.map((link, i) => (
          <li key={i}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
            <img src={link.icon} className="icon" />
            <small>{link.user}</small>
            </a>
        </li>

        
      ))}
       </ul>
      </section>
    </div>
      {/*<div className="card bottom-card">
  <ul className="bottom-links">
    {Array.from({ length: 3 }).map((_, i) => (
      <li key={i}>
        <a href="#">
          Botón {i + 1}
        </a>
      </li>
    ))}
  </ul>
</div>*/}
    </main>
  )
}
