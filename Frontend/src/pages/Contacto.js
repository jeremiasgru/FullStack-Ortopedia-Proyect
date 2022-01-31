import '../styles/components/pages/Contacto.css'
import '../styles/components/pages/whatsapp.css'

const Contacto = (props) => {
    return (
        
        <main className="holder">
         <div className="container">
      <span className="big-circle"></span>
      <img src="img/shape.png" className="square" alt="" />
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum adipisci recusandae praesentium dicta!
          </p>

          <div className="info">
            <div className="information">
              <img src="img/location.png" className="icon" alt="" />
              <p>Mitre 106, Santiago del Estero,Capital.</p>
            </div>
            <div className="information">
              <img src='img/email.png' className="icon" alt="" />
              <p>ortopediasancarlos@hotmail.com</p>
            </div>
            <div className="information">
              <img src="img/phone.png" className="icon" alt="" />
              <p>385-4217025</p>
            </div>
          </div>

          <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-icons">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form action="index.html" autocomplete="off">
            <h3 className="title">Contactanos</h3>
            <div className="input-container">
              <input type="text" name="name" className="input" placeholder='Nombre completo'/>
    
              <span>Nombre completo</span>
            </div>
            <div className="input-container">
              <input type="email" name="email" className="input" placeholder='Email'/>

              <span>Email</span>
            </div>
            <div className="input-container">
              <input type="tel" name="phone" className="input" placeholder='Telefono' />

              <span>Telefono</span>
            </div>
            <div className="input-container textarea">
              <textarea name="message" className="input" placeholder='Tu mensaje'></textarea>

              <span>Mensaje</span>
            </div>
            <input type="submit" value="Enviar" className="btn" />
          </form>
        </div>
      </div>
    </div>

    {/* Whatsapp Widget */}
    
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
    <a href="https://api.whatsapp.com/send?phone=+543855258587&text=Ortopedia%20San%20Carlos%20-%20MITRE%20106" class="float" target="_blank">
        <i class="fa fa-whatsapp my-float"></i>
    </a>
  
    </main>
  
    );
}

export default Contacto;