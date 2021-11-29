import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import DetailMovie from './Pages/DetailMovie/DetailMovie';
import ListMovies from './Pages/ListMovies/ListMovie';
import Login from './Pages/Login/Login';

function App() {
  return (
    <BrowserRouter>
		<Routes>
			<Route path="/" exact element={<Home />} />
			<Route path="/detail-movie/:id" exact element={<DetailMovie />} />
			<Route path="/list-movies" exact element={<ListMovies/>} />
			<Route path="/login" exact element={<Login/>} />
		</Routes>
	</BrowserRouter>
  );
}

export default App;
