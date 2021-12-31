import '../styles/components/pages/Contacto.css'

const Contacto = (props) => {
    return (
        <main className="holder">
        <div className="columna left">
            <h2>Contacto Rapido</h2>
            <form action="" method="" class="formulario">
            <p>
                <label for="Nombre"></label>
                <input type="text" placeholder="Nombre"/>
                
            </p>
            <p>
                <label for="Email"></label>
                <input type="email" placeholder="Email"/>
            </p>
            <p>
                <label for="Teléfono"></label>
                <input type="text" placeholder="Teléfono"/>
            </p>
            <p>
                <label for="comentario">Comentario</label>
                <textarea id="comentario" ></textarea>
            </p>
            <p className="input">
                <input type="submit" value="Enviar"/>
            </p>
            </form>
        </div>
        <div className="columna right">
            <h2>Otras vias de contactos</h2>
            <p>Tambien se pueden comunicar con nosotros ....</p>
            <ul>
                <li>Telefono: 385-4217025</li>
                <li>Email: ortopediasancarlos@hotmail.com</li>
                <li>Facebook: facebook.com/ortopediasancarlos</li>
                <li>Instagram: @ortopediasancarlos</li>
            </ul>
        </div>
    </main>
    );
}

export default Contacto;