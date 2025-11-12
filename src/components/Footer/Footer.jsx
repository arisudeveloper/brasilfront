import './Footer.css'
import brasil from "../../assets/images/clients/brasil.png"

const Footer = () => {
  return (
    <footer id='footer'>
      <section className='sec1footer'>
        <p>Because we care, <span>we commit.</span></p>
      </section>

      <section>
        <img src={brasil} alt=""  className='imgBrasil'/>
      </section>

      <section className='sec2footer'>
        <p>BRAZIL <span>SENSATIONS</span></p>
      </section>

      
    </footer>
  )
}

export default Footer
