import './App.css'
import Compartilhe from './components/Compartilhe/Compartilhe'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Produtos from './components/Produtos/Produtos'
import Section from './components/Section/Section'
import Section1 from './components/Section1/Section1'

function App() {


  return (
    <div>
      <Header/>
      <Section/>
      <Section1 textoSection={"Sua seleção espcial"}/>
      <Produtos/>
      <Section1 textoSection={"Compartilhe a novidade"}/>
      <Compartilhe/>
      <Footer/>
    </div>
  )
}

export default App
