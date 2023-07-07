
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from './components/header/Header';
import Home from './page/Home';
import MovieList from './components/MovieList/MovieList'
import MovieDetail from './page/MovieDetail/MovieDetail'

function App() {
  return (
    <div className="App">
      <Router>
            <Header/>
         <Routes>
               <Route index element={<Home/>}></Route>
               {/* dynamic route in place of id any thing can be there due to whichit will redirect to that page */}
               {/* rendering */}
               <Route path="movie/:id" element={<MovieDetail/>}></Route>
               <Route path="movies/:type" element={<MovieList/>}></Route>
               {/* for error */}
               <Route path="/*" element={<h1>Error Page</h1>}> </Route>
         </Routes>
         
      </Router>
      
    </div>
  );
}

export default App;
