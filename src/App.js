import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import AllMeetUp from './pages/AllMeetUp';
import NewMeetUp from './pages/NewMeetUp';
import Favourite from './pages/Favourite';
import Layout from './Components/layout/Layout';

function App() {
  return (
    <Layout>
      
      <Routes>
        <Route path="/" element={<AllMeetUp/>} />
        <Route path="/new-meetup" element={<NewMeetUp/>} />
        <Route path="/favourite" element={<Favourite/>} />
      </Routes>
    </Layout>
  );
}

export default App;
