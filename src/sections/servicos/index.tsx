import Botao from "../../components/button";

const Data = [
  {
    icon: "💻",
    service: "Suporte em T.I",
    description:
      "Mantenha seus sistemas operando de forma eficiente e segura com nossa equipe especializada em Tecnologia da Informação. Oferecemos suporte abrangente para resolver problemas técnicos, configurar redes, proteger dados e garantir que sua infraestrutura de TI funcione sem interrupções, permitindo que você se concentre em seus objetivos comerciais.",
  },
  {
    icon: "🔒",
    service: " Instalações de sistema de segurança",
    description:
      "Proteja o seu espaço com as mais avançadas tecnologias de segurança. Oferecemos instalações de sistemas de segurança sob medida para suas necessidades, garantindo tranquilidade e proteção para sua residência ou negócio.",
  },
  {
    icon: "☀️",
    service: " Soluções em energia solar",
    description:
      "Faça a transição para uma fonte de energia limpa e sustentável com nossas soluções em energia solar. Desde a avaliação do local até a instalação dos painéis, oferecemos um serviço completo para ajudá-lo a economizar energia e reduzir sua pegada de carbono.",
  },
  {
    icon: "🛍️ ",
    service: " Vendas de diversos produtos",
    description:
      "Explore nossa ampla gama de produtos cuidadosamente selecionados para atender às suas necessidades. De eletrônicos a produtos domésticos, oferecemos qualidade e variedade para garantir sua satisfação em cada compra. ",
  },
];

export default function Servicos() {
  return (
    <div
      id="services"
      className="relative flex flex-col gap-5 items-start md:gap-10 md:items-center md:justify-center my-10 "
    >
      {/*   <div className="absolute bg-[#222541] w-[80%] h-[90%] right-3 rounded-full blur-3xl -z-50"></div> */}
      <h1 className="text-4xl md:text-5xl text-white">Nossos Serviços</h1>
      <p className="text-left text-base md:text-center md:w-[50%] text-[#8CA4BC]">
        Oferecemos soluções completas de segurança digital e energia
        sustentável, visando simplificar sua vida e otimizar eficiência. Com
        equipe experiente, garantimos inovação confiável que excede
        expectativas, concretizando suas metas.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {Data.map((item, index) => {
          return (
            <div
              key={index}
              className=" border-2 flex flex-col gap-3  border-[#3f415c] p-5 rounded-md"
            >
              <div className="text-5xl  border-[#3f415c] border-2 rounded-md flex items-center justify-center w-[80px] h-[80px]">
                {item.icon}
              </div>
              <h1 className="text-2xl text-white">{item.service}</h1>
              <p className="text-base text-[#8CA4BC]">{item.description}</p>
            </div>
          );
        })}
      </div>

      <Botao />
    </div>
  );
}
