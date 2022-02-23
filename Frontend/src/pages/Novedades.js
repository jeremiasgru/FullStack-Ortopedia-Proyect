import { useState, useEffect } from 'react';
import axios from 'axios'; //para las peticiones 
import NovedadItem from '../components/novedades/NovedadItem';


import '../styles/components/pages/Novedades.css';

const Novedades = (props) =>{

    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/novedades`);
            setNovedades(response.data);
            setLoading(false);
        };

        cargarNovedades();
    }, []);

    return(
        <main className="holder">
        <h2>Novedades</h2>
        {loading ? (
            <p>Cargando...</p>
        ) : (
            novedades.map(item => <NovedadItem key={item.id}
                title={item.titulo} subtitle={item.subtitulo}
                imagen={item.imagen} body={item.cuerpo} />)
        )}
         
        
    {/* Whatsapp Widget */}
    
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
    <a href="https://api.whatsapp.com/send?phone=+543855258587&text=Ortopedia%20San%20Carlos%20-%20MITRE%20106" class="float" target="_blank">
        <i class="fa fa-whatsapp my-float"></i>
    </a>
    
    </main>
    );
}

export default Novedades;