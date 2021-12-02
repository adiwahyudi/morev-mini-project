import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import DetailMovie from './Pages/DetailMovie/DetailMovie';
import ListMovies from './Pages/ListMovies/ListMovie';
import Login from './Pages/Login/Login';
import Profile from './Pages/Profile/Profile';
import Register from './Pages/Register/Register';

function App() {
  return (
    <BrowserRouter>
		<Routes>
			<Route path="/" exact element={<Home />} />
			<Route path="/detail-movie/:id" exact element={<DetailMovie />} />
			<Route path="/list-movies" exact element={<ListMovies/>} />
			<Route path="/login" exact element={<Login/>} />
			<Route path="/register" exact element={<Register/>} />
			<Route path="/profile" exact element={<Profile/>} />
		</Routes>
	</BrowserRouter>
  );
}

export default App;
