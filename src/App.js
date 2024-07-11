import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Hello from './components/Hello';

function App() {
  return (
    <div class="container">
     <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/HelloWorld" element={<Hello />}>
       </Route>
        </Routes>
    </BrowserRouter>
  </div>    
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);