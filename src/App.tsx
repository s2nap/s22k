import LogoImg from './assets/yungsnap.png'
import SharkImg from './assets/shark.png'
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
    <>
      <div className="marquee-band" role="marquee" aria-label="decorative text">
        <span>🧟 ピザ・モッツァレラ ピザ・モッツァレラ レラレラレラレラ レラレラレラ〜 🧟 ピザ・モッツァレラ ピザ・モッツァレラ レラレラレラレラ レラレラレラ〜 🧟 ピザ・モッツァレラ ピザ・モッツァレラ レラレラレラレラ レラレラレラ〜 🧟 ピザ・モッツァレラ ピザ・モッツァレラ レラレラレラレラ レラレラレラ〜 🧟</span>
      </div>

      <img className="shark-decor" src={SharkImg} alt="" aria-hidden="true" />
      
      <main className="wrapper">
        <div className="card">
          <section id="center">
            <img src={LogoImg} className="base" alt="logo" />
          </section>

          <section id="next-steps">
            <ul className="links">
              {links.map((link, i) => (
                <li key={i}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <img src={link.icon} className="icon" alt="icon" />
                    <small>{link.user}</small>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>


        <div className="card">
          <section id="center">
          </section>
        </div>


      </main>
    </>
  )
}