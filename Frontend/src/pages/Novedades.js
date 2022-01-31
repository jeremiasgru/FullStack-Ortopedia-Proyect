import '../styles/components/pages/Novedades.css'

const Novedades = (props) =>{
    return(
        <main className="holder">
        <h2>Novedades</h2>
        <div className="novedades">
            <h3>Titulo</h3>
            <h4>Subtitulo</h4>
            <p> Descripcion - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa quisquam voluptatum, ab facilis commodi labore assumenda maxime. Inventore, placeat. Quae quibusdam provident et sunt ut excepturi, aspernatur dignissimos repudiandae illo.</p>
            <hr/>
        </div>
        <div className="novedades">
            <h3>Titulo</h3>
            <h4>Subtitulo</h4>
            <p> Descripcion - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa quisquam voluptatum, ab facilis commodi labore assumenda maxime. Inventore, placeat. Quae quibusdam provident et sunt ut excepturi, aspernatur dignissimos repudiandae illo.</p>
            <hr/>
        </div>
        <div className="novedades">
            <h3>Titulo</h3>
            <h4>Subtitulo</h4>
            <p> Descripcion - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa quisquam voluptatum, ab facilis commodi labore assumenda maxime. Inventore, placeat. Quae quibusdam provident et sunt ut excepturi, aspernatur dignissimos repudiandae illo.</p>
            <hr/>
        </div>
        
    {/* Whatsapp Widget */}
    
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
    <a href="https://api.whatsapp.com/send?phone=+543855258587&text=Ortopedia%20San%20Carlos%20-%20MITRE%20106" class="float" target="_blank">
        <i class="fa fa-whatsapp my-float"></i>
    </a>
    
    </main>
    );
}

export default Novedades;