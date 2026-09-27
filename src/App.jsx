import './App.css'
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar'
import NewCards from './components/Header'

function App() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <div style={{ fontFamily: "Thamanyah" }} className='m-20'>
        <div className='flex  justify-between my-10'>

          <div className='w-180'>
            <h1 className="text-7xl mb-20">
              {t('welcome')}
            </h1>

            <p className='flex justify-center mb-8'>
              {t('description')}
            </p>
          </div>

          <div>
            <img src="https://www.rakaya.sa/national-day/slide-3-mobile.png" className="h-90 w-90 me-3" alt="Thaber Logo" />
          </div>

        </div>
        
        <div class="inline-grid grid-cols-6 gap-6 mt-10">
          <NewCards />
        </div>

      </div>
    </>
  )
}

export default App
