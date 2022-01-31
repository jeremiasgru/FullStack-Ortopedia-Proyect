import '../styles/components/pages/Nosotros.css'

const Nosotros = (props) => {
    return (
        <main className="holder">
        <div className="historia">
            <h2>Historia</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi recusandae cumque sunt saepe. Fugiat ab tempore quae nam beatae quisquam ea voluptatem harum ipsum vitae ullam sed, maiores esse consectetur!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nesciunt quo quam, autem totam veniam repellendus dignissimos. Voluptatibus soluta possimus ipsum molestias tempora inventore expedita debitis, autem voluptate beatae nobis?</p>
        </div> 
        <br></br>
        <div className="staff">
            <h2>Nuestro Personal</h2>
            <div className="personas">
                <div className="persona">
                    <img src="img/perfil-vacio-hombre.png" alt=""/>
                    <h5>Fernando Grubert</h5>
                    <h6>Gerente General</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, minus laborum saepe delectus quo rem ad laboriosam reprehenderit! Dolores ratione molestias sequi incidunt tempora error maiores magnam amet eligendi perspiciatis?</p>
                </div>
                <div className="persona">
                    <img src="img/perfil-vacio-hombre.png" alt=""/>
                    <h5>Tomas Grubert</h5>
                    <h6>Limpieza</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, minus laborum saepe delectus quo rem ad laboriosam reprehenderit! Dolores ratione molestias sequi incidunt tempora error maiores magnam amet eligendi perspiciatis?</p>
                </div>
                <div className="persona">
                    <img src="img/perfil-vacio-hombre.png" alt=""/>
                    <h5>Jeremias Grubert</h5>
                    <h6>Gerente General</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, minus laborum saepe delectus quo rem ad laboriosam reprehenderit! Dolores ratione molestias sequi incidunt tempora error maiores magnam amet eligendi perspiciatis?</p>
                </div>
                <div className="persona">
                    <img src="img/perfil-vacio-mujer.jpg" alt=""/>
                    <h5>Soledad Navarro</h5>
                    <h6>Ventas</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, minus laborum saepe delectus quo rem ad laboriosam reprehenderit! Dolores ratione molestias sequi incidunt tempora error maiores magnam amet eligendi perspiciatis?</p>
                </div>
                <div className="persona">
                    <img src="img/perfil-vacio-mujer.jpg" alt=""/>
                    <h5>Guadalupe Sayago</h5>
                    <h6>Atencion al cliente</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, s laborum saepe delectus quo rem ad laboriosam reprehenderit! Dolores ratione molestias sequi incidunt tempora error mai laborum saepe delectores magnam amet eligendi perspiciatis?</p>
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

export default Nosotros;





