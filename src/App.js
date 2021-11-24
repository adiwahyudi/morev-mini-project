import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import DetailMovie from './Pages/DetailMovie/DetailMovie';

function App() {
  return (
    <BrowserRouter>
					<Routes>
						<Route path="/" exact element={<Home />} />
						<Route path="/detail-movie" exact element={<DetailMovie />} />
					</Routes>
				</BrowserRouter>
  );
}

export default App;
