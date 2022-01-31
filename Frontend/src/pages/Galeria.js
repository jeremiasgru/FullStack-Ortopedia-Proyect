import '../styles/components/pages/Galeria.css'

const Galeria = (props) =>{
    return(
        <main class="holder">
    <h2>Galeria</h2>
    <div class="galeria">
        <div class="foto">
            <img src="img/hospital.labanda.galeria.jpg" alt="img01"/>
            <h4 class="text-h4">Hospital "La banda"</h4>
            <p class="text-description">Equipamiento parcial del nuevo "Hospital Cepsi Dpto. La Banda".</p>
        </div>
        <div class="foto">
            <img src="img/cepsi.galeria.jpg" alt="img02"/>
            <h4 class="text-h4">Hospital de niños</h4>
            <p class="text-description">Equipamiento del "Hospital de niños CEPSI" fundado en 2010.</p>
        </div>
        <div class="foto">
            <img src="img/equip.galeria.jpg" alt="img03"/>
            <h4 class="text-h4">Sala internacion</h4>
            <p class="text-description">Sala de internacion totalmente equipada por nosotros.</p>
        </div>
        <div class="foto">
            <img src="img/protesis.galeria.jpg" alt="img04"/>
            <h4 class="text-h4">Protesis Modernas</h4>
            <p class="text-description">Nuevos estilos de protesis para amputacion, con un estilo moderno y diferente.</p>
        </div>
        <div class="foto">
            <img src="img/sala.rehabilitacion.galeria.jpg" alt="img05"/>
            <h4 class="text-h4">Sala Rehabilitación</h4>
            <p class="text-description">Equipamiento de sala de rehabilitacion.</p>
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

export default Galeria;