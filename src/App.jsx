import './styles/main.css';
import Header from './components/Header';
import SectionQui from './components/SectionQui';
import SectionServices from './components/SectionServices';
import SectionTarifs from './components/SectionTarifs';
import SectionContact from './components/SectionContact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <SectionQui />
        <SectionServices />
        <SectionTarifs />
        <SectionContact />
      </main>
      <Footer />
    </>
  );
}

export default App;
