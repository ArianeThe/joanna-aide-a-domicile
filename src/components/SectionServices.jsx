import entretien from '../assets/icons/entretien.png';
import aide from '../assets/icons/aide.png';
import bonneHumeur from '../assets/icons/bonne-humeur.png';

function SectionServices() {
  return (
    <section className="section">
      <h2>Mes services</h2>
      <div className="services">
        <div className="service-card">
        <img src={entretien} alt="Entretien" className="service-icon" />
          <h3>Entretien</h3>
          <ul className="task-list">
            <li>Nettoyage complet du logement</li>
            <li>Rangement</li>
            <li>Entretien régulier ou ponctuel selon vos besoins</li>
          </ul>
        </div>
        <div className="service-card">
        <img src={aide} alt="Aide" className="service-icon" />
          <h3>Aide à la personne</h3>
          <ul className="task-list">
            <li>Accompagnement dans les gestes du quotidien</li>
            <li>Courses</li>
            <li>Présence rassurante</li>
          </ul>
        </div>
        <div className="service-card">
         <img src={bonneHumeur} alt="bonne-humeur" className="service-icon" />
          <h3>Bonne humeur</h3>
          <ul className="task-list">
            <li>Travailler dans la bonne humeur, 
                c'est offrir plus qu'un service : 
                c'est partager un moment humain et sincère</li>
            <li>Discussions</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SectionServices;
