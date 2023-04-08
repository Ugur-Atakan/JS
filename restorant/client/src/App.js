import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainMenu from './MainMenu';
import Urunler from './Urunler';
const Anasayfa="localhost:3000";
function App() {
  return (
    <Router>
      <MainMenu />
      <Routes>
        <Route exact path="/" element={<Anasayfa />} />
        <Route exact path="/foods/:id" element={<Urunler />} />
      </Routes>
    </Router>
  );
}
export default App;