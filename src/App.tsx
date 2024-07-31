import { ButtonUp } from "./components/ButtonUp";
import { ButtonWhats } from "./components/ButtonWhats";
import { Footer } from "./components/footer";
/* import { Galeria } from "./components/galeria"; */
import { Header } from "./components/header";
import { Mapa } from "./components/mapa";
/* import Clientes from "./sections/clientes"; */

import Hero from "./sections/hero";
import Parceiros from "./sections/parceiros";
import Produtos from "./sections/produtos";
import QuemSomos from "./sections/quem-somos";
import Servicos from "./sections/servicos";

/* import QuemSomos from "./sections/quem-somos";
import Servicos from "./sections/servicos"; */

function App() {
  return (
    <div className="relative">
      <div className="absolute  w-[300px] h-[300px] bg-[#222541] md:w-[600px] md:h-[600px] top-[20%]  animate-pulse blur-3xl  rounded-full   -z-50 "></div>
      <div className="absolute  w-[300px] h-[300px] bg-[#ffffff73] md:w-[200px] md:h-[200px] top-[0%]  animate-pulse  blur-3xl  rounded-full   -z-50 "></div>
      <div className="hidden md:absolute   w-[300px] h-[300px] bg-[#ffffff36] md:w-[200px] md:h-[200px] top-[15%] left-[55%]  animate-pulse blur-3xl  rounded-full   -z-50 "></div>
      <div className="absolute  w-[300px] h-[300px] bg-[#222541] md:w-[600px] md:h-[600px] top-[0%] right-0 blur-3xl  rounded-full animate-pulse  -z-50 "></div>
      <div className="absolute  w-[300px] h-[300px] bg-[#222541] md:w-[600px] md:h-[600px] top-[30%]   blur-3xl  rounded-full right-0 animate-pulse   -z-50 "></div>
      <div className="absolute  w-[300px] h-[300px] bg-[#222541] md:w-[600px] md:h-[600px] top-[50%]  animate-pulse blur-3xl  rounded-full   -z-50 "></div>
      <div className="absolute  w-[300px] h-[300px] bg-[#222541] md:w-[600px] md:h-[600px] top-[70%]   blur-3xl  rounded-full animate-pulse  right-0 -z-50 "></div>
      {/*    
      <div className="absolute bg-[#222541] w-[600px] h-[600px] top-[10%]  rounded-full   -z-50 "></div> */}
      <Header />
      <main className="px-5 container mx-auto flex flex-col gap-10">
        <Hero />

        <hr className=" animate-pulse" />
        <QuemSomos />
        <hr className=" animate-pulse" />
        <Servicos />
        <hr className=" animate-pulse" />

        <Produtos />
        {/*         <hr className=" animate-pulse" />
        <Clientes></Clientes> */}
        {/*       <Galeria /> */}

        {/* <Parceiros /> */}
        <hr className="mb-20 animate-pulse" />
      </main>
      <ButtonUp />
      <ButtonWhats />

      <Mapa />

      <hr className=" animate-pulse" />

      <Footer />
      <hr className=" animate-pulse" />
    </div>
  );
}

export default App;
