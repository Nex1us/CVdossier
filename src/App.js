import { SnackbarProvider, } from 'notistack'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
function App() {
  return (
    <SnackbarProvider>
          <div className="App">
      <header className="App-header">
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}></Route>
<Route path='/admin' element={<Admin/>}/>
</Routes>
</BrowserRouter>
      </header>
    </div>
    </SnackbarProvider>

  );
}

export default App;
