import NavBar from './componentes/NavBar'
import CartWidget from './componentes/CartWidget'
import ItemListContainer from './componentes/ItemListContainer';

const App = () => {
  return (
    <>
   <NavBar/> 
   <CartWidget />
   <ItemListContainer bienvenida= "Bienvenido a Motoland" mensaje/>
   <ItemListContainer bienvenida= "Bienvenido a Motoland"/>
    </>
  )
}
export default App;