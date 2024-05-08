export default function Hero() {
  return (
    <section
      id="home"
      className="pt-24 md:mt-0 md:pt-44 md:pb-28 flex flex-col items-center justify-between"
    >
      <div className=" flex flex-col justify-center items-center ">
        {/*     <div className="absolute bg-[#222541] w-[50%] h-[80%] top-[10%] blur-3xl  rounded-full animate-pulse  -z-50 "></div> */}
        <div className="flex flex-col items-center justify-center gap-5 text-[#ffffff] ">
          <h1 className="bg-gradient-to-r from-slate-50 to-blue-900 bg-clip-text text-transparent text-[3.25rem] leading-[70px] text-center md:text-8xl font-bold md:text-center md:leading-[120px]">
            Inovando o Amanhã,
            <br /> Capacitando Mudanças
            <br />
            Através da Tecnologia
          </h1>
          <p className=" hidden md:block text-base md:text-2xl text-center text-[#8CA4BC]">
            Descubra o Futuro Hoje com AllTec, Onde a <br />
            Inovação Impulsiona Cada Solução para a Frente
          </p>
          <p className="block md:hidden w-[90%] text-base md:text-2xl text-center text-[#8CA4BC]">
            Descubra o Futuro Hoje com AllTec, Onde a Inovação Impulsiona Cada
            Solução para a Frente
          </p>
        </div>
      </div>
    </section>
  );
}
