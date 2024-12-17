
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact  from "./Contact";
import Calculadora  from './Calculadora';
import Menu from './Menu';

const RouteLink = () => {
  return (
    <BrowserRouter> 
        <Menu />
        <Routes>
            <Route path="/calculadora" element={<Calculadora/>} />
            <Route path="/contact" element={<Contact /> } />
        </Routes>
    </BrowserRouter>
  )
}

export default RouteLink
