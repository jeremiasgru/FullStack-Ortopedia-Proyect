import '../styles/components/pages/Home.css'

const HomePage = (props) => {
    return (
        <main className="holder">
        <div className="homeimg">
        <img src="img/OrtopediaHome.jpg" alt="img01"/>
        </div>
        <div className="columnas">
            <div className="bienvenidos left">
                <h2>Bienvenidos!</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero necessitatibus, nesciunt nihil numquam fuga assumenda nisi quas, ad voluptates laudantium optio repellendus eum doloremque. Voluptate enim fugiat debitis sint recusandae?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum harum ducimus atque repellat libero ipsam fugit officia rem itaque porro cupiditate dolores animi corrupti, laboriosam sapiente vitae quos maxime dolore.</p>
            </div>
        <div className="testimonios right">
            <h2>Testimonios</h2>
            <div className="testimonio">
                <span className="cita"> Todo Excelente.</span>
                <span className="autor">Augusto Paz - Optica ORUS</span>
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

export default HomePage;