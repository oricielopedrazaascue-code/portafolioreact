import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Cotizador from "./components/Cotizador";
import FormularioServicios from "./components/FormularioServicios";
import RegistroClientes from "./components/RegistroClientes";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Cotizador />
        <FormularioServicios />
        <RegistroClientes />
      </main>
      <Footer />
    </>
  );
}

export default App;
