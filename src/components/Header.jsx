import headerImage from '../assets/images/aide-a-dom.png';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Joanna Dupré</h1>
        <h2>Aide à domicile</h2>
      </div>

      <div className="header-image">
        <img src={headerImage} alt="Aide à domicile" />
      </div>

    </header>
  );
}

export default Header;  
