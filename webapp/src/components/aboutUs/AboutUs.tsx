import './AboutUs.css'

function aboutInfo() {

    const miembros = [
        {
            nombre: 'Chen Xin Pan Wang',
            rol: 'Developer Fronted'
        },

        {
            nombre: 'Sergio Buenaga',
            rol: 'Developer Fronted'
        },

        {
            nombre: 'Daniel Alberto Alonso',
            rol: 'Developer Fronted'
        },

        {
            nombre: 'Pablo Urones',
            rol: 'Developer Fronted'
        }

    ];




    return (
        <div className="section" >
                <div className="container">
                    <div className="content-section">
                        <div className="title">
                            <h1> About Us</h1>
                        </div>
                        <div className="content">
                            <h2>
                                Somos el grupo B del Laboratorio L-05 de la asignatura Arquitectura del Software perteneciente
                                a la carrera de Ingeniería Informática del Software impartida en la Universidad de Oviedo.

                                <p>
                                    Los participantes de este proyecto somos los siguientes:

                                </p> 

                                <div className="team-members">
                                    {miembros.map(member => (
                                        <div className="miembro" key={member.nombre}>
                                            <h3>{member.nombre}</h3>
                                            <p className='roles'>
                                                {member.rol}
                                            </p>
                                        </div>
                                    ))}
                                </div>                             
                                
                            </h2>
                        </div>
                    </div>

                </div>
        </div>
    );
}

export default aboutInfo;