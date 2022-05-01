import style from './styles.module.scss'
import Schedule from './Schedule'
import FirstSection from './FirstSection'
import Brands from './Brands'
import DigitalServices from './DigitalServices'
import Cases from './Cases'
import Testimonals from './Testimonals'
import ListServices from './ListServices'
import Contact from './Contact'
import GetService from './GetService'
import GetPrice from './GetPrice'
import DataInfo from './DataInfo'

export function Main(){
  return(
    <>
    <main className={style.main}>
      <FirstSection/>

        <Brands/>
{/*         <DigitalServices/> */}
        <Schedule/>
        <section className={style.consultFree}> 
          <p>Ainda não sabe como digitalizar seu negocio? Te ajudamos com isso de graça!</p>
          <button>Consultoria Gratis</button>
        </section>
        <DataInfo/>
        <Cases/>
        <Testimonals/>
        <ListServices/>
        <Contact/>

    </main>
    </>
  )
}
