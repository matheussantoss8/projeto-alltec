import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Data = [
  {
    icon: "💻",
    service: "Suporte em T.I",
    description:
      "Mantenha seus sistemas operando de forma eficiente e segura com nossa equipe especializada em Tecnologia da Informação. Oferecemos suporte abrangente para resolver problemas técnicos, configurar redes, proteger dados e garantir que sua infraestrutura de TI funcione sem interrupções, permitindo que você se concentre em seus objetivos comerciais.",
    link: "https://www.instagram.com/stories/highlights/17956616555606607/",
  },
  {
    icon: "🔒",
    service: "Instalações de sistema de segurança",
    description:
      "Proteja o seu espaço com as mais avançadas tecnologias de segurança. Oferecemos instalações de sistemas de segurança sob medida para suas necessidades, garantindo tranquilidade e proteção para sua residência ou negócio.",
    link: "https://www.instagram.com/stories/highlights/17956616555606607/",
  },
  {
    icon: "☀️",
    service: "Soluções em energia solar",
    description:
      "Faça a transição para uma fonte de energia limpa e sustentável com nossas soluções em energia solar. Desde a avaliação do local até a instalação dos painéis, oferecemos um serviço completo para ajudá-lo a economizar energia e reduzir sua pegada de carbono.",
    link: "https://www.instagram.com/stories/highlights/17956616555606607/",
  },
  {
    icon: "🛍️ ",
    service: "Vendas de diversos produtos",
    description:
      "Explore nossa ampla gama de produtos cuidadosamente selecionados para atender às suas necessidades. De eletrônicos a produtos domésticos, oferecemos qualidade e variedade para garantir sua satisfação em cada compra.",
    link: "https://www.instagram.com/stories/highlights/17956616555606607/",
  },
];

export default function Clientes() {
  return (
    <>
      <h1
        id="products"
        className="text-4xl text-left md:text-center md:text-5xl text-white"
      >
        Nossos Produtos
      </h1>
      <p className="text-left text-base md:text-center md:mx-auto md:w-[50%] text-[#8CA4BC]">
        Oferecemos soluções completas de segurança digital e energia
        sustentável, visando simplificar sua vida e otimizar eficiência. Com
        equipe experiente, garantimos inovação confiável que excede
        expectativas, concretizando suas metas.
      </p>
      <Carousel showDots={false} infinite responsive={responsive}>
        {Data.map((item, index) => {
          return (
            <div
              key={index}
              className="h-[450px] border-2 flex flex-col gap-3 mx-4 border-[#3f415c] p-5 rounded-md"
            >
              <div className="text-5xl border-[#3f415c] border-2 rounded-md flex items-center justify-center w-[80px] h-[80px]">
                {item.icon}
              </div>
              <h1 className="text-2xl text-white">{item.service}</h1>
              <p className="text-base text-[#8CA4BC]">{item.description}</p>
              <a
                href={item.link}
                className="text-base text-[#8CA4BC] hover:underline"
              >
                Ver mais
              </a>
            </div>
          );
        })}
      </Carousel>
    </>
  );
}
