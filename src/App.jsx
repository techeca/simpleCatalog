import './App.css'
import { ExpandableCardDemo } from './components/ExpandableCard'
import ExpandableCard from './components/ExpandableCard/index'
import { AuroraBackground } from './components/AuroraBG'
import { card1, card2, card3, card4, card5, card6, card7, card8, card9 } from './lib/icons'
import ScrollToTopButton from './components/ScrollToTopButton'
//bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]

const shopData = {
  name: 'catalogstatic',
  title: 'Catalog Static',
  description: 'Descubre la moda que te define',
  darkMode: true,
  categories: [
    {
      name: 'CATEGORIE 1',
      path: '',
      code: 1
    },
    {
      name: 'CATEGORIE 2',
      path: '',
      code: 2
    },
    {
      name: 'CATEGORIE 3',
      path: '',
      code: 3
    },
    {
      name: 'CATEGORIE 4',
      path: '',
      code: 4
    }]
}

function App() {
  const actualYear = new Date().getFullYear()

  return (
    <div className="absolute top-0 z-[-2] w-full flex flex-col justify-center items-center bg-white">

      <nav className='hidden w-full p-3 justify-between'>
        <p className='ml-6 font-extrabold uppercase'>
          {shopData.name}
        </p>
        <p className='mr-6'>
          {shopData.darkMode ?
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            </svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
          }
        </p>
      </nav>

      <AuroraBackground>
        <div className='flex flex-col w-full h-[90dvh] bg-cover py-12 bg-top'
          style={{ backgroundImage: `url("https://img.ltwebstatic.com/images3_er/2024/07/17/14/172118771072cc0ab96a9059e6e3d21f27008c8ed6_thumbnail_2400x.webp")` }}
        >
          <div className='m-12 text-center text-slate-100 h-full'>
            <h1 className='text-7xl font-bold drop-shadow-lg'>{shopData.title}</h1>
            <h2 className='text-2xl drop-shadow-lg'>{shopData.description}</h2>
          </div>
        </div>
      </AuroraBackground>
      <ScrollToTopButton />
      <div className='sm:w-full w-[80%] flex sm:flex-row flex-col justify-center sm:gap-9 mb-6 sm:mb-0 mt-12 gap-3'>
        {shopData.categories.map(i =>
          <figure key={i.code} className='opacity-50 bg-gray-200 hover:bg-white hover:opacity-100 cursor-pointer'>
            <figcaption className='px-4 py-3 font-semibold'>
              {i.name}
            </figcaption>
          </figure>
        )}
      </div>

      <div className='w-full'>
        <div className='sm:py-12 md:px-24 p-0'>
          <ExpandableCardDemo />
        </div>
      </div>

      <footer className='bg-[#21242b] w-full px-3 md:px-24 lg:px-60 xl:px-96 mt-6'>
        <div className='my-8 border-[1px] border-gray-400 w-[430px] flex'>
          <input className='py-3 px-4 w-full bg-transparent text-sm font-semibold' placeholder='Your Email' />
          <div className='cursor-pointer font-semibold hover:bg-slate-300 uppercase bg-slate-100 w-[25%] text-sm px-3 py-3 text-center'>Subscribe</div>
        </div>

        <div className='text-white flex justify-between'>
          <div>
            <p className='text-xl font-bold mb-6'>Customer Service</p>
            <ul className='text-sm font-semibold flex flex-col gap-3'>
              <li>
                Shipping Info
              </li>
              <li>
                Return Policy
              </li>
              <li>
                Contact Us
              </li>
            </ul>
          </div>

          <div>
            <p className='text-xl font-bold mb-6'>Privacy & Terms</p>
            <ul className='text-sm font-semibold flex flex-col gap-3'>
              <li>
                Privacy Policy
              </li>
              <li>
                Terms & Conditions
              </li>
            </ul>
          </div>
        </div>

        <div className='mx-8 my-4 flex gap-4 justify-center'>
          {card1}{card2}{card3}{card4}{card5}{card6}{card7}{card8}{card9}
        </div>
        <div className='mb-4'>
          <p className='text-center text-white text-xs uppercase'>©{actualYear} {shopData.name} - ALL RIGHTS RESERVED</p>
        </div>

      </footer>

    </div>
  )
}

export default App