
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './components/landingPage';
import Register from './components/register';
import Admin from './components/admin';
import AdminRegister from './components/adminRegister';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Instructions from './components/quiz components/instruction';
import AddQuestion from './components/quiz components/addQuestion';
import Questions from './components/quiz components/questions';
function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/Register_page' element={<Register />} />
          <Route path='/Admin_page' element={<Admin />} />
          <Route path='/Admin_Register_page' element={<AdminRegister />} />
          <Route path='Instructions-page' element={<Instructions />} />
          <Route path='/add_question_page' element={<AddQuestion />} />
          <Route path='/question_page' element={<Questions />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
